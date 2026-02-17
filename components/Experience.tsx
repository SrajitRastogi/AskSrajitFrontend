export default function Experience() {
    return (
      <section id="experience" className="py-24 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Experience</h2>
  
          {/* BNY Mellon */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-semibold">
                BNY Mellon — Full Stack Java Developer
              </h3>
              <span className="text-gray-400">
                September 2025 – Present
              </span>
            </div>
  
            <ul className="list-disc list-inside space-y-3 text-gray-400 leading-relaxed">
              <li>
                Developed Spring Boot microservices using Java 17, REST APIs,
                Spring Data JPA, Hibernate, and PostgreSQL to support fraud
                signal enrichment systems handling 18M+ daily transactions
                with ~2.1s response time.
              </li>
  
              <li>
                Built React.js (Redux, TypeScript) user interfaces to display
                ML-driven alerts across 14 production workflows for asset
                servicing teams.
              </li>
  
              <li>
                Integrated Machine Learning inference services into Apache Kafka
                pipelines running on AWS EKS, enabling real-time scoring across
                6 downstream microservices.
              </li>
  
              <li>
                Implemented Spring Security with OAuth2 and JWT-based role
                controls supporting enterprise regulatory audits.
              </li>
  
              <li>
                Automated CI/CD pipelines using Jenkins, Docker, and Kubernetes,
                reducing deployment execution time from 4 hours to 32 minutes
                across 11 microservices.
              </li>
            </ul>
          </div>
  
          {/* KPMG */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-semibold">
                KPMG — Software Developer
              </h3>
              <span className="text-gray-400">
                May 2021 – July 2023
              </span>
            </div>
  
            <ul className="list-disc list-inside space-y-3 text-gray-400 leading-relaxed">
              <li>
                Developed Java 11 Spring Boot backend services supporting
                microservices-based compliance platforms managing 50M+
                structured records.
              </li>
  
              <li>
                Implemented RESTful APIs documented with Swagger/OpenAPI
                enabling 27+ internal system integrations.
              </li>
  
              <li>
                Optimized PostgreSQL queries through indexing and execution-plan
                tuning, reducing batch processing time from 48 minutes to
                11 minutes.
              </li>
  
              <li>
                Established automated testing using JUnit, Mockito, Cucumber,
                and JaCoCo, preventing 140+ pre-production defects.
              </li>
  
              <li>
                Supported Docker and Kubernetes deployments during migration
                of 8 applications to AWS environments.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  