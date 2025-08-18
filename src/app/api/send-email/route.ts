import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json();

    // Validação básica
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Enviar email
    const data = await resend.emails.send({
      from: 'Alémsys <onboarding@resend.dev>', // Substitua pelo seu domínio
      to: ['antoniol.carvalho49@gmail.com'], // Seu email para receber as mensagens
      subject: `Nova mensagem de contato de ${email}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Enviado em: ${new Date().toLocaleString('pt-BR')}</small></p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email' },
      { status: 500 }
    );
  }
}
