/**
 * =====================================================
 *  RTardim — Configurações do Site
 *  Edite apenas este arquivo para alterar dados globais
 * =====================================================
 */

const CONFIG = {

  /* ─── WhatsApp ───────────────────────────────────────
   * Coloque APENAS os dígitos: DDI + DDD + número
   * Exemplo Brasil: 5519 + número (sem espaços ou traços)
   */
  whatsappNumber: '5519938221928',

  /* Mensagem pré-preenchida no WhatsApp (opcional) */
  whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para reforma de carroceria.',

  /* ─── Dados da empresa ───────────────────────────── */
  company: {
    name:        'RTardim',
    fullName:    'RTardim Reforma de Carrocerias',
    phone:       '(19) 3822-1928',
    phoneLink:   'tel:+551938221928',
    email:       'contato@rtardim.com.br',
    address:     'Av. Um, 158 — Jardim Nova Terra',
    city:        'Sumaré',
    state:       'SP',
    zip:         '13175-000',
    url:         'https://www.rtardim.com.br',
    founded:     2010,
  },

  /* ─── Redes sociais ──────────────────────────────── */
  social: {
    instagram: 'https://www.instagram.com/rtardim',
    facebook:  'https://www.facebook.com/rtardim',
    linkedin:  'https://www.linkedin.com/company/rtardim',
  },

  /* ─── Horários ───────────────────────────────────── */
  hours: {
    weekdays: 'Seg–Qui: 7h30–17h30',
    friday:   'Sexta: 7h30–16h30',
  },
};

/* ─── Geração automática da URL do WhatsApp ─────────── */
CONFIG.whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

/* ─── Exporta para uso global ────────────────────────── */
window.SITE_CONFIG = CONFIG;
