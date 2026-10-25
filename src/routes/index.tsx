import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/site/Landing";

const title = "JotaJota Buffet — Orçamento para eventos";
const description =
  "JotaJota Buffet: gastronomia e cuidado para o seu evento. Solicite seu orçamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});
