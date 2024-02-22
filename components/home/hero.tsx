import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
            Unil Summaries
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Access academic summaries with ease. Share your knowledge.
          </p>
        </div>
        <div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="/summaries"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
