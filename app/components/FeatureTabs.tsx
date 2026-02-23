"use client";
import { useState } from "react";

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  const toggleGroup = (index: number) => {
    setOpenGroup(openGroup === index ? null : index);
  };

  const [openLink, setOpenLink] = useState<number | null>(null);

  const toggleLink = (index: number) => {
    setOpenLink(openLink === index ? null : index);
  };


  // Helper function to generate slugs from labels
  const generateSlug = (label: string) => {
    return label
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .trim()
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  };


  const data = [
    {
      title: "Hardware Issues & Repairs",
      image: "/HardwareIssue.jpg",
      links: [
        { label: "Handle Issue (Free / Loose Handle)", url: `/support/${generateSlug("Handle Issue (Free / Loose Handle)")}` },
        { label: "Handle Issue (Stiff / Not Free Handle)", url: `/support/${generateSlug("Handle Issue (Stiff / Not Free Handle)")}` },
        { label: "How to Reset the PCB", url: `/support/${generateSlug("How to Reset the PCB")}` },
        { label: "PCB Not Working", url: `/support/${generateSlug("PCB Not Working")}` },
        { label: "Lock Fitting Issue (Door Below 35mm)", url: `/support/${generateSlug("Lock Fitting Issue (Door Below 35mm)")}` },
        { label: "Lock Body Rod Fitting Issue", url: `/support/${generateSlug("Lock Body Rod Fitting Issue")}` },
        { label: "Correct Method for Lock Installation", url: `/support/${generateSlug("Correct Method for Lock Installation")}` },
      ],
    },
    {
      title: "Directional Related Problems",
      image: "/direction-change.jpg",
      groups: [
        {
          groupTitle: "Hotel Locks",
          links: [
            { label: "OSHL-01", url: `/support/${generateSlug("OSHL-01")}` },
            { label: "OSHL-03", url: `/support/${generateSlug("OSHL-03")}` },
            { label: "OSHL-04", url: `/support/${generateSlug("OSHL-04")}` },
            { label: "OSHL-05", url: `/support/${generateSlug("OSHL-05")}` },
            { label: "OSHL-06", url: `/support/${generateSlug("OSHL-06")}` },
            { label: "OSHL-07", url: `/support/${generateSlug("OSHL-07")}` },
          ],
        },
        {
          groupTitle: "Residential Locks",
          links: [
            { label: "OS-103", url: `/support/${generateSlug("OS-103")}` },
            { label: "OS-104", url: `/support/${generateSlug("OS-104")}` },
            { label: "OS-105", url: `/support/${generateSlug("OS-105")}` },
          ],
        },
      ],
    },
    {
      title: "Mobile App Assistance",
      image: "/mobile-app.jpg",
      groups: [
        {
          groupTitle: "Hotel Locks",
          links: [
            { label: "Guide to App Access", url: `/support/${generateSlug("Guide to App Access")}` },
            { label: "Guide to Activating Locks", url: `/support/${generateSlug("Guide to Activating Locks")}` },
          ],
        },
        {
          groupTitle: "Residential Locks",
          links: [
            { label: "Guide to App Access", url: `/support/${generateSlug("Guide to App Access")}` },
            { label: "Guide to Activating Locks", url: `/support/${generateSlug("Guide to Activating Locks")}` },
          ],
        },
      ],
    },
    {
      title: "Software & Firmware Issues",
      image: "/SoftWareRelatedIssues.jpg",
      links: [
        { label: "TT Hotel software", url: "/firmware-update" }, // Keeping this as is since it has a specific download behavior
        { label: "Software Assitance", url: `/support/${generateSlug("Software Assitance")}` },
      ],
    },
    {
      title: "AMC Subscription Plans",
      image: "/AMC.jpg",
      links: [
        { label: "1-Month Plan – Starting at ₹999/month", url: `/support/${generateSlug("1-Month Plan – Starting at ₹999/month")}` },
        { label: "3-Month Plan – Starting at ₹833/month", url: `/support/${generateSlug("3-Month Plan – Starting at ₹833/month")}` },
        { label: "6-Month Plan – Starting at ₹666/month", url: `/support/${generateSlug("6-Month Plan – Starting at ₹666/month")}` },
        { label: "12-Month Plan – Starting at ₹583/month", url: `/support/${generateSlug("12-Month Plan – Starting at ₹583/month")}` },
      ],
    }

  ];

  return (
    <section className="featureTabs py-4 md:py-16 bg-gradient-to-b from-[#8cdff4] to-[#101828] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 p-2">

          {/* LEFT SIDE TABS */}
          <div className="w-full md:w-1/3 mt-[40px]">
            <div className="title-wrapper fixedContent flex flex-col gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`p-5 rounded-2xl cursor-pointer border text-lg font-semibold transition-transform duration-300
                  ${active === index
                      ? "bg-gradient-to-r from-[#22598e] text-white shadow-xl scale-105"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200 hover:shadow-md hover:scale-105"
                    }`}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex-1 flex flex-col gap-6 w-full">

            {/* IMAGE */}
            <div className="rounded-3xl w-full md:w-[70%] h-[420px] md:h-[590px] overflow-hidden shadow-lg transition-transform duration-500">
              <img
                src={data[active].image}
                alt={data[active].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* GROUPS + LINKS */}
            <div className="space-y-6">

              {/* Grouped links (accordion) */}
              {data[active].groups && (
                <div className="space-y-8">
                  {data[active].groups.map((group, gi) => (
                    <div key={gi} className="space-y-3">
                      {/* Accordion Title */}
                      <button
                        onClick={() => toggleGroup(gi)}
                        className="w-full flex items-center justify-between text-left text-2xl font-bold text-yellow-200 bg-white/10 p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                      >
                        <span>{group.groupTitle}</span>
                        <span className={`transform transition-transform duration-300 ${openGroup === gi ? "rotate-90" : ""}`}>▶</span>
                      </button>

                      {/* Accordion Content */}
                      {openGroup === gi && (
                        <div className="space-y-4 pl-4">

                          {/* Fixed Images for Mobile App Assistance */}
                          {data[active].title === "Mobile App Assistance" && (
                            <div className="flex flex-col gap-4">
                              {group.groupTitle === "Hotel Locks" && (
                                <div className="flex flex-col gap-2 w-[150px] h-[150px] mb-[50px]">
                                  <img
                                    src="/tt-hotel-app.jpeg"
                                    alt="Hotel Lock App"
                                    className="h-40 rounded-xl"
                                  />
                                  <a
                                    href="https://play.google.com/store/apps/details?id=com.sciener.hotela"
                                    download="tt-hotel-app.jpeg"
                                    className="w-full text-center px-4 py-2 bg-gradient-to-r from-[#22598e] to-[#3ca0f0] text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#1b416d] hover:to-[#3392e0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22598e]"

                                  >
                                    Download
                                  </a>
                                </div>
                              )}

                              {group.groupTitle === "Residential Locks" && (
                                <div className="flex flex-col gap-2 w-[150px] h-[150px] mb-[50px]">
                                  <img
                                    src="/smat-life.jpeg"
                                    alt="Residential Lock App"
                                    className="h-40 rounded-xl"
                                  />
                                  <a
                                    href="https://play.google.com/store/apps/details?id=com.tuya.smartlife"
                                    download="smat-life.jpeg"
                                    className="w-full text-center px-4 py-2 bg-gradient-to-r from-[#22598e] to-[#3ca0f0] text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#1b416d] hover:to-[#3392e0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22598e]"

                                  >
                                    Download
                                  </a>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Links */}
                          {group.links.map((link, li) => (
                            <a
                              key={li}
                              href={link.url}
                              className="group flex items-center justify-between bg-white/10 p-4 rounded-2xl border border-white/20 text-white font-medium text-lg hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all"
                            >
                              <span>{link.label}</span>
                              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Non-group links except AMC */}
              {!data[active].groups && data[active].title !== "AMC Subscription Plans" && (
                <div className="space-y-2">

                  {data[active]?.links?.map((link, i) => (
                    <div key={i} className="space-y-2">

                      {/* If TT Hotel software → make it expandable */}
                      {link.label === "TT Hotel software" ? (
                        <>
                          <button
                            onClick={() => toggleLink(i)}
                            className="w-full flex items-center justify-between bg-white/10 p-4 
                         rounded-2xl border border-white/20 text-white font-medium text-lg 
                         hover:bg-white/20 transition-all"
                          >
                            <span>{link.label}</span>
                            <span
                              className={`text-2xl transition-transform duration-300 ${openLink === i ? "rotate-90" : ""
                                }`}
                            >
                              ▶
                            </span>
                          </button>

                          {/* Expandable content → download button */}
                          {openLink === i && (
                            <div className="pl-4 pt-2">
                              <a
                                href="https://tthotel.sciener.com/"
                                download
                                className="w-fit text-center inline-block px-4 py-2 bg-gradient-to-r 
                             from-[#22598e] to-[#3ca0f0] text-white font-semibold 
                             rounded-xl shadow-lg transition duration-300 
                             hover:scale-105 hover:shadow-2xl"
                              >
                                Download
                              </a>
                            </div>
                          )}
                        </>
                      ) : (
                        /* All other links → simple normal link */
                        <a
                          href={link.url}
                          className="group flex items-center justify-between bg-white/10 p-4 
                       rounded-2xl border border-white/20 text-white font-medium text-lg 
                       hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all"
                        >
                          <span>{link.label}</span>
                          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                            →
                          </span>
                        </a>
                      )}

                    </div>
                  ))}

                </div>
              )}



              {/* AMC Section Links */}
              {data[active].title === "AMC Subscription Plans" && (
                <div className="space-y-2">
                  {data[active]?.links?.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="group my-5 flex items-center justify-between bg-white/10 p-4 rounded-2xl border border-white/20 text-white font-medium text-lg hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all"
                    >
                      <span>{link.label}</span>
                      <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </a>
                  ))}

                  {/* AMC download button */}
                  <a
                    href="/amc-pdf/AMC-DOCUMENT.pdf"
                    download
                    className="w-full text-center px-4 py-2 mt-4 bg-gradient-to-r from-[#22598e] to-[#3ca0f0] text-white font-semibold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#1b416d] hover:to-[#3392e0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22598e]"
                  >
                    Download AMC Document
                  </a>
                </div>
              )}

            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
