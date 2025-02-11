"use client";
import React, { useState, useEffect } from "react";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useFormikContext,
  FormikHelpers,
} from "formik";
import * as yup from "yup";
import Link from "next/link";
import CTA, { CTABlack } from "../components/CTA";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface FormValues {
  extra: string;
  name: string;
  email: string;
  phoneNumber: string;
  carYear: string;
  brandMake: string;
  model: string;
  vinNumber: string;
  service: string;
  whichGlass?: string;
  wrapCoverage?: string;
  ppfCoverage?: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  carYear: yup
    .number()
    .transform((value, originalValue) => Number(originalValue))
    .min(1900, "Invalid car year")
    .max(new Date().getFullYear(), "Car year can't be in the future")
    .required("Car year is required"),
  brandMake: yup.string().required("Brand/Make is required"),
  model: yup.string().required("Model is required"),
  vinNumber: yup
    .string()
    .matches(/^[A-Za-z0-9-]{1,17}$/, "Invalid VIN number")
    .required("VIN Number is required"),
  service: yup.string().required("Service is required"),
  // Conditionally require 'whichGlass' only when service is 'auto-glass'
  whichGlass: yup
    .string()
    .test("whichGlass-required", "Please choose an option", function (value) {
      const { service } = this.parent;
      if (service === "auto-glass") {
        return !!value && value.trim().length > 0;
      }
      return true;
    }),
  wrapCoverage: yup
    .string()
    .test("wrapCoverage-required", "Please choose an option", function (value) {
      const { service } = this.parent;
      if (service === "car-wrap") {
        return !!value && value.trim().length > 0;
      }
      return true;
    }),
  ppfCoverage: yup
    .string()
    .test("ppfCoverage-required", "Please choose an option", function (value) {
      const { service } = this.parent;
      if (service === "paint-protection-film") {
        return !!value && value.trim().length > 0;
      }
      return true;
    }),
});

export function QuoteForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [selectedService, setSelectedService] = useState("");
  const [formModalOpen, setFormModalOpen] = useState(false);

  // When the URL parameter changes, update the state
  useEffect(() => {
    if (service) {
      setSelectedService(service);
    }
  }, [service]);

  const initialValues: FormValues = {
    extra: "",
    name: "",
    email: "",
    phoneNumber: "",
    carYear: "",
    brandMake: "",
    model: "",
    vinNumber: "",
    service: selectedService || "",
    whichGlass: "",
    wrapCoverage: "",
    ppfCoverage: "",
  };

  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    try {
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setFormModalOpen(true);
      actions.resetForm();
    }
  };

  return (
    <>
      {/* MODAL */}
      <div
        className={`${
          formModalOpen ? "block" : "hidden"
        } fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm`}
      >
        <div className="relative flex flex-col items-center justify-center gap-6 rounded-md bg-[#353535] p-10 shadow-[0px_0px_35px_0px_rgba(0,0,0,0.75)]">
          <h1 className="font-cateItalic text-3xl">Message sent!</h1>
          <p className="text-center xl:text-xl">
            We will get back to you as soon as possible.
          </p>

          <button
            type="button"
            onClick={() => setFormModalOpen(false)}
            className="w-[150px] rounded-md border-2 border-glassBlue bg-black px-3 py-2 font-cate text-lg text-glassBlue shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] transition-all hover:scale-110 hover:border-white hover:text-white"
          >
            Close
          </button>
          <div
            className="absolute right-0 top-0 m-3 size-6 cursor-pointer"
            onClick={() => setFormModalOpen(false)}
          >
            <Image src="/images/close.svg" alt="close" fill />
          </div>
        </div>
      </div>
      {/* FORM */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="grid grid-cols-1 gap-x-12 gap-y-6 md:w-[600px] md:grid-cols-2">
            <Field type="hidden" name="extra" />

            <InputField
              name="name"
              label="Name"
              placeholder="Josh Smith"
              type="text"
            />
            <InputField
              name="email"
              label="Email"
              placeholder="josh@youremail.com"
              type="email"
            />
            <div className="flex w-full flex-col gap-1">
              <label htmlFor="phoneNumber">Phone Number</label>
              <FormatPhoneField
                name="phoneNumber"
                placeholder="(832) 795-8511"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-600"
              />
            </div>
            <InputField
              name="carYear"
              label="Car Year"
              placeholder="2007"
              type="number"
            />
            <InputField
              name="brandMake"
              label="Brand/Make"
              placeholder="BMW"
              type="text"
            />
            <InputField
              name="model"
              label="Model"
              placeholder="Series 1 118d"
              type="text"
            />
            <InputField
              name="vinNumber"
              label="VIN Number"
              placeholder="4Y1-SL658-4-8-Z-4"
              type="text"
            />
            <ServiceInput
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              setFieldValue={setFieldValue}
            />
            <div className="mt-4 flex w-full flex-col items-center justify-center gap-3 md:col-span-2 md:flex-row md:justify-between md:gap-0">
              <div className="text-lg">
                <CTA
                  text="Get a free quote"
                  type="submit"
                  width="200"
                  isSubmitting={isSubmitting}
                />
              </div>
              <p className="text-center">
                Or <br /> call us
              </p>
              <a href="tel:+18327958511" className="text-lg">
                <CTABlack text="(832) 795-8511" type="button" width="200" />
              </a>
            </div>

            <Link
              href="/privacy-policy"
              className="text-center text-xs opacity-50 md:col-span-2"
            >
              By submitting this form, you agree to our{" "}
              <span className="underline">Privacy Policy</span>.
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

function ServiceInput({
  selectedService,
  setSelectedService,
  setFieldValue,
}: {
  selectedService: string;
  setSelectedService: (service: string) => void;
  setFieldValue: (field: string, value: string) => void;
}) {
  let ServiceComponent: JSX.Element | null = null;
  switch (selectedService) {
    case "auto-glass":
      ServiceComponent = <AutoGlassInputs />;
      break;
    case "car-wrap":
      ServiceComponent = <CarWrapInputs />;
      break;
    case "paint-protection-film":
      ServiceComponent = <PPFInputs />;
      break;
    default:
      ServiceComponent = <></>;
  }
  return (
    <>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="service">Service</label>
        <div className="rounded-md border border-white bg-black px-3 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]">
          <Field
            as="select"
            name="service"
            id="service"
            value={selectedService} // Bind the value to state
            className="w-full border-none bg-black text-white placeholder-white outline-none"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setFieldValue("service", e.target.value);
              setSelectedService(e.target.value);
            }}
          >
            <option value="" disabled>
              Please choose a service
            </option>
            <option value="auto-glass">Auto Glass</option>
            <option value="adas-calibration">ADAS Calibration</option>
            <option value="window-tinting">Window Tinting</option>
            <option value="car-wrap">Car Wrap</option>
            <option value="paint-protection-film">Paint Protection Film</option>
            <option value="ceramic-coating">Ceramic Coating</option>
            <option value="multiple">Multiple</option>
          </Field>
        </div>
        <ErrorMessage name="service" component="div" className="text-red-600" />
      </div>
      {ServiceComponent}
    </>
  );
}

