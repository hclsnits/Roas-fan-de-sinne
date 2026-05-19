# Roas van de Sinne

A self-contained static website for **Roas van de Sinne**, a botanical rituals and conscious care brand. The page recreates the provided ChatGPT mockup with a soft botanical palette, product cards, inline logo mark, and newsletter sign-up area.

## Scripts

- `npm run dev` starts a Python static file server on port 5173 and binds it to `0.0.0.0` so hosted workspaces can expose the port.
- `npm start` is an alias for `npm run dev`.
- `npm run build` runs a lightweight validation check that confirms the expected site files and brand content exist.

## Viewing the website

1. Run `npm run dev` from the repository root.
2. If you are running the project on your own computer, open <http://127.0.0.1:5173>.
3. If you are running the project in a hosted workspace, Codespace, or container, use the workspace's forwarded-port/preview URL for port `5173` instead of typing `127.0.0.1` in your local browser.

`127.0.0.1` always points to the computer where the browser is running. If the server is running inside a remote container, your local browser's `127.0.0.1:5173` will refuse the connection unless that port is forwarded by the hosting environment.
