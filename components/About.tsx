import { MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="p-12 rounded-3xl border border-gray-200 shadow-xl bg-white">

          {/* Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-md">
              S
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                Srajit Rastogi
              </h2>
              <p className="text-blue-600 text-lg mt-1">
                Software Engineer
              </p>
            </div>
          </div>

          <hr className="border-gray-200 mb-8" />

          {/* Description */}
          <p className="text-gray-600 text-lg leading-8 mb-12 max-w-4xl">
            Backend developer with hands-on experience building distributed
            systems and cloud-based applications. I work primarily with
            microservices, APIs, and event-driven workflows, focusing on
            clean architecture and maintainable system design.

            I am continuously learning and exploring ways to improve
            system performance, reliability, and scalability.
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 border border-gray-200 hover:shadow-md transition">
              <div className="bg-blue-600 text-white p-3 rounded-xl">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="font-medium">Dallas, TX, USA</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 border border-gray-200 hover:shadow-md transition">
              <div className="bg-blue-600 text-white p-3 rounded-xl">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-medium">
                  rastogisrajit03@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 border border-gray-200 hover:shadow-md transition">
              <div className="bg-blue-600 text-white p-3 rounded-xl">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <p className="font-medium">
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
