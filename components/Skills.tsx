export default function Skills() {
    return (
      <section id="skills" className="py-24 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Technical Skills
          </h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
  
            {/* Programming Languages */}
            <div className="bg-[#0B1120] p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Java (8, 11, 17)",
                  "SQL",
                  "JavaScript (ES6+)",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Backend & APIs */}
            <div className="bg-[#0B1120] p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                Backend & APIs
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Spring Boot",
                  "Spring MVC",
                  "Spring Security",
                  "OAuth2 / JWT",
                  "Microservices",
                  "REST APIs",
                  "Hibernate",
                  "JPA",
                  "JDBC",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Frontend */}
            <div className="bg-[#0B1120] p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Redux",
                  "HTML5",
                  "CSS3",
                  "Bootstrap",
                  "Responsive UI",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Databases */}
            <div className="bg-[#0B1120] p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                Databases
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "PostgreSQL",
                  "MySQL",
                  "Oracle",
                  "SQL Server",
                  "MongoDB",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
            {/* Cloud & DevOps */}
            <div className="bg-[#0B1120] p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "AWS (EKS, EC2, RDS, S3)",
                  "Docker",
                  "Kubernetes",
                  "Jenkins",
                  "Maven",
                  "Gradle",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
            {/* AI / ML Integration */}
            <div className="bg-[#0B1120] p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                AI / ML Integration
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "RAG (Retrieval-Augmented Generation)",
                  "LangChain (basic)",
                  "AI Inference APIs",
                  "Model-driven APIs",
                  "AI-assisted decision systems",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  