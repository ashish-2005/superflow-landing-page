// components/Features.jsx

export default function Features() {
  const items = [
    {
      title: "Fast Automation",
      desc: "Run complex tasks in seconds using AI pipelines.",
    },
    {
      title: "Smart Content",
      desc: "Generate blogs, emails, social posts, and more.",
    },
    {
      title: "Seamless Integration",
      desc: "Works with your favorite tools and workflows.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {items.map((feature) => (
          <div
            key={feature.title}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
