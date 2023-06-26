import { inter } from "./font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Teste Secretária Naty</title>
        <meta
          name="description"
          content="Esse é um teste da empresa Secretária Naty"
        />
      </head>
      <body
        className={inter.className}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </body>
    </html>
  );
}
