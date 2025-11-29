import Image from "next/image";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#DFDFDF] py-4">
      <div className="container">
        <div className="mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Ovlox Logo"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* Support Section */}
          <div className="flex items-center gap-4">

            {/* Icon circle */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
              <Phone size={22} className="text-[#20425a]" />
            </div>

            {/* Text */}
            <div className="leading-tight text-left">
              <p className="text-sm text-[#20425a] opacity-80 mb-0! ">
                Need help?
              </p>

              <a
                href="tel:+918868830011"
                className="text-lg font-semibold text-[#20425a] hover:underline"
              >
                Call Support Team
              </a>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
