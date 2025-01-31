export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-[calc(100vh-var(--height-navbar)-var(--height-smallscreen-search-container)-var(--height-footer))]">
      {children}
    </section>
  );
}
