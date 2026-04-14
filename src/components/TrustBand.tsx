export default function TrustBand() {
  return (
    <section className="py-10 bg-background border-y border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[13px] text-gray-text/70">
          <span>ORIAS n° 00 000 000</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Membre CNCGP</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Supervision AMF / ACPR</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>RC Pro & Garantie financière</span>
        </div>
      </div>
    </section>
  );
}
