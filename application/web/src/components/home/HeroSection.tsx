import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="px-4 py-16 sm:px-8 lg:py-24"
      style={{
        backgroundColor: "var(--swd-background)",
        color: "var(--swd-foreground)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <p
          className="mb-4 text-sm font-medium uppercase tracking-widest"
          style={{ color: "var(--swd-secondary)" }}
        >
          Welcome to Stephworld Delights
        </p>

        <h1
          id="home-hero-title"
          className="max-w-2xl text-4xl font-bold sm:text-5xl"
        >
          Delicious creations, made with love.
        </h1>

        <p className="mt-6 max-w-xl text-base sm:text-lg">
          Discover our cakes, cupcakes, and special creations
          for your memorable moments.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center justify-center px-6 py-3 font-medium"
            style={{
              backgroundColor: "var(--swd-primary)",
              color: "var(--swd-background)",
              borderRadius: "var(--swd-radius-default)",
            }}
          >
            Explore Products
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center border px-6 py-3 font-medium"
            style={{
              borderColor: "var(--swd-border)",
              borderRadius: "var(--swd-radius-default)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}