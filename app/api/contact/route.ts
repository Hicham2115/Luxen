import { z } from "zod";
import { Resend } from "resend";
import { contactEmailHtml } from "./email-template";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional().or(z.literal("")),
  service: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(10).max(2000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = contactSchema.parse(await req.json());

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Luxen <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "contacto@luxen.es",
      replyTo: body.email,
      subject: `Nuevo mensaje de contacto — ${body.name}`,
      html: contactEmailHtml(body),
      text: [
        `Nombre: ${body.name}`,
        `Email: ${body.email}`,
        body.phone ? `Teléfono: ${body.phone}` : null,
        body.service ? `Servicio: ${body.service}` : null,
        "",
        body.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error(error);
      return Response.json(
        { message: "No se pudo enviar el mensaje. Inténtelo de nuevo." },
        { status: 502 },
      );
    }

    return Response.json({ message: "Mensaje enviado con éxito." });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Por favor, verifique los campos del formulario." },
      { status: 400 },
    );
  }
}
