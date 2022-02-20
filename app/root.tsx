import { LiveReload, Outlet } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: Jokes App</title>
      </head>
      <body>
        <LiveReload />
        <Outlet />
      </body>
    </html>
  );
}
