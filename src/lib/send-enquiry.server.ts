import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { SITE } from "@/data/content";
import {
  buildEnquiryEmail,
  type EnquiryPayload,
} from "@/lib/enquiry-email-template";

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(3).max(40),
  email: z.string().trim().email().max(200),
  interest: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1).max(5000),
});

export const sendEnquiry = createServerFn({ method: "POST" })
  .validator(enquirySchema)
  .handler(async ({ data }: { data: EnquiryPayload }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        "Email delivery is not configured. Add RESEND_API_KEY to the server environment.",
      );
    }

    const to = process.env.ENQUIRY_TO_EMAIL ?? SITE.enquiryInbox;
    const from =
      process.env.RESEND_FROM_EMAIL ??
      "P3 Sports Website <onboarding@resend.dev>";

    const { subject, html, text } = buildEnquiryEmail(data);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend API error:", response.status, detail);
      throw new Error(
        "We couldn't send your enquiry right now. Please call or email us directly.",
      );
    }

    return { ok: true as const };
  });