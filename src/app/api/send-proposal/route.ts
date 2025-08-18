import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json();

    // Validação básica
    if (!leadData.email || !leadData.name) {
      return NextResponse.json(
        { error: 'Email e nome são obrigatórios' },
        { status: 400 }
      );
    }

    // Formatar dados da proposta
    const formatCategory = (category: string) => {
      const categories = {
        'new': 'Criar algo novo',
        'maintenance': 'Manutenção ou expansão',
        'mentoring': 'Mentoria ou consultoria'
      };
      return categories[category as keyof typeof categories] || category;
    };

    const formatProjectSize = (size: string) => {
      const sizes = {
        'small': 'Pequeno',
        'medium': 'Médio',
        'large': 'Grande'
      };
      return sizes[size as keyof typeof sizes] || size;
    };

    // Enviar email da proposta
    const data = await resend.emails.send({
      from: 'Alémsys - Proposta <onboarding@resend.dev>',
      to: ['antoniol.carvalho49@gmail.com'],
      subject: `Nova Proposta - ${leadData.serviceType || 'Serviço'} - ${leadData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            🚀 Nova Proposta de Serviço
          </h1>
          
          <h2 style="color: #374151;">📋 Informações do Cliente</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Nome:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Email:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Telefone:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.phone || 'Não informado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Idioma do Usuário:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.userLanguage || 'Não informado'}</td>
            </tr>
          </table>

          <h2 style="color: #374151;">🎯 Detalhes do Projeto</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Categoria:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${formatCategory(leadData.category)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Tipo de Serviço:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Tamanho do Projeto:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${formatProjectSize(leadData.projectSize)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Orçamento Estimado:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db; color: #059669; font-weight: bold;">
                R$ ${leadData.estimatedPrice?.toLocaleString('pt-BR') || 'Não calculado'}
              </td>
            </tr>
          </table>

          ${leadData.message ? `
          <h2 style="color: #374151;">💬 Mensagem Adicional</h2>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #1e40af; margin-bottom: 20px;">
            <p style="margin: 0; line-height: 1.6;">${leadData.message}</p>
          </div>
          ` : ''}

          ${leadData.category === 'new' && (leadData.clientCount || leadData.productCount || leadData.pageCount) ? `
          <h2 style="color: #374151;">📊 Detalhes Específicos (Novo Projeto)</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            ${leadData.clientCount ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Usuários/Clientes Estimados:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.clientCount}</td>
            </tr>
            ` : ''}
            ${leadData.productCount ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Quantidade de Produtos:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.productCount}</td>
            </tr>
            ` : ''}
            ${leadData.pageCount ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Páginas/Telas Estimadas:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.pageCount}</td>
            </tr>
            ` : ''}
            ${leadData.companySize ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Tamanho da Empresa:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.companySize}</td>
            </tr>
            ` : ''}
          </table>
          ` : ''}

          ${leadData.category === 'maintenance' && (leadData.currentComplexity || leadData.affectedFunctionalities) ? `
          <h2 style="color: #374151;">🔧 Detalhes Específicos (Manutenção)</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            ${leadData.currentComplexity ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Complexidade Atual:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.currentComplexity}</td>
            </tr>
            ` : ''}
            ${leadData.affectedFunctionalities ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Funcionalidades Afetadas:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.affectedFunctionalities}</td>
            </tr>
            ` : ''}
            ${leadData.urgencyLevel ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Nível de Urgência:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.urgencyLevel}</td>
            </tr>
            ` : ''}
            ${leadData.hasDocumentation ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Documentação:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.hasDocumentation}</td>
            </tr>
            ` : ''}
          </table>
          ` : ''}

          ${leadData.category === 'mentoring' && (leadData.teamSize || leadData.experienceLevel) ? `
          <h2 style="color: #374151;">👥 Detalhes Específicos (Mentoria)</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            ${leadData.teamSize ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Tamanho da Equipe:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.teamSize} pessoas</td>
            </tr>
            ` : ''}
            ${leadData.experienceLevel ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Nível de Experiência:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.experienceLevel}</td>
            </tr>
            ` : ''}
            ${leadData.sessionDuration ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Duração da Sessão:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.sessionDuration}</td>
            </tr>
            ` : ''}
            ${leadData.mentorshipType ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; background-color: #f9fafb;">Tipo de Mentoria:</td>
              <td style="padding: 8px; border: 1px solid #d1d5db;">${leadData.mentorshipType}</td>
            </tr>
            ` : ''}
          </table>
          ` : ''}

          <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 15px; margin-top: 20px;">
            <p style="margin: 0; color: #92400e; font-weight: bold;">
              ⏰ Proposta enviada em: ${new Date().toLocaleString('pt-BR')}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erro ao enviar proposta:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar proposta' },
      { status: 500 }
    );
  }
}
