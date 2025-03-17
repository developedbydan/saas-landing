export default function StatsSection() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            CodeFlow in numbers
          </h2>
          <p>
            Discover the impact of CodeFlow with key metrics that showcase our
            growth and success in empowering teams and businesses worldwide.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+500</div>
            <p>Stars on GitHub</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">2 Million</div>
            <p>Active Users</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+700</div>
            <p>Powered Teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}
