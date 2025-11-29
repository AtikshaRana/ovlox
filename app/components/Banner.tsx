import Image from "next/image";
function Banner() {
  return (
    <section className="heroBanner relative py-16 flex min-h-[500px] xl:min-h-[800px]">
    {/* Background Image */}
    <div className="absolute inset-0 ">
      <Image
        src="/ovlox-banner2.jpg"
        alt="Hero Banner Background"
        fill
        sizes="100vw"
        className="object-cover  object-center md:object-right"
        priority
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className=" text-white text-left ">

        <div className="relative max-w-[800px] mr-auto p-4 text-white">
          <div
            className="
              absolute inset-0 
              bg-gradient-to-b from-[#0d2d46]/60 to-black/60
              rounded-xl 
              -z-10
              "
          ></div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ovlox India Support Team
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            We're Here to Help You Anytime
          </h2>

          <p>
            At Ovlox India, we are committed to providing reliable, high-quality security solutions for
            hotels, homes, and workplaces. Our support page is designed to help you find answers, learn
            product features, and resolve any issues with your Ovlox smart locks and accessories.
          </p>
          <p>
            Whether you need installation assistance, troubleshooting guidance, or product information, our expert support team is here to ensure a smooth experience. We also provide demo videos and training material to help you understand our products better.
          </p>
          <p>
            Below, you will find easy-to-follow video tutorials, FAQs, and detailed guidance for resolving common issues. For any personalized help, feel free to contact our support team anytime.
          </p>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Banner