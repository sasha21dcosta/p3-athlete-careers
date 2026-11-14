export type EnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMessageHtml(message: string) {
  return escapeHtml(message).replaceAll("\n", "<br />");
}

export function buildEnquiryEmail(payload: EnquiryPayload) {
  const submittedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  const subject = `P3 Sports enquiry — ${payload.interest}`;

  const text = [
    "New enquiry from p3-sports.com",
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Interested in: ${payload.interest}`,
    "",
    "Message:",
    payload.message,
    "",
    `Submitted: ${submittedAt}`,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f5f7;font-family:Segoe UI,Helvetica,Arial,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f5f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 8px 24px rgba(15,23,42,0.08);">
            <tr>
              <td style="background:#0f172a;padding:28px 32px;">
                <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#f87171;font-weight:700;">P3 Sports</p>
                <h1 style="margin:0;font-size:24px;line-height:1.25;color:#ffffff;font-weight:700;">New website enquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <p style="margin:0 0 18px;font-size:14px;line-height:1.6;color:#475569;">
                  Someone submitted the contact form. Details are below — reply directly to their email.
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                  <tr>
                    <td style="padding:14px 16px;background:#fafafa;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;width:38%;">Name</td>
                    <td style="padding:14px 16px;font-size:15px;font-weight:600;color:#0f172a;">${escapeHtml(payload.name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;background:#fafafa;border-top:1px solid #e5e7eb;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">Phone</td>
                    <td style="padding:14px 16px;border-top:1px solid #e5e7eb;font-size:15px;font-weight:600;color:#0f172a;">${escapeHtml(payload.phone)}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;background:#fafafa;border-top:1px solid #e5e7eb;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">Email</td>
                    <td style="padding:14px 16px;border-top:1px solid #e5e7eb;font-size:15px;font-weight:600;">
                      <a href="mailto:${escapeHtml(payload.email)}" style="color:#e11d48;text-decoration:none;">${escapeHtml(payload.email)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;background:#fafafa;border-top:1px solid #e5e7eb;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">Enquiry type</td>
                    <td style="padding:14px 16px;border-top:1px solid #e5e7eb;font-size:15px;font-weight:600;color:#0f172a;">${escapeHtml(payload.interest)}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 28px;">
                <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">Message</p>
                <div style="padding:16px 18px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;font-size:15px;line-height:1.65;color:#334155;">
                  ${formatMessageHtml(payload.message)}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px;font-size:12px;line-height:1.5;color:#94a3b8;">
                Submitted ${escapeHtml(submittedAt)} (IST) · Play · Practice · Persevere
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}