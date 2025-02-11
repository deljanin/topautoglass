import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: Request) {
  const formData = await request.json();

  // If the hidden extra field is filled, likely a bot submission – bail out.
  if (formData.extra && formData.extra.length > 0) {
    return NextResponse.json("Bot detected", { status: 400 });
  }

  // Mapping for friendly field labels
  const fieldLabels: Record<string, string> = {
    name: "Name",
    email: "Email",
    phoneNumber: "Phone Number",
    carYear: "Car Year",
    brandMake: "Brand/Make",
    model: "Model",
    vinNumber: "VIN Number",
    service: "Service",
    whichGlass: "Which Glass",
    wrapCoverage: "Wrap Coverage",
    ppfCoverage: "PPF Coverage",
  };

  // Helper function to transform dash-separated service names to title case.
  const formatServiceValue = (value: string): string =>
    value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  // Build the HTML content dynamically.
  let htmlContent = `
    <h3>Website Quote Request</h3>
    <table style="width: 50%; border-collapse: collapse;">`;

  Object.entries(formData).forEach(([key, value]) => {
    if (key === "extra") return; // skip hidden field
    if (value !== undefined && value !== "") {
      let displayValue = value;
      if (key === "service" && typeof value === "string") {
        displayValue = formatServiceValue(value);
      }
      const label = fieldLabels[key] || key;
      htmlContent += `
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">${label}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${displayValue}</td>
        </tr>`;
    }
  });

  htmlContent += "</table>";

  const msg = {
    to: "topautoglasstexas@gmail.com", // Change as needed
    from: "website@topautoglasshouston.com",
    subject: "Website Quote",
    text: "You have received a new quote request. Please view the HTML version for details.",
    html: htmlContent,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
