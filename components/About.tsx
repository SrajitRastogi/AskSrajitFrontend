import { MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-br from-[#0f172a] to-[#111827] p-12 rounded-3xl border border-gray-800 shadow-2xl">

          {/* Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl font-bold">
              S
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                Srajit Rastogi
              </h2>
              <p className="text-blue-400 text-xl mt-1">
                Software Engineer
              </p>
            </div>
          </div>

          <hr className="border-gray-800 mb-8" />

          {/* Description */}
          <p className="text-gray-300 text-lg leading-8 mb-12 max-w-4xl">
          Backend developer with hands-on experience in building distributed systems and cloud-based applications. I work primarily with microservices, APIs, and event-driven workflows, focusing on reliability and clean architecture.

I am always looking to deepen my understanding of backend systems and explore how modern technologies can enhance performance and scalability.
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Location */}
            <div className="bg-[#1f2937] p-6 rounded-2xl flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">
                  Dallas, TX, USA
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#1f2937] p-6 rounded-2xl flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">
                  rastogisrajit03@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#1f2937] p-6 rounded-2xl flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">
                  +1 (469) 233-3407
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
