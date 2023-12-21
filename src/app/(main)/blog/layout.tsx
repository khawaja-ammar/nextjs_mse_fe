export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-var(--height-navbar)-var(--height-footer))]">
      <section className="content-grid z-10 py-8">{children}</section>
    </div>
  );
}
