import Image from "next/image";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#DFDFDF] py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="
          flex flex-col sm:flex-row 
          items-left sm:items-center 
          justify-between gap-4 md:gap-0
        ">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Ovlox Logo"
              width={180}
              height={180}
              className="object-contain w-[150px] md:w-[180px]"
            />
          </div>

          {/* Support Section */}
          <div className="flex items-center gap-4">

            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
              <Phone size={22} className="text-[#20425a]" />
            </div>

            {/* Text */}
            <div className="leading-tight text-left">
              <p className="text-sm text-[#20425a] opacity-80">
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
