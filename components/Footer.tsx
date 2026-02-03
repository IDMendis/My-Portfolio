export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-3">
              Tharu Shidev
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors text-sm"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Follow Me
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300"
                title="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300"
                title="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300"
                title="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 002.856-9.56-11.858 11.858 0 01-3.388 1.35 5.921 5.921 0 00-10.37 5.401 16.82 16.82 0 01-12.337-6.41 5.917 5.917 0 001.836 7.907 5.888 5.888 0 01-2.685-.74v.074c0 2.868 2.043 5.266 4.753 5.81a5.92 5.92 0 01-2.676.101 5.934 5.934 0 005.544 4.121 11.88 11.88 0 01-7.357 2.537c-.48 0-.953-.028-1.418-.084a16.777 16.777 0 009.101 2.691c10.823 0 16.73-8.96 16.73-16.73 0-.255-.006-.51-.019-.764a11.964 11.964 0 002.929-3.063z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 dark:bg-gray-800 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            © {currentYear} Tharu Shidev. All rights reserved. Built with
            <span className="text-pink-500 mx-1">♥</span>
            using Next.js & Tailwind CSS.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-pink-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
