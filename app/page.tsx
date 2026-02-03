import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      
      <main className="pt-32 max-w-6xl mx-auto px-6">

       <section className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center gap-10">
  
  {/* LEFT CONTENT */}
  <div>
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Hi, I’m <span className="text-sky-400">Dinushi</span> 👋
    </h2>

    <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
      Software Engineering Intern <span className="text-sky-400">|</span> Full Stack Developer
    </h3>

    <p className="max-w-md text-gray-400 mb-8">
      I build secure, scalable, and user-friendly applications using modern web technologies.
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

  {/* RIGHT VISUAL */}
  <div className="hidden md:flex justify-center">
    <div className="w-64 h-64 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xl">
      Your Photo
    </div>
  </div>

</section>

      </main>
    </>
  );
}
