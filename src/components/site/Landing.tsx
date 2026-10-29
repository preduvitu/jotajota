import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Instagram,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { contact, faq, gallery, nav, services, steps, whatsappLink, reviews } from "@/config/site";
import logoImg from "@/assets/logo-removed.png";
import logoRodapeImg from "@/assets/logo-rodape.png";
// IMAGENS PROVISÓRIAS (geradas, ilustrativas). Substituir por fotos oficiais do buffet.
import heroImg from "@/assets/hero-ilustrativa.jpg";
import galeria2 from "@/assets/galeria-2.jpg";
import eventoCasamento from "@/assets/evento-casamento.mp4";
import eventoDegustacao from "@/assets/evento-degustacao.mp4";
import eventoComemoracoes from "@/assets/Buffet de Festa no Jardim.png";

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
      src={logoImg}
      alt="JotaJota Buffet"
      className={`object-contain ${className}`}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-3 pb-2 bg-gradient-to-b from-[#3c4c6b]/60 to-transparent">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-ivory/15 bg-[#3c4c6b]/80 px-5 py-2 shadow-lg backdrop-blur-md">
        <a href="#inicio" className="flex items-center" aria-label="JotaJota Buffet — início">
          <Logo className="-my-3 md:-my-4 h-20 md:h-24 w-auto drop-shadow" />
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

const heroSlides = [
  {
    src: heroImg,
    alt: "Mesa de buffet decorada à luz de velas",
  },
  {
    src: eventoComemoracoes,
    alt: "Buffet de festa no jardim ao ar livre",
  },
  {
    src: galeria2,
    alt: "Mesa de jantar elegante para casamento",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section id="inicio" className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Imagens em Carrossel */}
      {heroSlides.map((slide, idx) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1920}
          height={1088}
          fetchPriority={idx === 0 ? "high" : "low"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      {/* Camada de escurecimento sobre a imagem */}
      <div className="absolute inset-0 bg-brand-deep/70" aria-hidden />

      {/* Conteúdo central */}
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
        <p className="mt-8 text-xs text-ivory/50">Imagens ilustrativas</p>
      </div>

      {/* Controles de navegação (Setas) */}
      <button
        onClick={prevSlide}
        aria-label="Imagem anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex size-11 items-center justify-center rounded-full bg-black/25 text-ivory backdrop-blur-sm transition-all hover:bg-black/50 hover:scale-105"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Próxima imagem"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex size-11 items-center justify-center rounded-full bg-black/25 text-ivory backdrop-blur-sm transition-all hover:bg-black/50 hover:scale-105"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Indicadores inferiores (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir para o slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "w-8 bg-ivory" : "w-2 bg-ivory/40 hover:bg-ivory/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

const eventTypes = [
  {
    title: "Eventos de Casamento",
    description:
      "Tornamos o dia mais especial ainda com um cardápio sofisticado e serviço impecável, do coquetel ao jantar.",
    media: eventoCasamento,
    type: "video" as const,
  },
  {
    title: "Evento Degustação",
    description:
      "Experiências gastronômicas únicas para impressionar os seus convidados com sabores e apresentações exclusivas.",
    media: eventoDegustacao,
    type: "video" as const,
  },
  {
    title: "Evento Comemorações",
    description:
      "Aniversários, confraternizações e celebrações especiais com toda a estrutura e capricho que o momento merece.",
    media: eventoComemoracoes,
    type: "image" as const,
  },
];

function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow text-muted-foreground">O buffet</p>
        <h2 className="mt-4 text-4xl text-brand md:text-5xl">Cada evento, preparado com atenção</h2>
        {/* TEXTO PENDENTE DE VALIDAÇÃO DO CLIENTE */}
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          O JotaJota Buffet cuida da gastronomia do seu evento para que você possa aproveitar o
          momento ao lado de quem importa.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-3xl bg-card shadow-sm border border-border"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                {event.type === "video" ? (
                  <video
                    src={event.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={event.media}
                    alt={event.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-brand">{event.title}</h3>
                <p className="mt-2 text-muted-foreground">{event.description}</p>
                <a
                  href={whatsappLink(`Olá! Gostaria de um orçamento para: ${event.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-brand underline underline-offset-4"
                >
                  Solicitar orçamento
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentItem = gallery[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, []);

  // Para imagens, avança automaticamente após 5 segundos
  useEffect(() => {
    if (currentItem?.type === "image" && isPlaying) {
      const timer = setTimeout(() => {
        nextSlide();
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isPlaying, nextSlide, currentItem?.type]);

  // Ao mudar de slide, se for vídeo, garante que dá play
  useEffect(() => {
    if (currentItem?.type === "video" && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentIndex, isPlaying, currentItem?.type]);

  const togglePlay = () => {
    if (currentItem?.type === "video" && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted((prev) => !prev);
  };

  if (gallery.length === 0) return null;

  return (
    <section id="galeria" className="bg-brand-deep text-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="eyebrow text-mist">Gastronomia & Experiência</p>
          <h2 className="mt-4 text-4xl text-ivory md:text-5xl">Galeria</h2>
          <p className="mx-auto mt-3 max-w-xl text-ivory/80">
            Momentos reais, preparo artesanal e a energia dos nossos eventos e degustações.
          </p>
        </div>

      {/* Palco Principal / Visualizador com avanço automático ao fim do vídeo */}
      <div className="relative mt-12 w-full overflow-hidden rounded-3xl border border-border bg-black shadow-2xl aspect-[16/10] md:aspect-[16/9] max-h-[560px]">
        {currentItem.type === "video" ? (
          <video
            ref={videoRef}
            key={currentItem.src}
            src={currentItem.src}
            autoPlay
            muted={isMuted}
            playsInline
            onEnded={nextSlide}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            key={currentItem.src}
            src={currentItem.src}
            alt={currentItem.alt}
            className="h-full w-full object-cover transition-opacity duration-700"
          />
        )}

        {/* Gradiente superior com badge de tipo e contador */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/70 to-transparent">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10">
            {currentItem.type === "video" ? "▶ Vídeo" : "📷 Foto"}
          </span>
          <span className="text-xs font-medium text-white/80 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
            {currentIndex + 1} / {gallery.length}
          </span>
        </div>

        {/* Gradiente inferior com título e controles de áudio/play */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div>
            <h3 className="text-xl md:text-2xl font-display text-white">
              {currentItem.title || currentItem.alt}
            </h3>
            <p className="text-xs md:text-sm text-white/70 line-clamp-1">{currentItem.alt}</p>
          </div>

          <div className="flex items-center gap-2">
            {currentItem.type === "video" && (
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
                className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/40"
              >
                {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              </button>
            )}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
              className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/40"
            >
              {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
          </div>
        </div>

        {/* Setas de navegação */}
        <button
          onClick={prevSlide}
          aria-label="Item anterior"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-all hover:bg-black/60 hover:scale-105"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Próximo item"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-all hover:bg-black/60 hover:scale-105"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      {/* Miniaturas (Thumbnails) abaixo do player */}
      <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
        {gallery.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              setIsPlaying(true);
            }}
            aria-label={`Ver ${item.title || item.alt}`}
            className={`group relative flex-shrink-0 w-24 md:w-28 aspect-video rounded-2xl overflow-hidden border-2 transition-all ${
              idx === currentIndex
                ? "border-ivory ring-2 ring-ivory/40 scale-105 shadow-md"
                : "border-ivory/20 opacity-60 hover:opacity-100 hover:scale-100"
            }`}
          >
            {item.type === "video" ? (
              <video src={item.src} muted playsInline className="h-full w-full object-cover" />
            ) : (
              <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
            )}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-black/60 p-1 text-white">
                  <Play className="size-3 fill-white" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
      </div>
    </section>
  );
}

function GoogleIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function Reviews() {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [api, isHovered]);

  if (reviews.length === 0) return null;

  const avatarColors = [
    "bg-[#E37400]", // Laranja (como na avaliação do Gustavo Henrique)
    "bg-[#1A73E8]", // Azul Google
    "bg-[#188038]", // Verde Google
    "bg-[#D93025]", // Vermelho Google
    "bg-[#9334E6]", // Roxo
    "bg-[#E37400]",
  ];

  return (
    <section id="avaliacoes" className="bg-background py-20 md:py-28 border-b border-border/40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-xs mb-3">
            <GoogleIcon className="size-4" />
            <span className="text-xs font-medium text-foreground">Avaliações Verificadas no Google</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-brand">5.0</span>
          </div>

          <h2 className="text-3xl text-brand md:text-5xl font-display">
            A satisfação de quem celebrou conosco
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Veja os depoimentos de clientes que confiaram ao JotaJota Buffet os seus momentos mais marcantes.
          </p>
        </div>

        {/* Carrossel com 3 itens no meio e rotação contínua */}
        <div
          className="mt-14 relative px-2 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 items-stretch">
              {reviews.map((r, i) => {
                const initials = r.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase();
                const avatarBg = avatarColors[i % avatarColors.length];

                return (
                  <CarouselItem key={i} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex">
                    <article className="w-full flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className={`flex size-11 items-center justify-center rounded-full ${avatarBg} text-white font-semibold text-base shadow-xs`}>
                              {initials[0]}
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground text-base leading-tight">
                                {r.name}
                              </h3>
                              {r.role && (
                                <span className="text-xs text-muted-foreground block mt-0.5">
                                  {r.role}
                                </span>
                              )}
                            </div>
                          </div>
                          <GoogleIcon className="size-5 shrink-0 opacity-80" />
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                          <div className="flex gap-0.5 text-amber-400">
                            {[...Array(r.rating || 5)].map((_, idx) => (
                              <Star key={idx} className="size-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          {r.date && (
                            <span className="text-xs text-muted-foreground">• {r.date}</span>
                          )}
                        </div>

                        <p className="mt-4 text-sm md:text-base leading-relaxed text-foreground/85">
                          "{r.comment}"
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                          ✓ Avaliação confirmada
                        </span>
                        <a
                          href={contact.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-brand hover:underline"
                        >
                          Google <ExternalLink className="size-3" />
                        </a>
                      </div>
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-card/95 shadow-md border-border/80 hover:bg-card hover:scale-105" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-card/95 shadow-md border-border/80 hover:bg-card hover:scale-105" />
          </Carousel>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 shadow-xs">
            <a href={contact.googleReviewUrl || contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Star className="size-4 fill-amber-400 text-amber-400" /> Deixar uma avaliação no Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <p className="eyebrow text-muted-foreground">Presença & Confiança</p>
          <h2 className="mt-3 text-3xl text-brand md:text-4xl">Conheça o JotaJota Buffet no Google</h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-0">
          {/* Lado Esquerdo - Mapa (~60%) */}
          <div className="flex flex-col lg:col-span-7 lg:pr-10">
            {contact.googleMapsEmbedUrl && (
              <div className="w-full overflow-hidden rounded-3xl border border-border shadow-sm bg-card">
                <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-5 py-3">
                  <div className="flex items-center gap-2 text-brand">
                    <MapPin className="size-4 text-brand" />
                    <span className="text-sm font-medium">JotaJota Buffet — Localização</span>
                  </div>
                  <a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand hover:underline font-medium"
                  >
                    Abrir no Maps <ExternalLink className="size-3" />
                  </a>
                </div>
                <iframe
                  src={contact.googleMapsEmbedUrl}
                  title="Localização do JotaJota Buffet no Google Maps"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-[320px] md:h-[360px] block"
                />
              </div>
            )}
          </div>

          {/* Lado Direito - Avaliações (~40%) com linha divisória perfeitamente centralizada */}
          <div className="flex flex-col justify-center border-t border-border/80 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="rounded-3xl border border-border/60 bg-card p-7 md:p-8 shadow-sm">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-sm font-semibold text-foreground">5.0 no Google</span>
              </div>

              <h3 className="mt-4 text-2xl text-brand font-display">
                Sua experiência é especial para nós
              </h3>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                Já celebrou uma data especial, casamento ou participou de uma degustação com o JotaJota Buffet? Compartilhe sua opinião no Google e nos ajude a continuar oferecendo momentos inesquecíveis.
              </p>

              {contact.googleReviewUrl && (
                <div className="mt-6 w-full">
                  <Button asChild variant="brand" size="lg" className="h-12 w-full rounded-full px-7 shadow-sm">
                    <a href={contact.googleReviewUrl} target="_blank" rel="noopener noreferrer">
                      <Star className="size-4 fill-amber-300 text-amber-300" />
                      Deixar minha avaliação no Google
                      <ExternalLink className="size-3.5 opacity-70" />
                    </a>
                  </Button>
                </div>
              )}

              <p className="mt-4 text-xs text-center text-muted-foreground">
                Agradecemos o carinho e a confiança de cada cliente!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  if (faq.length === 0) return null;

  const renderAnswer = (answer: string) => {
    if (contact.whatsappDisplay && answer.includes(contact.whatsappDisplay)) {
      const parts = answer.split(contact.whatsappDisplay);
      return (
        <>
          {parts[0]}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {contact.whatsappDisplay}
          </a>
          {parts.slice(1).join(contact.whatsappDisplay)}
        </>
      );
    }
    return answer;
  };

  return (
    <section id="perguntas" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <h2 className="text-center text-4xl text-brand md:text-5xl">Perguntas frequentes</h2>
      <Accordion type="single" collapsible className="mt-10">
        {faq.map((f) => (
          <AccordionItem key={f.question} value={f.question}>
            <AccordionTrigger className="text-left text-lg">{f.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {renderAnswer(f.answer)}
            </AccordionContent>
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
        <h2 className="text-4xl md:text-5xl">Vamos planejar o seu próximo evento?</h2>
        <p className="mt-5 text-lg text-ivory/80">Fale com a gente pelo WhatsApp.</p>
        <div className="mt-9 flex justify-center"><WhatsAppButton label="Fale conosco pelo WhatsApp" /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-deep text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <img
          src={logoRodapeImg}
          alt="JotaJota Buffet"
          className="h-10 md:h-14 w-auto drop-shadow-md object-contain"
        />

        <div className="flex flex-col items-center gap-2 md:items-center">
          <nav aria-label="Rodapé" className="flex flex-wrap justify-center gap-6 text-sm text-ivory/75">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-ivory transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-ivory/80 hover:text-ivory transition-colors"
          >
            <MessageCircle />
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ivory/80 hover:text-ivory transition-colors"
          >
            <Instagram />
          </a>
          <a
            href={contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps"
            className="text-ivory/80 hover:text-ivory transition-colors"
          >
            <MapPin />
          </a>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-4 text-center text-xs text-mist">
        © {new Date().getFullYear()} JotaJota Buffet &nbsp;·&nbsp; Criado por{" "}
        <a
          href="https://wa.me/5561991054666"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mist hover:text-ivory transition-colors"
          style={{ textDecoration: "none" }}
        >
          Pedro Vítor
        </a>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className = "size-7 fill-current" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar conosco no WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba59] hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <WhatsAppIcon className="size-8 fill-white transition-transform duration-300 group-hover:scale-110" />
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-brand-deep/90 px-3.5 py-1.5 text-xs font-medium text-ivory opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 md:block">
          Fale conosco no WhatsApp
        </span>
      </a>
    </aside>
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
        <Gallery />
        <Reviews />
        <Trust />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
