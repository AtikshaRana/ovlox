import Image from "next/image";
import Link from "next/link";
import { Phone, Ticket } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#DFDFDF] py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="
          flex flex-col sm:flex-row 
          items-left sm:items-center 
          justify-between gap-6 md:gap-0
        ">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Ovlox Logo"
                width={180}
                height={180}
                className="object-contain w-[150px] md:w-[180px] cursor-pointer"
              />
            </Link>
          </div>

          {/* Support Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">

            {/* Raise Ticket */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                <Ticket size={22} className="text-[#20425a]" />
              </div>
              <div className="leading-tight">
                <p className="text-sm text-[#20425a] opacity-80">Online Portal</p>
                <a
                  href="https://crm.ovloxindia.com/forms/ticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-[#20425a] hover:underline"
                >
                  Raise Support Ticket
                </a>
              </div>
            </div>

            {/* Call Support */}
            <div className="flex items-center gap-3 border-l-0 sm:border-l sm:border-[#20425a]/10 sm:pl-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
                <Phone size={22} className="text-[#20425a]" />
              </div>
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
      </div>
    </header>
  );
}
