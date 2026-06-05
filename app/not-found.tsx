import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center">
      <div className="container-x text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="display text-7xl md:text-9xl">
          Lost in
          <br />
          <span className="italic text-[var(--color-mute)]">the void.</span>
        </h1>
        <p className="mt-8 text-[var(--color-mute)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-ink mt-10">
          ← Back home
        </Link>
      </div>
    </main>
  );
}
