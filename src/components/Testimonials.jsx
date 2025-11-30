// components/Testimonials.jsx

export default function Testimonials() {
  const data = [
    {
      name: "Arjun R.",
      quote: "SuperFlow saved me 10+ hours every week. Absolute game changer!",
    },
    {
      name: "Priya S.",
      quote: "The content generator is the best I've used. Clean, fast, and powerful.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">What Users Say</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {data.map((item) => (
          <div
            key={item.name}
            className="p-6 border rounded-xl shadow-sm bg-white"
          >
            <p className="text-gray-700 mb-4">“{item.quote}”</p>
            <p className="font-semibold">— {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
