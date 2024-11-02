import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  const {
    extra,
    name,
    email,
    phoneNumber,
    carYear,
    brandMake,
    model,
    vinNumber,
    whichGlass,
  } = await request.json();
  if (extra !== undefined && extra.length > 0) {
    return;
  }

  const htmlContent = `
    <h3>Website Quote Request</h3>
    <table style="width: 50%; border-collapse: collapse;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Name</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Email</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Phone</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${phoneNumber}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Car Year</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${carYear}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Brand Make</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${brandMake}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Model</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${model}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">VIN Number</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${vinNumber}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Which Glass</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${whichGlass}</td>
      </tr>
    </table>`;

  const msg = {
    to: 'topautoglasstexas@gmail.com', // topautoglasstexas@gmail.com
    from: 'website@topautoglasshouston.com',
    subject: 'Website Quote',
    text: `You have received a new quote request. Here is the information: ${name}, ${email}, ${phoneNumber}, ${carYear}, ${brandMake}, ${model}, ${vinNumber}, ${whichGlass}`,
    html: htmlContent,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json('Email sent');
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
