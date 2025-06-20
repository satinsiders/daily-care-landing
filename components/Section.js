export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`.trim()}>
      <div className="container mx-auto px-4 max-w-6xl">{children}</div>
    </section>
  );
}