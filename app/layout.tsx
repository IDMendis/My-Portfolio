import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Dinushi Mendis | Portfolio",
  description: "Software Engineering Intern & Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-[#0B1120] dark:text-gray-100 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
