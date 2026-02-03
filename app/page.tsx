import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24 max-w-6xl mx-auto px-4">
        <section className="min-h-[80vh] flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m Dinushi 👋
          </h2>

          <h3 className="text-xl md:text-2xl text-sky-400 mb-6">
            Software Engineering Intern | Full Stack Developer
          </h3>

          <p className="max-w-xl text-gray-600 dark:text-gray-300 mb-8">
            I build secure, scalable, and user-friendly applications using
            modern web technologies.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-sky-400 text-black font-medium hover:bg-sky-500 transition"
            >
              View Projects
            </a>

            <a
              href="/Dinushi_Mendis_CV.pdf"
              className="px-6 py-3 rounded-lg border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download CV
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
