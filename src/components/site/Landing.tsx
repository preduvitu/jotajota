import { useState } from "react";
import { Menu, X, MessageCircle, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contact, faq, gallery, nav, services, steps, whatsappLink } from "@/config/site";
import logo from "@/assets/jotajota-logo.png.asset.json";
// IMAGENS PROVISÓRIAS (geradas, ilustrativas). Substituir por fotos oficiais do buffet.
import heroImg from "@/assets/hero-ilustrativa.jpg";

function WhatsAppButton({
  label = "Solicitar orçamento",
  variant = "ivory",
}: {
  label?: string;
  variant?: "ivory" | "brand" | "lineIvory";
}) {
  return (
    <Button asChild variant={variant} size="lg" className="h-12 rounded-full px-7">
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden /> {label}
      </a>
    </Button>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="JotaJota Buffet"
      width={759}
      height={341}
      className={`object-contain ${className}`}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-ivory/15 bg-brand-deep/80 px-5 py-2.5 shadow-lg backdrop-blur-md">
        <a href="#inicio" aria-label="JotaJota Buffet — início">
          <Logo className="h-11 w-auto" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm tracking-wide text-ivory/80 hover:text-ivory">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-10 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20"
          >
            <Instagram className="size-4" />
          </a>
          <Button asChild variant="ivory" size="sm" className="h-10 rounded-full px-5">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden /> Orçamento
            </a>
          </Button>
        </div>
        <button
          className="p-2 text-ivory md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="mx-auto mt-2 max-w-5xl rounded-3xl border border-ivory/15 bg-brand-deep/95 px-5 pb-6 pt-2 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-ivory/90">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3"><WhatsAppButton /></div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center justify-center">
      <img
        src={heroImg}
        alt="Imagem ilustrativa de mesa de buffet à luz de velas"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-deep/70" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 py-32 text-center text-ivory">
        <p className="eyebrow text-mist">Buffet para eventos</p>
        <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
          Sabor e cuidado para o seu evento.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/85">
          Conte para nós como você imagina a sua celebração. Vamos conversar sobre cardápio,
          serviço e todos os detalhes.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <WhatsAppButton />
          <Button asChild variant="lineIvory" size="lg" className="h-12 rounded-full px-7">
            <a href="#como-funciona">Como funciona</a>
          </Button>
        </div>
        <p className="mt-8 text-xs text-ivory/50">Imagem ilustrativa</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
      <p className="eyebrow text-muted-foreground">O buffet</p>
      <h2 className="mt-4 text-4xl text-brand md:text-5xl">Cada evento, preparado com atenção</h2>
      {/* TEXTO PENDENTE DE VALIDAÇÃO DO CLIENTE */}
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        O JotaJota Buffet cuida da gastronomia do seu evento para que você possa aproveitar o
        momento ao lado de quem importa.
      </p>
    </section>
  );
}

function Services() {
  if (services.length === 0) return null;
  return (
    <section id="servicos" className="bg-muted py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-4xl text-brand">Serviços</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.name} className="overflow-hidden rounded-3xl bg-card p-6 shadow-sm">
              {s.image && <img src={s.image} alt={s.name} loading="lazy" className="mb-5 aspect-[4/3] w-full rounded-2xl object-cover" />}
              <h3 className="text-2xl text-brand">{s.name}</h3>
              <p className="mt-2 text-muted-foreground">{s.description}</p>
              <a href={whatsappLink(`Olá! Gostaria de um orçamento para: ${s.name}.`)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-brand underline underline-offset-4">
                Solicitar orçamento
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="section-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-mist">Orçamento</p>
        <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">Como funciona</h2>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl border border-ivory/15 bg-brand-deep/40 p-7">
              <span className="font-display text-5xl text-mist">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-2xl">{s.title}</h3>
              <p className="mt-2 text-ivory/75">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12"><WhatsAppButton label="Vamos planejar seu evento" /></div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="text-center">
        <p className="eyebrow text-muted-foreground">Gastronomia</p>
        <h2 className="mt-4 text-4xl text-brand md:text-5xl">Galeria</h2>
      </div>
      {gallery.length > 0 ? (
        <>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-3xl object-cover" />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Imagens ilustrativas — em breve, fotos reais dos nossos eventos.</p>
        </>
      ) : (
        <p className="mx-auto mt-6 max-w-md text-center text-muted-foreground">
          Acompanhe nossos eventos e criações no Instagram{" "}
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-4">
            {contact.instagramHandle}
          </a>
          .
        </p>
      )}
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-muted py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 text-center">
        <h2 className="text-3xl text-brand md:text-4xl">Conheça o JotaJota Buffet no Google</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild variant="brand" size="lg" className="h-12 rounded-full px-7">
            <a href={contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin aria-hidden /> Ver perfil no Google Maps
            </a>
          </Button>
          {contact.googleReviewUrl && (
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-7">
              <a href={contact.googleReviewUrl} target="_blank" rel="noopener noreferrer">Deixe sua avaliação</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  if (faq.length === 0) return null;
  return (
    <section id="perguntas" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <h2 className="text-center text-4xl text-brand md:text-5xl">Perguntas frequentes</h2>
      <Accordion type="single" collapsible className="mt-10">
        {faq.map((f) => (
          <AccordionItem key={f.question} value={f.question}>
            <AccordionTrigger className="text-left text-lg">{f.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{f.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="section-dark py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-4xl md:text-5xl">Vamos conversar sobre o seu evento?</h2>
        <p className="mt-5 text-lg text-ivory/80">Fale com a gente pelo WhatsApp {contact.whatsappDisplay}.</p>
        <div className="mt-9 flex justify-center"><WhatsAppButton label="Fale conosco pelo WhatsApp" /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-deep text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <Logo className="h-12 w-auto self-start" />
        <nav aria-label="Rodapé" className="flex flex-wrap gap-6 text-sm text-ivory/75">
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-ivory">{n.label}</a>)}
        </nav>
        <div className="flex gap-4">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-ivory/80 hover:text-ivory"><MessageCircle /></a>
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ivory/80 hover:text-ivory"><Instagram /></a>
          <a href={contact.googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="text-ivory/80 hover:text-ivory"><MapPin /></a>
        </div>
      </div>
      <p className="border-t border-ivory/10 py-5 text-center text-xs text-mist">
        © {new Date().getFullYear()} JotaJota Buffet
      </p>
    </footer>
  );
}

export function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Gallery />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
