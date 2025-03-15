import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const FEATURES_DATA = [
  {
    description: "Modern React framework for fast, scalable apps.",
    title: "Next.js 15 🚀",
  },
  {
    description: "Seamless user authentication with Clerk.",
    title: "Clerk Authentication 🔐",
  },
  {
    description: "Type-safe database management with Drizzle.",
    title: "Drizzle ORM 🗂️",
  },
  {
    description: "Cloud PostgreSQL database with Neon.",
    title: "Neon Database 🌩️",
  },
  {
    description: "Utility-first CSS with Tailwind and animations.",
    title: "Tailwind CSS 4 🎨",
  },
  {
    description: "Pre-built UI components for rapid development.",
    title: "ShadCN UI 🖌️",
  },
  {
    description: "Pre-configured linting and formatting for clean code.",
    title: "ESLint & Prettier ✨",
  },
  {
    description: "Fast incremental bundler for improved dev experience.",
    title: "Turbopack ⚡",
  },
  {
    description: "Deploy instantly with Vercel.",
    title: "Vercel Deployment ☁️",
  },
];

export const Features = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 text-center">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Features
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-gray-600">
        A modern Next.js 15 boilerplate with everything you need to build fast,
        scalable apps.
      </p>

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES_DATA.map((card) => (
          <li key={card.title}>
            <Card className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg md:p-6">
              <CardHeader className="flex items-center justify-center space-x-4">
                <CardTitle className="text-center text-lg font-semibold text-gray-900">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="min-h-14 text-gray-600">{card.description}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
