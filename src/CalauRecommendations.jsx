import React, { useMemo, useRef, useState } from 'react';
import { Download, Image, ShoppingCart, Palette, Globe, Instagram, Target, BarChart, Link as LinkIcon, Copy, FileText } from 'lucide-react';

const CalauRecommendations = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [brand, setBrand] = useState('Calau Acessórios');
  const [notes, setNotes] = useState('');
  const [assetUrls, setAssetUrls] = useState(''); // uma URL por linha
  const printRef = useRef(null);

  const today = useMemo(() => new Date().toLocaleDateString('pt-PT', { year: 'numeric', month: 'long' }), []);

  const handleExportPDF = () => {
    // Usa a impressão do browser; sugere "Guardar como PDF"
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
      window.print();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Ligação copiada para a área de transferência.');
    } catch (e) {
      alert('Não foi possível copiar a ligação.');
    }
  };

  const gallery = useMemo(() => assetUrls
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean), [assetUrls]);

  const sections = {
    overview: {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Análise da Situação Atual',
      color: 'bg-red-50 border-red-200',
      content: (
        <div className="space-y-4">
          <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
            <h4 className="font-bold text-red-800 mb-2">Principais Desafios Identificados</h4>
            <ul className="space-y-2 text-red-700">
              <li>• Apenas 10 vendas online por mês</li>
              <li>• Estratégia de conteúdo inconsistente e aleatória</li>
              <li>• Sem página de destino/website dedicado</li>
              <li>• Logotipo genérico sem identidade de marca</li>
              <li>• Posicionamento de marca fraco no mercado de acessórios</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-bold text-blue-800 mb-2">Oportunidades</h4>
            <ul className="space-y-2 text-blue-700">
              <li>• Mercado de acessórios com forte potencial online</li>
              <li>• Ativa em múltiplas plataformas sociais (Instagram, Facebook, TikTok)</li>
              <li>• Espaço para crescimento significativo com estratégia adequada</li>
              <li>• Categoria de produto visual perfeita para redes sociais</li>
            </ul>
          </div>
        </div>
      )
    },
    branding: {
      icon: <Palette className="w-6 h-6" />,
      title: 'Identidade de Marca e Design Visual',
      color: 'bg-purple-50 border-purple-200',
      content: (
        <div className="space-y-4">
          <div className="bg-white border-2 border-purple-200 p-4 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <Image className="w-5 h-5" /> Redesign do Logotipo - Prioridade: ALTA
            </h4>
            <p className="text-gray-700 mb-3">O logotipo atual precisa ser mais distintivo e memorável.</p>
            <div className="bg-purple-50 p-3 rounded">
              <p className="font-semibold text-purple-800 mb-2">Recomendações:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Criar uma marca visual única que represente acessórios/joias</li>
                <li>• Usar uma fonte moderna e elegante que apele ao público-alvo</li>
                <li>• Estabelecer uma paleta de cores consistente (2-3 cores principais)</li>
                <li>• Desenhar variações para diferentes plataformas (quadrado, horizontal)</li>
                <li>• Considerar incorporar elementos culturais portugueses/locais</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 p-4 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-3">Foco de Segmento & Paleta Recomendada</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-purple-50 p-3 rounded">
                <p className="font-semibold text-purple-800 mb-1">Foco</p>
                <p className="text-gray-700">Comunicação principal em <strong>bijuteria/acessórios</strong>. Criar sub‑linhas separadas para revenda (cosméticos, têxteis) ou canais dedicados para evitar diluição da marca.</p>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <p className="font-semibold text-purple-800 mb-1">Paleta</p>
                <p className="text-gray-700">Rosa suave (#F7D6E6), dourado (#C6A664) e branco. Manter consistência de fundos claros e luz natural. Aplicar um <em>preset</em> único de edição.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 p-4 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-3">Diretrizes da Marca</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-sm mb-1">Estilo Visual</p>
                <p className="text-xs text-gray-600">Limpo, moderno, feminino ou unissexo dependendo do público</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-sm mb-1">Fotografia</p>
                <p className="text-xs text-gray-600">Iluminação, fundos e styling consistentes</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-sm mb-1">Tom de Voz</p>
                <p className="text-xs text-gray-600">Amigável, aspiracional, autêntico</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-sm mb-1">Filtros/Edição</p>
                <p className="text-xs text-gray-600">Usar o mesmo preset para todas as fotos</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    content: {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Estratégia de Conteúdo',
      color: 'bg-pink-50 border-pink-200',
      content: (
        <div className="space-y-4">
          <div className="bg-white border-2 border-pink-200 p-4 rounded-lg">
            <h4 className="font-bold text-pink-900 mb-3">Calendário de Conteúdo</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-pink-400 pl-3">
                <p className="font-semibold text-gray-800">Segunda: Destaque do Produto</p>
                <p className="text-sm text-gray-600">Apresentar produto específico com dicas de styling</p>
              </div>
              <div className="border-l-4 border-pink-400 pl-3">
                <p className="font-semibold text-gray-800">Quarta: Bastidores</p>
                <p className="text-sm text-gray-600">Mostrar embalagem, novos produtos ou história da marca</p>
              </div>
              <div className="border-l-4 border-pink-400 pl-3">
                <p className="font-semibold text-gray-800">Sexta: Cliente em Destaque / UGC</p>
                <p className="text-sm text-gray-600">Mostrar clientes a usar os acessórios</p>
              </div>
              <div className="border-l-4 border-pink-400 pl-3">
                <p className="font-semibold text-gray-800">Domingo: Inspiração / Tendências</p>
                <p className="text-sm text-gray-600">Guias de estilo, ideias de looks, tendências</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-pink-200 p-4 rounded-lg">
            <h4 className="font-bold text-pink-900 mb-3">Pilares de Conteúdo (Regra 60/30/10)</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">60%</div>
                <p className="text-sm">Conteúdo educativo/entretenimento (dicas de styling, tendências, como usar)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-pink-400 rounded flex items-center justify-center text-white text-xs font-bold">30%</div>
                <p className="text-sm">Conteúdo da comunidade (fotos de clientes, testemunhos, histórias)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-pink-300 rounded flex items-center justify-center text-white text-xs font-bold">10%</div>
                <p className="text-sm">Conteúdo promocional (promoções, novos produtos, vendas diretas)</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-pink-200 p-4 rounded-lg">
            <h4 className="font-bold text-pink-900 mb-3">Organização por Categoria</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              <li>Separar conteúdos por linha: <strong>Acessórios</strong> / <strong>Cosméticos</strong> / <strong>Casa & Lifestyle</strong>.</li>
              <li>Estética uniforme por categoria (fundo e tonalidade específicos).</li>
              <li>Evitar misturar revenda com a linha principal no mesmo post.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-900 mb-2">⚠️ Pare de Publicar Aleatoriamente</h4>
            <p className="text-sm text-gray-700">Conteúdo inconsistente confunde a audiência e prejudica a perceção da marca. Cada publicação deve ter um propósito claro e encaixar na estratégia geral.</p>
          </div>
        </div>
      )
    },
    website: {
      icon: <Globe className="w-6 h-6" />,
      title: 'Landing Page & E-commerce',
      color: 'bg-green-50 border-green-200',
      content: (
        <div className="space-y-4">
          <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3">Porque precisa de uma Landing Page — URGENTE</h4>
            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded mb-3">
              <p className="text-sm font-semibold text-red-800">Problema Atual:</p>
              <p className="text-sm text-red-700">Apenas redes sociais limita severamente as vendas. Está a perder clientes que querem ver todo o catálogo ou comprar diretamente.</p>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>✓ <strong>Credibilidade:</strong> Um website torna o negócio profissional e confiável</p>
              <p>✓ <strong>Catálogo:</strong> Mostrar todos os produtos num só lugar organizado</p>
              <p>✓ <strong>SEO:</strong> As pessoas podem encontrar-te através do Google</p>
              <p>✓ <strong>Propriedade:</strong> Controla a plataforma (ao contrário dos algoritmos das redes)</p>
              <p>✓ <strong>Vendas Diretas:</strong> Integrar sistemas de pagamento para compras instantâneas</p>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3">Estratégia de Catálogo & Meta</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              <li>Loja principal focada em <strong>acessórios</strong>; páginas/coleções secundárias para parceiros e revendas.</li>
              <li>Ativar <strong>Catálogo Meta</strong> e etiquetar produtos para compra direta em IG/FB.</li>
              <li>Botões claros de chamada à ação: “Comprar agora”, “Ver coleção”.</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3">Soluções Recomendadas</h4>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded border border-green-300">
                <p className="font-semibold text-green-900 mb-1">Opção 1: <strong>LINKE (Recomendada)</strong></p>
                <p className="text-xs text-gray-700 mb-2">Solução com pagamento único, mais económica e integrada com logística, atendimento, marketing e SEO. Ideal para PMEs portuguesas.</p>
                <p className="text-xs text-gray-500">Custo: pagamento único | Tempo de configuração: 3–5 dias</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <p className="font-semibold text-green-800 mb-1">Opção 2: Shopify</p>
                <p className="text-xs text-gray-600 mb-2">Profissional, fácil de usar, processamento de pagamento integrado</p>
                <p className="text-xs text-gray-500">Custo: ~€29/mês | Tempo de configuração: 1-2 semanas</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <p className="font-semibold text-green-800 mb-1">Opção 3: Wix/Squarespace</p>
                <p className="text-xs text-gray-600 mb-2">Templates bonitos, mais fácil para iniciantes</p>
                <p className="text-xs text-gray-500">Custo: ~€15-25/mês | Tempo de configuração: 1 semana</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3">Elementos Essenciais do Website</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-gray-50 p-2 rounded">✓ Catálogo de produtos com preços</div>
              <div className="bg-gray-50 p-2 rounded">✓ Fotos de alta qualidade</div>
              <div className="bg-gray-50 p-2 rounded">✓ Carrinho de compras e checkout</div>
              <div className="bg-gray-50 p-2 rounded">✓ Página sobre a marca</div>
              <div className="bg-gray-50 p-2 rounded">✓ Informações de contacto</div>
              <div className="bg-gray-50 p-2 rounded">✓ Política de envios e devoluções</div>
              <div className="bg-gray-50 p-2 rounded">✓ Testemunhos de clientes</div>
              <div className="bg-gray-50 p-2 rounded">✓ Design responsivo (mobile)</div>
            </div>
          </div>
        </div>
      )
    },
    sales: {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Estratégia de Vendas',
      color: 'bg-blue-50 border-blue-200',
      content: (
        <div className="space-y-4">
          <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">Objetivo: de 10 para 50+ vendas/mês em 6 meses</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-semibold text-blue-800 mb-2">Mês 1-2: Fundação</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lançar landing page</li>
                  <li>• Redesenhar logotipo e criar diretrizes de marca</li>
                  <li>• Criar calendário de conteúdo e começar publicações consistentes</li>
                  <li>• Meta: 15-20 vendas/mês</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-semibold text-blue-800 mb-2">Mês 3-4: Crescimento</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Iniciar anúncios pagos (Instagram/Facebook)</li>
                  <li>• Implementar email marketing</li>
                  <li>• Lançar programa de referência de clientes</li>
                  <li>• Meta: 30-35 vendas/mês</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-semibold text-blue-800 mb-2">Mês 5-6: Escala</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Expandir linha de produtos com base nos mais vendidos</li>
                  <li>• Parcerias com micro‑influenciadores</li>
                  <li>• Otimizar anúncios e conversão do website</li>
                  <li>• Meta: 50+ vendas/mês</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">Táticas de Otimização de Conversão</h4>
            <div className="space-y-2 text-sm">
              {[{
                t: 'Ofertas por Tempo Limitado', d: 'Criar urgência com flash sales e lançamentos.'
              },{
                t: 'Packs Promocionais', d: 'Bundles "Complete o Look" aumentam valor médio.'
              },{
                t: 'Limite para Portes Grátis', d: 'Ex.: portes grátis acima de €30.'
              },{
                t: 'Prova Social', d: 'Mostrar avaliações, fotos e testemunhos.'
              },{
                t: 'Recuperação de Carrinhos', d: 'Lembretes por email/DM para compras incompletas.'
              }].map((i,idx)=> (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">{idx+1}.</span>
                  <div>
                    <p className="font-semibold">{i.t}</p>
                    <p className="text-gray-600 text-xs">{i.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    action: {
      icon: <Target className="w-6 h-6" />,
      title: 'Plano de Ação e Cronograma',
      color: 'bg-orange-50 border-orange-200',
      content: (
        <div className="space-y-4">
          <div className="bg-white border-2 border-orange-200 p-4 rounded-lg">
            <h4 className="font-bold text-orange-900 mb-3">Ações Imediatas (próximas 2 semanas)</h4>
            <div className="space-y-2">
              {[
                'Contratar designer para redesign do logotipo',
                'Escolher e configurar plataforma de website',
                'Auditar e arquivar conteúdo aleatório/fora da marca',
                'Criar calendário de conteúdo para próximas 4 semanas',
                'Fazer fotografias profissionais dos produtos',
                'Reorganizar feed (arquivar conteúdos fora do segmento principal)',
                'Produzir 10 fotos + 5 vídeos padrão com fundo claro e luz consistente'
              ].map((t, i) => (
                <label key={i} className="flex items-start gap-3 p-2 bg-orange-50 rounded cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm">{t}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-orange-200 p-4 rounded-lg">
            <h4 className="font-bold text-orange-900 mb-3">Resumo do Investimento</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-gray-50 rounded"><span>Redesign do logotipo</span><span className="font-semibold">€100–300</span></div>
              <div className="flex justify-between p-2 bg-gray-50 rounded"><span>Plataforma website (6 meses)</span><span className="font-semibold">€90–180</span></div>
              <div className="flex justify-between p-2 bg-gray-50 rounded"><span>Setup fotografia de produto</span><span className="font-semibold">€50–150</span></div>
              <div className="flex justify-between p-2 bg-gray-50 rounded"><span>Orçamento inicial anúncios (opcional)</span><span className="font-semibold">€200–500</span></div>
              <div className="flex justify-between p-3 bg-orange-100 rounded font-bold border-t-2 border-orange-300"><span>INVESTIMENTO INICIAL TOTAL</span><span className="text-orange-700">€440–1.130</span></div>
            </div>
            <p className="text-xs text-gray-600 mt-3 italic">ROI esperado: 3–5x em 6 meses com execução adequada</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 p-4 rounded-lg">
            <h4 className="font-bold text-green-900 mb-2">Métricas de Sucesso a Acompanhar</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2 rounded">📊 Volume de vendas mensal</div>
              <div className="bg-white p-2 rounded">💰 Valor médio do pedido</div>
              <div className="bg-white p-2 rounded">👥 Seguidores nas redes sociais</div>
              <div className="bg-white p-2 rounded">❤️ Taxa de engagement</div>
              <div className="bg-white p-2 rounded">🌐 Tráfego do website</div>
              <div className="bg-white p-2 rounded">📧 Crescimento da lista de emails</div>
              <div className="bg-white p-2 rounded">🎯 Taxa de conversão</div>
              <div className="bg-white p-2 rounded">⭐ Avaliações de clientes</div>
            </div>
          </div>
        </div>
      )
    },
    canais: {
      icon: <Globe className="w-6 h-6" />,
      title: 'Gestão de Canais',
      color: 'bg-teal-50 border-teal-200',
      content: (
        <div className="space-y-4">
          <div className="bg-white border-2 border-teal-200 p-4 rounded-lg">
            <h4 className="font-bold text-teal-900 mb-3">Coerência entre Plataformas</h4>
            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
              <li>Mesma foto de perfil e bio nos três canais.</li>
              <li>Hashtags padronizadas (#CalauAcessorios #BijuteriaComEstilo).</li>
              <li>Replicar conteúdos adaptando formato (Reels/TikTok/FB Reels).</li>
              <li>TikTok: vídeos “1ª pessoa” e demonstrações; Instagram: vitrinas visuais; Facebook: posts com links diretos.</li>
            </ul>
          </div>
        </div>
      )
    },
    notas: {
      icon: <FileText className="w-6 h-6" />,
      title: 'Notas & Anexos',
      color: 'bg-slate-50 border-slate-200',
      content: (
        <div className="space-y-6">
          <div className="bg-white border-2 border-slate-200 p-4 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-2">Notas rápidas</h4>
            <textarea
              value={notes}
              onChange={(e)=>setNotes(e.target.value)}
              placeholder="Escreve aqui pontos para a próxima reunião, tarefas, ideias…"
              className="w-full h-32 p-3 border rounded resize-y focus:outline-none focus:ring focus:ring-slate-200"
            />
          </div>

          <div className="bg-white border-2 border-slate-200 p-4 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Image className="w-5 h-5"/>Galeria (URLs)</h4>
            <p className="text-xs text-gray-500 mb-2">Cola uma URL de imagem por linha. Ex.: https://…/foto.jpg</p>
            <textarea
              value={assetUrls}
              onChange={(e)=>setAssetUrls(e.target.value)}
              placeholder="https://…\nhttps://…"
              className="w-full h-28 p-3 border rounded resize-y focus:outline-none focus:ring focus:ring-slate-200 mb-3"
            />
            {gallery.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {gallery.map((src, i)=> (
                  <a key={i} href={src} target="_blank" rel="noreferrer" className="block group">
                    <img src={src} alt={`asset-${i}`} className="w-full h-28 object-cover rounded border group-hover:opacity-90"/>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    }
  };

  // --- Dev self-checks (não afetam UI) ---
  // Removido `process` (não existe no browser). Mantemos asserts seguros no runtime.
  (() => {
    if (typeof console !== 'undefined') {
      try {
        const required = ['overview','branding','content','website','sales','action','canais','notas'];
        required.forEach(k => {
          console.assert(sections[k], `Secção em falta: ${k}`);
          console.assert(!!sections[k].content, `Secção sem conteúdo: ${k}`);
        });
        console.assert(typeof handleExportPDF === 'function', 'Handler Export PDF ausente');
        console.assert(Array.isArray(gallery), 'Galeria não é array');
      } catch (err) {
        console.warn('Self-check falhou:', err);
      }
    }
  })();

  return (
    <div ref={printRef} className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8 print:bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-6 print:shadow-none print:border print:border-gray-200">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Recomendações de Marketing</h1>
              <div className="flex flex-wrap items-center gap-2 text-gray-600">
                <input
                  value={brand}
                  onChange={(e)=>setBrand(e.target.value)}
                  className="px-2 py-1 border rounded text-lg font-semibold"
                  aria-label="Nome da marca"
                />
                <span className="text-gray-400">•</span>
                <span className="text-base">{today}</span>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <span className="text-sm text-gray-500">Made by</span>
              <img src="./noBgColor (1).png" alt="Made by" className="h-10" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"></div>

          {/* Barra de ações (oculta na impressão) */}
          <div className="mt-4 flex flex-wrap items-center gap-2 print:hidden">
            <button onClick={handleExportPDF} className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
              <Download className="w-5 h-5" /> Exportar PDF
            </button>
            <button onClick={handleCopyLink} className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50">
              <Copy className="w-4 h-4"/> Copiar ligação
            </button>
            <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
              <LinkIcon className="w-4 h-4"/> Partilha rápida
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 mb-6 print:hidden">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`p-4 rounded-lg border-2 transition-all ${
                activeSection === key
                  ? section.color + ' shadow-lg transform scale-[1.02]'
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={activeSection === key ? 'text-gray-700' : 'text-gray-400'}>
                  {section.icon}
                </div>
                <span className={`text-xs font-semibold text-center ${
                  activeSection === key ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {section.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className={`rounded-lg border-2 p-6 md:p-8 shadow-lg ${sections[activeSection].color} print:shadow-none print:border-gray-200`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            {sections[activeSection].icon}
            {sections[activeSection].title}
          </h3>
          {sections[activeSection].content}
        </div>

        {/* Footer */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6 print:hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pronta para transformar a {brand}?</p>
              <p className="text-xs text-gray-500">Implemente estas recomendações de forma sistemática para melhores resultados.</p>
            </div>
            <button onClick={handleExportPDF} className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              <Download className="w-5 h-5" />
              Exportar PDF
            </button>
          </div>
        </div>
      </div>

      {/* Estilos de impressão mínimos */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:border { border-width: 1px !important; }
          .print\\:border-gray-200 { border-color: #e5e7eb !important; }
          input, textarea, button, a { outline: none !important; box-shadow: none !important; }
          @page { margin: 16mm; }
        }
      `}</style>
    </div>
  );
};

export default CalauRecommendations;