// components/Pricing.jsx

export default function Pricing() {
  const tiers = [
    {
      title: "Starter",
      price: "$0",
      features: ["Basic AI Tools", "5 Tasks/Day", "Email Support"],
    },
    {
      title: "Pro",
      price: "$19/mo",
      features: ["Unlimited Tasks", "Priority Support", "Advanced Tools"],
    },
    {
      title: "Team",
      price: "$49/mo",
      features: ["Team Workflows", "Collaboration", "Admin Panel"],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.title} className="p-6 border rounded-xl shadow-sm text-center">
            <h3 className="text-2xl font-semibold mb-2">{tier.title}</h3>
            <p className="text-4xl font-bold mb-4">{tier.price}</p>
            <ul className="text-gray-600 mb-6">
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
