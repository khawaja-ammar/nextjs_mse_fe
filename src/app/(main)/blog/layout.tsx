export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="content-grid py-8">{children}</section>;
}
