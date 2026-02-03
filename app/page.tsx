import Navbar from "@/components/Navbar";

/* =======================
   DATA
======================= */
const skills = {
  frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  backend: ["Node.js", "Express", "MongoDB", "Firebase"],
  tools: ["Git", "GitHub", "Postman", "Figma"],
};

/* =======================
   PAGE
======================= */
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-32 max-w-6xl mx-auto px-6">

        {/* ================= HERO ================= */}
        <section className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I’m <span className="text-sky-400">Dinushi</span> 👋
            </h2>

            <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
              Software Engineering Intern{" "}
              <span className="text-sky-400">|</span> Full Stack Developer
            </h3>

            <p className="max-w-md text-gray-400 mb-8">
              I build secure, scalable, and user-friendly applications using
              modern web technologies.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-sky-400 text-black font-semibold hover:bg-sky-500 transition"
              >
                View Projects
              </a>

              <a
                href="/Dinushi_Mendis_CV.pdf"
                className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-center">
            <div className="w-64 h-64 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xl">
              Your Photo
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="py-24">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="max-w-3xl text-gray-400 leading-relaxed">
            I am a Software Engineering Intern and a third-year undergraduate at
            the University of Moratuwa, with hands-on experience in full-stack
            web and mobile application development. I enjoy building secure,
            scalable, and user-friendly systems using modern technologies.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard title="🎓 University" value="University of Moratuwa" />
            <InfoCard title="⭐ GPA" value="3.49" />
            <InfoCard title="💼 Focus" value="Full Stack & Secure Systems" />
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="py-24">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="p-6 rounded-xl bg-[#111827] border border-gray-800"
              >
                <h3 className="text-lg font-semibold capitalize mb-4 text-sky-400">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-sky-400/10 text-sky-300 border border-sky-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

/* =======================
   REUSABLE COMPONENTS
======================= */
function InfoCard({ title, value }) {
  return (
    <div className="p-6 rounded-xl bg-[#111827] border border-gray-800">
      <strong>{title}</strong>
      <p className="text-gray-400 mt-2">{value}</p>
    </div>
  );
}
