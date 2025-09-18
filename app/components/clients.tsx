'use client';

import { useEffect, useRef } from 'react';

const clients = [
  { id: 1, logo: '/client1.png', name: 'Client 1' },
  { id: 2, logo: '/client2.png', name: 'Client 2' },
  { id: 3, logo: '/client3.png', name: 'Client 3' },
  { id: 4, logo: '/client4.png', name: 'Client 4' },
  { id: 5, logo: '/client5.png', name: 'Client 5' },
  { id: 6, logo: '/client6.png', name: 'Client 6' },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold">OUR CLIENTS</h2>
        <p className="text-gray-600">Trusted by leading businesses</p>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
