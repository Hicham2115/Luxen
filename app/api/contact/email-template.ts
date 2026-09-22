type ContactEmailInput = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value?: string): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e1e9f2;">
        <p style="margin:0 0 2px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#8ba0bf;">${label}</p>
        <p style="margin:0;font-size:15px;color:#06265a;">${escapeHtml(value)}</p>
      </td>
    </tr>`;
}

export function contactEmailHtml(data: ContactEmailInput): string {
  return `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background-color:#f8fbfe;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fbfe;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 20px 45px rgba(9,42,83,0.12);">
            <tr>
              <td style="background:linear-gradient(160deg,#06265a 0%,#0b3f85 55%,#0ea5e9 150%);padding:32px 32px 28px;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#f5b700;">Luxen · Fontanería y Calefacción</p>
                <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;">Nuevo mensaje de contacto</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Nombre", data.name)}
                  ${row("Correo electrónico", data.email)}
                  ${row("Teléfono", data.phone)}
                  ${row("Servicio", data.service)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 32px;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#8ba0bf;">Mensaje</p>
                <p style="margin:0;padding:16px;background-color:#f8fbfe;border-radius:12px;border:1px solid #e1e9f2;font-size:15px;line-height:1.6;color:#06265a;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px;border-top:1px solid #eceef1;">
                <p style="margin:0;font-size:12px;color:#8ba0bf;">Este mensaje se envió desde el formulario de contacto de luxen.es. Responda directamente a este correo para contactar con ${escapeHtml(data.name)}.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
