import Link from 'next/link';
import ClientLogos from '../components/clients';

export default function ServicesPage() {
  const services = [
    {
      title: 'CCTV INSTALLATION AND SETUP',
      description:
        'From residential properties to large-scale commercial ventures, Securei offers professional CCTV installation services tailored to your needs.',
      icon: '📹',
    },
    {
      title: '24/7 MONITORING',
      description:
        'Round-the-clock surveillance and monitoring services to ensure complete safety.',
      icon: '🛡️',
    },
    {
      title: 'ANNUAL MAINTENANCE (AMC)',
      description:
        'Hassle-free annual maintenance contracts to keep your security systems running smoothly.',
      icon: '🔧',
    },
    {
      title: 'REMOTE MONITORING',
      description:
        'Keep an eye on your property from anywhere in the world. Our remote monitoring services provide real-time access to your CCTV feed, giving you control at your fingertips.',
      icon: '🌐',
    },
    {
      title: 'MAINTENANCE AND UPGRADES',
      description:
        'Regular maintenance is crucial for optimal performance. Securei provides routine checks and upgrades to ensure your CCTV system is always operating at its best.',
      icon: '⚡',
    },
    {
      title: 'SUPPORT & TROUBLESHOOTING',
      description:
        'Quick support and repair services to resolve issues and minimize downtime.',
      icon: '🤝',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col py-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our CCTV Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Smart CCTV Solutions for Home & Business – Secure, Reliable, and
          Affordable.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ClientLogos />
    </main>
  );
}
