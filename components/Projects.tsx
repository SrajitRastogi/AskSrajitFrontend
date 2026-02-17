export default function Projects() {
    return (
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Projects
          </h2>
  
          <div className="grid md:grid-cols-2 gap-12">
  
            {/* FreightFlow */}
            <div className="bg-[#111827] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">
                FreightFlow — Microservices Logistics Platform
              </h3>
  
              <p className="text-sm text-blue-400 mb-4">
                Java • Spring Boot • PostgreSQL • AWS ECS • React • TypeScript
              </p>
  
              <ul className="list-disc list-inside space-y-3 text-gray-400 leading-relaxed">
                <li>
                  Designed a Java-based microservices system using Spring Boot
                  and REST APIs to streamline freight check-in workflows.
                </li>
                <li>
                  Integrated PostgreSQL persistence layer with optimized
                  indexing for backend validation flows.
                </li>
                <li>
                  Built a React + TypeScript frontend consuming secure APIs
                  to enforce input validation and reduce manual shipment errors.
                </li>
                <li>
                  Deployed containerized services on AWS ECS supporting
                  multi-service orchestration.
                </li>
              </ul>
            </div>
  
            {/* SecurePay */}
            <div className="bg-[#111827] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">
                SecurePay — Event-Driven Banking Platform
              </h3>
  
              <p className="text-sm text-blue-400 mb-4">
                Java • Spring Boot • Kafka • PostgreSQL • JWT • Microservices
              </p>
  
              <ul className="list-disc list-inside space-y-3 text-gray-400 leading-relaxed">
                <li>
                  Engineered a secure transaction processing service using
                  Spring Boot and JWT-based role authentication.
                </li>
                <li>
                  Implemented Apache Kafka event streams separating
                  validation and settlement logic into independently
                  deployable services.
                </li>
                <li>
                  Persisted 1.2M+ simulated transactions using audit-friendly
                  relational data models.
                </li>
                <li>
                  Designed microservices architecture to enable parallel
                  transaction processing without tight coupling.
                </li>
              </ul>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  