# RTardim — Pacote de Site

Estrutura completa do site para publicação em qualquer hospedagem estática ou com suporte a Apache.

---

## 📁 Estrutura de Arquivos

```
rtardim-site/
├── index.html          ← Página principal
├── 404.html            ← Página de erro personalizada
├── robots.txt          ← Regras para robôs de busca
├── sitemap.xml         ← Mapa do site (submeter no Google Search Console)
├── llms.txt            ← Contexto para IAs (ChatGPT, Claude, Gemini…)
├── .htaccess           ← Configuração Apache (HTTPS, cache, compressão)
│
├── css/
│   └── styles.css      ← Estilos completos (Mobile First)
│
├── js/
│   ├── config.js       ← ⚙️  CONFIGURAÇÕES — edite aqui (WhatsApp, telefone…)
│   └── main.js         ← Toda a interatividade do site
│
└── img/
    ├── logo.svg        ← 🔄 SUBSTITUA pelo seu logo real (.svg)
    ├── hero-bg.jpg     ← Foto de fundo do Hero
    ├── about.jpg       ← Foto da seção Sobre
    ├── case1.jpg       ← Foto do Case 1 (Reforma de Sider)
    ├── case2.jpg       ← Foto do Case 2 (Reforma de Baú)
    ├── case3.jpg       ← Foto do Case 3 (Carroceria de Bebidas)
    └── og-image.jpg    ← 🔄 CRIE: imagem 1200×630px para redes sociais
```

---

## ⚙️ Como configurar

### 1. WhatsApp e dados de contato

Abra `js/config.js` e altere apenas:

```js
const CONFIG = {
  // Cole aqui: DDI + DDD + número (só dígitos)
  whatsappNumber: '5519938221928',

  // Mensagem pré-preenchida (opcional)
  whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para reforma de carroceria.',

  company: {
    phone:  '(19) 3822-1928',
    email:  'contato@rtardim.com.br',
    // ...
  },

  social: {
    instagram: 'https://www.instagram.com/SEUPERFIL',
    facebook:  'https://www.facebook.com/SUAPAGINA',
    linkedin:  'https://www.linkedin.com/company/SUAEMPRESA',
  },
};
```

Todos os botões de WhatsApp, telefone, e-mail e redes sociais são atualizados **automaticamente** a partir deste arquivo.

### 2. Logo

Substitua `img/logo.svg` pelo seu arquivo `.svg` real.  
Dimensões recomendadas: **160 × 48 px** (ou proporção equivalente).

### 3. Imagem OG (Open Graph)

Crie `img/og-image.jpg` com **1200 × 630 px** — esta imagem aparece quando alguém compartilha o site no WhatsApp, LinkedIn, Facebook etc.

---

## 🚀 Como publicar

### Netlify (mais fácil — gratuito)
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta `rtardim-site/` inteira
3. Pronto — URL gerada na hora

### Cloudflare Pages
1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecte seu repositório GitHub ou faça upload direto
3. Sem configuração de build — é site estático puro

### Hospedagem com cPanel / Apache
1. Faça upload de todos os arquivos via FTP/SFTP para `public_html/`
2. O `.htaccess` já configura HTTPS, cache e compressão automaticamente

### GitHub Pages
1. Faça push de todos os arquivos para um repositório público
2. Vá em Settings → Pages → Source → Deploy from branch → `main` → `/root`

---

## 📋 Checklist pós-publicação

- [ ] Substituir `img/logo.svg` pelo logo real
- [ ] Criar `img/og-image.jpg` (1200×630px)
- [ ] Atualizar `js/config.js` com número real de WhatsApp e redes sociais
- [ ] Atualizar URL canônica nos meta tags (`https://www.rtardim.com.br`)
- [ ] Cadastrar no [Google Search Console](https://search.google.com/search-console)
- [ ] Submeter `sitemap.xml` no Google Search Console
- [ ] Cadastrar no [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Criar perfil no [Google Business Profile](https://business.google.com) (Google Maps)
- [ ] Ativar HSTS no `.htaccess` (descomente a linha `Strict-Transport-Security`)
- [ ] Verificar PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Validar Schema.org: [schema.org/SchemaValidator](https://validator.schema.org)
- [ ] Validar acessibilidade: [wave.webaim.org](https://wave.webaim.org)

---

## 🔧 Manutenção

| O que mudar | Onde mexer |
|---|---|
| Número de WhatsApp | `js/config.js` → `whatsappNumber` |
| Telefone / e-mail | `js/config.js` → `company` |
| Redes sociais | `js/config.js` → `social` |
| Logo | `img/logo.svg` (substitua o arquivo) |
| Fotos | `img/` (mesmo nome de arquivo) |
| Textos / conteúdo | `index.html` |
| Cores / design | `css/styles.css` → seção `:root` |
| Depoimentos | `js/main.js` → array `testimonials` |
| Horários | `js/config.js` → `hours` + `index.html` (footer) |

---

*Desenvolvido com HTML5, CSS3 e JavaScript puro — sem dependências externas.*
