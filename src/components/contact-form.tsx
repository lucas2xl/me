'use client';
import { useState, type FormEvent } from 'react';

import Email from '@/components/email-template';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/config/site';
import { SendEmail } from '@/services/send-email';
import { render } from '@react-email/render';

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);

    try {
      const emailHtml = render(
        <Email email={email} message={message} name={name} />,
      );
      const data = {
        from: site.author.email,
        to: email,
        subject: `Mensagem de ${name}`,
        html: emailHtml,
      };
      await SendEmail(data);
      resetForm();
    } catch (error) {
      console.log({ error });
    } finally {
      setIsSending(false);
    }
  }

  function resetForm() {
    setName('');
    setEmail('');
    setMessage('');
  }

  function handleNameChange(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }

  function handleEmailChange(e: FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handleMessageChange(e: FormEvent<HTMLTextAreaElement>) {
    setMessage(e.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Envie uma mensagem</CardTitle>
          <CardDescription>
            Estou sempre aberto a discutir novos projetos, ideias criativas ou
            oportunidades de fazer parte de suas visões.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                onChange={handleNameChange}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                placeholder="Digite seu e-mail"
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Digite sua mensagem aqui"
              onChange={handleMessageChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            {isSending ? 'Enviando...' : 'Enviar'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
