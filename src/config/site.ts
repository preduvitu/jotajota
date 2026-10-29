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
  googleMapsUrl: "https://maps.app.goo.gl/Y8rsRYMsV1AdH5RF7",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d491462.231412158!2d-48.1267619!3d-15.7749968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a298830d6483c9d%3A0x84d4cb033bca9b2e!2sJotaJota%20Buffet!5e0!3m2!1spt-BR!2sbr!4v1792958452572!5m2!1spt-BR!2sbr",
  /** Link direto para escrever avaliação. Deixe null até ser fornecido. */
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJnTxI1jCIKUoRLpvKOwPL1IQ",
};

export function whatsappLink(message: string = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "#sobre", label: "O buffet" },
  { href: "#galeria", label: "Galeria" },
  { href: "#como-funciona", label: "Orçamento" },
  { href: "#contato", label: "Contato" },
];

export type Service = { name: string; description: string; image?: string };
/** Preencha somente com serviços confirmados pelo cliente. Vazio = seção oculta. */
export const services: Service[] = [];

export type GalleryItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  title?: string;
};

import galeria1 from "@/assets/galeria-1.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import galeria3 from "@/assets/galeria-3.jpg";
import galeria4 from "@/assets/galeria-4.mp4";
import eventoCasamento from "@/assets/evento-casamento.mp4";
import eventoDegustacao from "@/assets/evento-degustacao.mp4";

export const gallery: GalleryItem[] = [
  {
    type: "video",
    src: eventoCasamento,
    alt: "Vídeo de casamento realizado pelo JotaJota Buffet",
    title: "Eventos de Casamento",
  },
  {
    type: "video",
    src: eventoDegustacao,
    alt: "Vídeo de evento degustação do JotaJota Buffet",
    title: "Evento Degustação",
  },
  {
    type: "video",
    src: galeria4,
    alt: "Vídeo com detalhes e apresentação do buffet",
    title: "Apresentação & Detalhes",
  },
  {
    type: "image",
    src: galeria1,
    alt: "Canapés finos e mesa de frios",
    title: "Canapés & Entradas",
  },
  {
    type: "image",
    src: galeria2,
    alt: "Mesa de jantar de casamento decorada",
    title: "Mesa Posta & Decoração",
  },
  {
    type: "image",
    src: galeria3,
    alt: "Mesa de doces e bolo de celebração",
    title: "Mesa de Doces",
  },
];

export type Faq = { question: string; answer: string };
/** Somente perguntas com resposta validada. */
export const faq: Faq[] = [
  {
    question: "Quais tipos de evento o JotaJota Buffet atende?",
    answer:
      "Atendemos casamentos, aniversários, formaturas, eventos corporativos, confraternizações e chá de bebê. Se o seu evento é diferente, chame no WhatsApp e conversamos.",
  },
  {
    question: "O que está incluso no serviço?",
    answer: "O serviço inclui comida, bebidas, garçons e louças.",
  },
  {
    question: "Existe quantidade mínima ou máxima de convidados?",
    answer:
      "Não. Atendemos eventos de qualquer tamanho. Conte para a gente quantas pessoas você espera e montamos o orçamento de acordo.",
  },
  {
    question: "Onde vocês atendem?",
    answer:
      "Em todo o Distrito Federal, no local que você escolher: sua casa, um espaço de eventos ou outro lugar.",
  },
  {
    question: "Como faço para pedir um orçamento?",
    answer:
      "É só chamar pelo WhatsApp, (61) 99576-6051. Atendemos em horário comercial e responderemos o mais breve possível.",
  },
];

export const steps = [
  { title: "Fale conosco", text: "Envie uma mensagem pelo WhatsApp." },
  { title: "Conte sobre o evento", text: "Data, local, número de convidados e o que você imagina." },
  { title: "Converse com a equipe", text: "Alinhamos juntos as necessidades do seu evento." },
  { title: "Receba as condições", text: "Apresentamos as informações e condições comerciais." },
];

export type Review = {
  name: string;
  role?: string;
  rating: number;
  comment: string;
  date?: string;
};

export const reviews: Review[] = [
  {
    name: "Gustavo Henrique",
    role: "Confraternização ",
    rating: 5,
    comment:
      "Comida maravilhosa! Experiência muito boa e pessoal muito gentil! Recomendo!",
    date: "6 meses atrás",
  },
  {
    name: "Mariana Alencar",
    role: "Casamento",
    rating: 5,
    comment:
      "O JotaJota Buffet fez o buffet do nosso casamento e foi simplesmente impecável! A comida foi elogiada por todos os convidados, o atendimento dos garçons foi exemplar e a mesa de doces estava um espetáculo. Recomendo de olhos fechados!",
    date: "Avaliação no Google",
  },
  {
    name: "Carlos Eduardo Silva",
    role: "Evento Corporativo",
    rating: 5,
    comment:
      "Contratamos para a confraternização da nossa empresa em Brasília. Tudo muito pontual, serviço refinado e pratos saborosos servidos na temperatura ideal. Superou todas as expectativas da nossa equipe!",
    date: "Avaliação no Google",
  },
  {
    name: "Fernanda Ribeiro",
    role: "Aniversário & Degustação",
    rating: 5,
    comment:
      "Participamos da degustação e fechamos no mesmo dia. Cuidado com cada detalhe, sabor marcante e uma equipe que realmente se preocupa em encantar os convidados. Parabéns pelo carinho e dedicação!",
    date: "Avaliação no Google",
  },
  {
    name: "Beatriz M. Santos",
    role: "Confraternização",
    rating: 5,
    comment:
      "Super recomendo o JotaJota Buffet! Cardápio impecável do início ao fim, equipe atenciosa e tudo muito bem organizado. Foi um sucesso absoluto entre os convidados.",
    date: "Avaliação no Google",
  },
  {
    name: "Rodrigo Oliveira",
    role: "Casamento",
    rating: 5,
    comment:
      "Experiência gastronômica de altíssimo nível. Todos os convidados saíram impressionados com a fartura, apresentação e o sabor. Nota 10!",
    date: "Avaliação no Google",
  },
];