function AutoGlassInputs() {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor="whichGlass">Which Glass</label>
      <div className="rounded-md border border-white bg-black px-3 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]">
        <Field
          as="select"
          name="whichGlass"
          id="whichGlass"
          className="w-full border-none bg-black text-white placeholder-white outline-none"
        >
          <option value="" disabled>
            Please choose an option
          </option>
          <option value="Windshield">Windshield</option>
          <option value="Drivers door front">Front left door</option>
          <option value="Passenger door front">Front right door</option>
          <option value="Rear driver side">Rear left door</option>
          <option value="Rear passenger side">Rear right door</option>
          <option value="Rear window">Rear window</option>
          <option value="Quarter Glass Left Side">
            Quarter Glass Left Side
          </option>
          <option value="Quarter Glass Right Side">
            Quarter Glass Right Side
          </option>
          <option value="Vent Glass Left Side">Vent Glass Left Side</option>
          <option value="Vent Glass Right Side">Vent Glass Right Side</option>
          <option value="Sunroof">Sunroof</option>
          <option value="Moonroof">Moonroof</option>
          <option value="Not Listed">Not Listed</option>
          <option value="Multiple">Multiple</option>
        </Field>
      </div>
      <ErrorMessage
        name="whichGlass"
        component="div"
        className="text-red-600"
      />
    </div>
  );
}

function CarWrapInputs() {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor="wrapCoverage">Wrap Coverage</label>
      <div className="rounded-md border border-white bg-black px-3 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]">
        <Field
          as="select"
          name="wrapCoverage"
          id="wrapCoverage"
          className="w-full border-none bg-black text-white placeholder-white outline-none"
        >
          <option value="" disabled>
            Please choose an option
          </option>
          <option value="Full wrap">Full Wrap</option>
          <option value="Partial wrap">Partial Wrap</option>
          <option value="Accent wrap">Accent wrap</option>
        </Field>
      </div>
      <ErrorMessage
        name="wrapCoverage"
        component="div"
        className="text-red-600"
      />
    </div>
  );
}

function PPFInputs() {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor="ppfCoverage">PPF Coverage</label>
      <div className="rounded-md border border-white bg-black px-3 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]">
        <Field
          as="select"
          name="ppfCoverage"
          id="ppfCoverage"
          className="w-full border-none bg-black text-white placeholder-white outline-none"
        >
          <option value="" disabled>
            Please choose an option
          </option>
          <option value="Full Coverage">Full Coverage</option>
          <option value="Partial Coverage">Partial Coverage</option>
          <option value="Clear Bra">Clear Bra</option>
        </Field>
      </div>
      <ErrorMessage
        name="ppfCoverage"
        component="div"
        className="text-red-600"
      />
    </div>
  );
}
function formatPhoneNumber(value: string) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
}

function FormatPhoneField({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  const { values, setFieldValue } = useFormikContext<FormValues>();

  useEffect(() => {
    setFieldValue(name, formatPhoneNumber(values.phoneNumber));
  }, [values.phoneNumber, setFieldValue, name]);

  return (
    <Field
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      className="rounded-md border border-white bg-black px-4 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]"
    />
  );
}

function InputField({
  name,
  label,
  placeholder,
  type,
}: {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="rounded-md border border-white bg-black px-4 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]"
      />
      <ErrorMessage name={name} component="div" className="text-red-600" />
    </div>
  );
}
