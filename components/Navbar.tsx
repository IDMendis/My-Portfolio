import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-[#0B1120]/70 backdrop-blur border-b border-gray-800 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg">Dinushi Mendis</h1>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#skills" className="hover:text-sky-400">Skills</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
