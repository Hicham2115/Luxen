import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional().or(z.literal("")),
  service: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(10).max(2000),
});

export async function POST(req: Request) {
  try {
    const body = contactSchema.parse(await req.json());
    console.log("New contact request:", body);
    return Response.json({ message: "Message envoyé avec succès." });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Veuillez vérifier les champs du formulaire." },
      { status: 400 },
    );
  }
}
