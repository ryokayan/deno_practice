import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

console.log("http://localhost:8080/");
serve((req) => new Response("Hello World\n"), { port: 8080 });