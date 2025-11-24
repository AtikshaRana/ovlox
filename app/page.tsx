// app/support/page.jsx (Next.js 13+ App Router)

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-6 text-center">
        <h1 className="text-2xl font-bold">Ovlox India Support Page</h1>
      </header>

      <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Welcome to Ovlox India Customer Support</h2>

        <p className="text-gray-700 mb-4">
          At Ovlox India, we are committed to providing reliable, high-quality security solutions for
          hotels, homes, and workplaces. Our support page is designed to help you find answers, learn
          product features, and resolve any issues with your Ovlox smart locks and accessories.
        </p>

        <p className="text-gray-700 mb-4">
          Whether you need installation assistance, troubleshooting guidance, or product information,
          our expert support team is here to ensure a smooth experience. We also provide demo videos
          and training material to help you understand our products better.
        </p>

        <p className="text-gray-700 mb-6">
          Below, you will find easy-to-follow video tutorials, FAQs, and detailed guidance for
          resolving common issues. For any personalized help, feel free to contact our support team
          anytime.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mb-4">YouTube Video Tutorials</h2>

        <div className="mt-4">
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
