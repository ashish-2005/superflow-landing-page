// components/Hero.jsx

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-bold mb-4">SuperFlow — Your AI Productivity Partner</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-6">
        Automate tasks, generate content, and organize your workflow effortlessly.
      </p>
      <a
        href="#pricing"
        className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800"
      >
        Get Started
      </a>
    </section>
  );
}
