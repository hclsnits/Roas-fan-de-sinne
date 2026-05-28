declare namespace App {
  interface Locals {
    runtime?: import("@astrojs/cloudflare").Runtime<Env>;
  }
}

interface Env {
  MEDUSA_BACKEND_URL: string;
  MEDUSA_PUBLISHABLE_KEY: string;
}
