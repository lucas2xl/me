import type { SendEmail as SendEmailType } from '@/types/email';

export async function SendEmail(data: SendEmailType) {
  const { from, to, subject, html } = data;
  await fetch('/api/send', {
    method: 'POST',
    body: JSON.stringify({ from, to, subject, html }),
  });
}
