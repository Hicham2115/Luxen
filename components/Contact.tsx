"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "@tanstack/react-form";
import { motion } from "motion/react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Clock3,
  Loader2,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { api, getErrorMessage } from "@/lib/axios";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Adresse e-mail invalide."),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z
    .string()
    .min(10, "Votre message doit contenir au moins 10 caractères."),
});

type ContactInput = z.infer<typeof contactSchema>;

const services = [
  "Détection de fuite",
  "Débouchage de canalisations",
  "Chauffe-eau",
  "Salle de bain",
  "Urgence 24/7",
  "Autre",
];

const contactDetails = [
  { icon: Phone, label: "Téléphone", value: "06 123 456 78", href: "tel:0612345678" },
  { icon: Mail, label: "E-mail", value: "contact@luxen.ma", href: "mailto:contact@luxen.ma" },
  { icon: MapPin, label: "Zone d’intervention", value: "Casablanca & environs" },
  { icon: Clock3, label: "Disponibilité", value: "24h/24, 7j/7" },
];

function fieldError(errors: unknown[]): string | undefined {
  const first = errors[0] as { message?: string } | string | undefined;
  if (!first) return undefined;
  return typeof first === "string" ? first : first.message;
}

const inputClassName =
  "h-13 rounded-xl border-[#e1e9f2] bg-[#f8fbfe] px-4 text-[15px] text-[#06265a] shadow-none focus-visible:border-sky-500 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-sky-500/15 aria-invalid:border-red-400 aria-invalid:ring-red-400/15";

export function Contact() {
  const mutation = useMutation({
    mutationFn: (data: ContactInput) =>
      api.post("/api/contact", data).then((res) => res.data),
    onSuccess: () => {
      toast.success("Message envoyé ! Nous vous répondons sous peu.");
      form.reset();
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    } as ContactInput,
    onSubmit: async ({ value }) => {
      const parsed = contactSchema.safeParse(value);
      if (!parsed.success) {
        toast.error("Veuillez corriger les champs en surbrillance.");
        return;
      }
      await mutation.mutateAsync(parsed.data);
    },
  });

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#fbfdff] px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1270px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[720px] text-center"
        >
          <p className="flex items-center justify-center gap-4 text-[16px] font-bold uppercase text-sky-500 before:h-px before:w-11 before:bg-sky-500 after:h-px after:w-11 after:bg-sky-500">
            Contactez-nous
          </p>
          <h2 className="mt-5 text-[38px] font-extrabold leading-[1.15] tracking-[-0.055em] text-[#06265a] sm:text-[52px]">
            Discutons de <span className="text-sky-500">votre projet</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.7] text-[#4b638c]">
            Une question, un devis ou une urgence de plomberie ? Écrivez-nous,
            notre équipe vous répond rapidement.
          </p>
        </motion.div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] shadow-[0_25px_60px_rgba(9,42,83,0.14)] lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col justify-between gap-12 overflow-hidden bg-[linear-gradient(160deg,#06265a_0%,#0b3f85_55%,#0ea5e9_150%)] px-8 py-12 text-white sm:px-10 lg:py-14"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/5" />

            <div className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                <MessageSquareText aria-hidden="true" className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em]">
                Parlons de votre projet
              </h3>
              <p className="mt-3 max-w-[340px] text-[15px] leading-[1.7] text-sky-100">
                Remplissez le formulaire ou contactez-nous directement, nous
                sommes disponibles à tout moment pour vos urgences.
              </p>
            </div>

            <div className="relative space-y-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] text-sky-100">{label}</p>
                      <p className="truncate text-[15px] font-semibold">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="block transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white px-6 py-10 sm:px-10 lg:py-14"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <form.Field
                  name="name"
                  validators={{ onChange: contactSchema.shape.name }}
                >
                  {(field) => {
                    const error =
                      field.state.meta.isTouched &&
                      fieldError(field.state.meta.errors);
                    return (
                      <div>
                        <Label htmlFor={field.name} className="mb-2 text-[14px] font-semibold text-[#06265a]">
                          Nom complet
                        </Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Votre nom"
                          aria-invalid={!!error}
                          className={inputClassName}
                        />
                        {error && (
                          <p className="mt-1.5 text-[13px] text-red-500">{error}</p>
                        )}
                      </div>
                    );
                  }}
                </form.Field>

                <form.Field
                  name="email"
                  validators={{ onChange: contactSchema.shape.email }}
                >
                  {(field) => {
                    const error =
                      field.state.meta.isTouched &&
                      fieldError(field.state.meta.errors);
                    return (
                      <div>
                        <Label htmlFor={field.name} className="mb-2 text-[14px] font-semibold text-[#06265a]">
                          E-mail
                        </Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="vous@exemple.com"
                          aria-invalid={!!error}
                          className={inputClassName}
                        />
                        {error && (
                          <p className="mt-1.5 text-[13px] text-red-500">{error}</p>
                        )}
                      </div>
                    );
                  }}
                </form.Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <form.Field name="phone">
                  {(field) => (
                    <div>
                      <Label htmlFor={field.name} className="mb-2 text-[14px] font-semibold text-[#06265a]">
                        Téléphone <span className="font-normal text-[#8ba0bf]">(optionnel)</span>
                      </Label>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="tel"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="06 12 34 56 78"
                        className={inputClassName}
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="service">
                  {(field) => (
                    <div>
                      <Label htmlFor={field.name} className="mb-2 text-[14px] font-semibold text-[#06265a]">
                        Service <span className="font-normal text-[#8ba0bf]">(optionnel)</span>
                      </Label>
                      <select
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={cn(
                          inputClassName,
                          "flex w-full appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220_0_24_24%22 fill=%22none%22 stroke=%22%230ea5e9%22 stroke-width=%222%22><polyline points=%226_9_12_15_18_9%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10",
                        )}
                      >
                        <option value="">Sélectionner…</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </form.Field>
              </div>

              <form.Field
                name="message"
                validators={{ onChange: contactSchema.shape.message }}
              >
                {(field) => {
                  const error =
                    field.state.meta.isTouched &&
                    fieldError(field.state.meta.errors);
                  return (
                    <div>
                      <Label htmlFor={field.name} className="mb-2 text-[14px] font-semibold text-[#06265a]">
                        Message
                      </Label>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Décrivez votre besoin en quelques mots…"
                        rows={5}
                        aria-invalid={!!error}
                        className={cn(inputClassName, "h-auto min-h-[130px] py-3")}
                      />
                      {error && (
                        <p className="mt-1.5 text-[13px] text-red-500">{error}</p>
                      )}
                    </div>
                  );
                }}
              </form.Field>

              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting] as const}
              >
                {([canSubmit, isSubmitting]) => {
                  const pending = isSubmitting || mutation.isPending;
                  return (
                    <Button
                      type="submit"
                      disabled={!canSubmit || pending}
                      size="lg"
                      className="h-14 w-full gap-3 rounded-xl bg-sky-500 text-[16px] font-semibold text-white shadow-[0_12px_26px_rgba(14,165,233,0.24)] hover:bg-sky-600 disabled:opacity-70"
                    >
                      {pending ? (
                        <>
                          <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <Send aria-hidden="true" className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  );
                }}
              </form.Subscribe>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
