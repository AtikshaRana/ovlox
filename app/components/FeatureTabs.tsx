"use client";
import { useState } from "react";

export default function FeatureTabs() {
  const [active, setActive] = useState(0);

  const data = [
    {
      title: "Hardware Issues & Repairs",
      image: "/HardwareIssue.jpg",
      links: [
        { label: "Handle Related ", url: "/track-orders" },
        { label: "Lock Body Related", url: "/repair-policy" },
        { label: "Dnd Related ", url: "/maintenance-schedule" },
        { label: "Key Cylinder Related", url: "/track-orders" },
        { label: "Repair Policy", url: "/repair-policy" },
        { label: "Maintenance Schedule", url: "/maintenance-schedule" },
      ],
    },
    {
      title: "Directional Adjustment Problems",
      image: "/direction-change.jpg",
      links: [
        { label: "Adjustment Tips", url: "/adjustment-tips" },
        { label: "Troubleshooting", url: "/troubleshooting" },
        { label: "Installation Guide", url: "/installation-guide" },
        { label: "Adjustment Tips", url: "/adjustment-tips" },
        { label: "Troubleshooting", url: "/troubleshooting" },
        
      ],
    },
    {
      title: "Mobile App Assistance",
      image: "/mobile-app.jpg",
      links: [
        { label: "Download App", url: "/download-app" },
        { label: "App Settings", url: "/app-settings" },
        { label: "Remote Access Guide", url: "/remote-access-guide" },
      ],
    },
    {
      title: "Software & Firmware Issues",
      image: "/SoftWareRelatedIssues.jpg",
      links: [
        { label: "Firmware Update", url: "/firmware-update" },
        { label: "Error Codes", url: "/error-codes" },
        { label: "Bug Fix Guide", url: "/bug-fix-guide" },
      ],
    },
    {
      title: "AMC Plans for Locks",
      image: "/AMC.jpg",
      links: [
        { label: "Subscription Plans", url: "/subscription-plans" },
        { label: "Coverage Details", url: "/coverage-details" },
        { label: "How to Enroll", url: "/how-to-enroll" },
      ],
    },
  ];



  return (
    <section className="py-4 md:py-16 bg-gradient-to-b from-[#8cdff4] to-[#101828] relative">

      {/* DESKTOP BACKGROUND IMAGE */}
      <div
        className="hidden md:block absolute inset-0 h-[200px] overflow-hidden z-0 mb-10 mt-0 "
        style={{
          backgroundImage: `url(${data[active].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 p-2  ">

          {/* LEFT TABS */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`p-5 rounded-2xl cursor-pointer border text-lg font-semibold 
         transition-transform duration-300 ease-in-out transform
         ${active === index
                    ? "bg-gradient-to-r from-[#22598e] text-white shadow-xl scale-105"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200 hover:shadow-md hover:scale-105"
                  }
       `}
              >
                {item.title}
              </div>

            ))}
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex-1 flex flex-col gap-6 w-full ">

            {/* IMAGE PREVIEW CARD (Always Visible) */}
            <div className="rounded-3xl w-full md:w-[70%] h-[420px] md:h-[590px] overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={data[active].image}
                alt={data[active].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>


            {/* LINKS WITH ANIMATION */}
            <div className="space-y-4">
              {data[active].links.map((link, i) => (
              <a
              key={i}
              href={link.url}
              className="
                group flex items-center justify-between
                bg-white/10 backdrop-blur-md
                p-4 rounded-2xl border border-white/20
                text-white font-medium
                hover:bg-white/20 hover:text-white/90
                hover:shadow-lg hover:scale-105
                transition-all duration-300 ease-out
              "
            >
                  <span className="text-lg font-medium text-white ">{link.label}</span>
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>


  );
}
