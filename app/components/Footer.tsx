// components/Footer.js
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <Image
              src="https://ovloxindia.com/wp-content/uploads/2025/06/logo.png"
              alt="Ovlox India Logo"
              width={150}
              height={60}
            />
          </Link>
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-left">
          <p>Thanks & Regards,</p>
          <p className="font-bold">Ovlox India</p>
        </div>

        {/* Optional Contact Info */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p>
            <a href="tel:+918868830011" className="hover:underline">
              +91 8868830011
            </a>
          </p>
          <p>
            <a href="mailto:atiksharana2002@gmail.com" className="hover:underline">
              atiksharana2002@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
