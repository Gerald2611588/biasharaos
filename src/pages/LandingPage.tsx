import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Receipt,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Track your sales",
    description:
      "Record sales in seconds and always know how much your business is making.",
  },
  {
    icon: Boxes,
    title: "Manage your stock",
    description:
      "Keep track of your products and know when something is running low.",
  },
  {
    icon: BarChart3,
    title: "Understand your numbers",
    description:
      "See revenue, expenses and profit in one simple dashboard.",
  },
  {
    icon: Users,
    title: "Know your customers",
    description:
      "Keep your customer information organized and build stronger relationships.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Zap size={19} />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Biashara<span className="text-blue-600">OS</span>
          </span>
        </div>

        <button className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
          Sign in
        </button>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Zap size={15} />
            Built for modern Kenyan businesses
          </div>

          <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Run your business
            <span className="block text-blue-600">smarter.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            BiasharaOS brings your sales, expenses, products, customers and
            business insights together in one simple place.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800 sm:w-auto">
              Get started
              <ArrowRight size={18} />
            </button>

            <button className="w-full rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 sm:w-auto">
              See how it works
            </button>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl shadow-slate-200/60">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-slate-200" />
              <div className="h-3 w-3 rounded-full bg-slate-200" />
              <div className="h-3 w-3 rounded-full bg-slate-200" />
              <div className="ml-3 h-2 w-32 rounded-full bg-slate-100" />
            </div>

            <div className="grid gap-5 p-6 md:grid-cols-4">
              {[
                ["Today's sales", "KSh 12,450"],
                ["Expenses", "KSh 4,200"],
                ["Estimated profit", "KSh 8,250"],
                ["Orders", "18"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-6 mb-6 rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Sales overview</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Your business performance
                  </p>
                </div>

                <BarChart3 className="text-blue-600" />
              </div>

              <div className="mt-8 flex h-32 items-end gap-3">
                {[45, 65, 50, 80, 62, 90, 72, 100, 84, 92, 70, 110].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-blue-600/80"
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Everything in one place
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              The tools you need to run your business.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl bg-slate-950 px-6 py-14 text-center text-white sm:px-12">
          <CheckCircle2 className="mx-auto text-blue-400" size={30} />

          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            Your business. One simple system.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Start building a clearer picture of your business today.
          </p>

          <button className="mt-8 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-slate-100">
            Create your account
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        © 2026 BiasharaOS. Built for businesses.
      </footer>
    </main>
  );
}