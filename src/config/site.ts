/**
 * Configuração central do site JotaJota Buffet.
 * Edite aqui contatos, links e conteúdos. Listas vazias ocultam a seção correspondente.
 *
 * PENDÊNCIAS (confirmar com o cliente antes de publicar):
 * - Teste real do número de WhatsApp
 * - Lista de serviços / tipos de evento (services)
 * - Texto institucional (about.validated)
 * - Fotos oficiais (gallery, hero)
 * - Perguntas frequentes (faq)
 * - Link direto de avaliação Google (googleReviewUrl)
 * - Domínio definitivo
 */

export const contact = {
  /** Número em formato internacional, somente dígitos (55 + DDD 61 + número). */
  whatsappNumber: "5561995766051",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento para um evento.",
  whatsappDisplay: "(61) 99576-6051",
  instagramUrl: "https://www.instagram.com/jotajotabuffet/",
  instagramHandle: "@jotajotabuffet",
  googleMapsUrl:
    "https://www.google.com/maps/place/JotaJota+Buffet/@-15.7749968,-48.1267619,10z/data=!4m10!1m2!2m1!1sjotajotabuffet!3m6!1s0x4a298830d6483c9d:0x84d4cb033bca9b2e!8m2!3d-15.7759058!4d-47.797117!15sCg5qb3Rham90YWJ1ZmZldJIBDndlZGRpbmdfYnVmZmV04AEA!16s%2Fg%2F11yzv1qg_f",
  /** Link direto para escrever avaliação. Deixe null até ser fornecido. */
  googleReviewUrl: null as string | null,
};

export function whatsappLink(message: string = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "#sobre", label: "O buffet" },
  { href: "#como-funciona", label: "Orçamento" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export type Service = { name: string; description: string; image?: string };
/** Preencha somente com serviços confirmados pelo cliente. Vazio = seção oculta. */
export const services: Service[] = [];

export type GalleryImage = { src: string; alt: string };
/**
 * IMAGENS ILUSTRATIVAS PROVISÓRIAS (geradas). Substituir por fotos reais e
 * autorizadas do JotaJota Buffet antes de publicar.
 */
import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";

export const gallery: GalleryImage[] = [
  { src: galeria1, alt: "Imagem ilustrativa de canapés em tábua de servir" },
  { src: galeria2, alt: "Imagem ilustrativa de mesa de jantar de casamento" },
  { src: galeria3, alt: "Imagem ilustrativa de mesa de doces e bolos" },
];

export type Faq = { question: string; answer: string };
/** Somente perguntas com resposta validada. */
export const faq: Faq[] = [
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Basta enviar uma mensagem pelo nosso WhatsApp contando um pouco sobre o seu evento. A partir daí, conversamos sobre os detalhes.",
  },
];

export const steps = [
  { title: "Fale conosco", text: "Envie uma mensagem pelo WhatsApp." },
  { title: "Conte sobre o evento", text: "Data, local, número de convidados e o que você imagina." },
  { title: "Converse com a equipe", text: "Alinhamos juntos as necessidades do seu evento." },
  { title: "Receba as condições", text: "Apresentamos as informações e condições comerciais." },
];
