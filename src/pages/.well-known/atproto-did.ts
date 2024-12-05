import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response("did:plc:2t7neqm6tpf6hck6pu3dnuad");
};