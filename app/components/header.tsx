import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#DFDFDF] py-4">
      <div className="container ">
        {/* Logo on the left */}
        <div className="mx-auto flex items-center justify-between">
        <div className="logo flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Ovlox Logo"
            width={200}  // larger logo
            height={200} // larger logo
            className="object-contain"
          />
        </div>

        {/* Support team info on the right */}
        <div className="text-right">
          <p className="text-lg font-medium text-[#20425a] ">
            Need help? Contact our <br /> <span className="font-bold">Support Team</span>
          </p>
        </div>
        </div>
      </div>
    </header>
  );
}
