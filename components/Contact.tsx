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
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Dirección de correo electrónico no válida."),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z
    .string()
    .min(10, "Su mensaje debe contener al menos 10 caracteres."),
});

type ContactInput = z.infer<typeof contactSchema>;

const services = [
  "Detección de fugas",
  "Desatasco de tuberías",
  "Calentador de agua",
  "Baño",
  "Urgencia 24/7",
  "Otro",
];

const contactDetails = [
  { icon: Phone, label: "Teléfono", value: "602 83 86 07", href: "tel:602838607" },
  { icon: Mail, label: "Correo electrónico", value: "contact@luxen.ma", href: "mailto:contact@luxen.ma" },
  { icon: MapPin, label: "Dirección", value: "Calle Barandiaran 9 bajo, 48903" },
  { icon: Clock3, label: "Disponibilidad", value: "24 horas, 7 días" },
];

function fieldError(errors: unknown[]): string | undefined {
  const first = errors[0] as { message?: string } | string | undefined;
  if (!first) return undefined;
  return typeof first === "string" ? first : first.message;
}

const inputClassName =
  "h-13 rounded-xl border-[#e1e9f2] bg-[#f8fbfe] px-4 text-[15px] text-[#06265a] shadow-none focus-visible:border-marino-500 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-marino-500/15 aria-invalid:border-red-400 aria-invalid:ring-red-400/15";

export function Contact() {
  const mutation = useMutation({
    mutationFn: (data: ContactInput) =>
      api.post("/api/contact", data).then((res) => res.data),
    onSuccess: () => {
      toast.success("¡Mensaje enviado! Le responderemos en breve.");
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
        toast.error("Por favor, corrija los campos resaltados.");
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
          <p className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 text-[13px] font-bold uppercase text-marino-500">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            Contáctenos
          </p>
          <h2 className="mt-5 text-[38px] font-extrabold leading-[1.15] tracking-[-0.055em] text-[#06265a] sm:text-[52px]">
            Hablemos de <span className="text-marino-500">su proyecto</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.7] text-[#4b638c]">
            ¿Una pregunta, un presupuesto o una urgencia de fontanería?
            Escríbanos, nuestro equipo le responde rápidamente.
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
                Hablemos de su proyecto
              </h3>
              <p className="mt-3 max-w-[340px] text-[15px] leading-[1.7] text-marino-100">
                Rellene el formulario o contáctenos directamente, estamos
                disponibles en todo momento para sus urgencias.
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
                      <p className="text-[13px] text-marino-100">{label}</p>
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
                          Nombre completo
                        </Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Su nombre"
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
                          Correo electrónico
                        </Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="usted@ejemplo.com"
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
                        Teléfono <span className="font-normal text-[#8ba0bf]">(opcional)</span>
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
                        Servicio <span className="font-normal text-[#8ba0bf]">(opcional)</span>
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
                        <option value="">Seleccionar…</option>
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
                        Mensaje
                      </Label>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Describa su necesidad en pocas palabras…"
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
                      className="h-14 w-full gap-3 rounded-xl bg-marino-500 text-[16px] font-semibold text-white shadow-[0_12px_26px_rgba(20,40,80,0.24)] hover:bg-marino-600 disabled:opacity-70"
                    >
                      {pending ? (
                        <>
                          <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />
                          Enviando…
                        </>
                      ) : (
                        <>
                          Enviar mensaje
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
