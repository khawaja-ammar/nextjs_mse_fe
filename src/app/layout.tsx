export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="agd-partner-manual-verification" />
      </head>
      <body>{children}</body>
    </html>
  );
}
