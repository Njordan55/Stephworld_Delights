import Link from "next/link";

const categories = [
  { name: "Cakes", slug: "cakes" },
  { name: "Cupcakes", slug: "cupcakes" },
  { name: "Custom Orders", slug: "custom-orders" },
];

export default function CategorySection() {
  return (
    <section
      aria-labelledby="categories-title"
      className="px-4 py-12 sm:px-8"
      style={{
        backgroundColor: "var(--swd-surface)",
        color: "var(--swd-foreground)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="categories-title"
          className="text-2xl font-bold sm:text-3xl"
        >
          Shop by Category
        </h2>

        <p className="mt-2">
          Explore our delicious creations.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="flex min-h-40 items-center justify-center border p-6 text-center text-xl font-semibold transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: "var(--swd-background)",
                borderColor: "var(--swd-border)",
                borderRadius: "var(--swd-radius-default)",
                transitionDuration: "var(--swd-quick-transition-duration)",
              }}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}