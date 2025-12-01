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


  const data = [
    {
      title: "Hardware Issues & Repairs",
      image: "/HardwareIssue.jpg",
      links: [
        { label: "Handle Issue (Free / Loose Handle)", url: "/track-orders" },
        { label: "Handle Issue (Stiff / Not Free Handle)", url: "/repair-policy" },
        { label: "How to Reset the PCB", url: "/maintenance-schedule" },
        { label: "PCB Not Working", url: "/track-orders" },
        { label: "Lock Fitting Issue (Door Below 35mm)", url: "/repair-policy" },
        { label: "Lock Body Rod Fitting Issue", url: "/maintenance-schedule" },
        { label: "Correct Method for Lock Installation", url: "/maintenance-schedule" },
      ],
    },
    {
      title: "Directional Related Problems",
      image: "/direction-change.jpg",
      groups: [
        {
          groupTitle: "Hotel Locks",
          links: [
            { label: "OSHL-01", url: "/installation-guide" },
            { label: "OSHL-03", url: "/adjustment-tips" },
            { label: "OSHL-04", url: "/troubleshooting" },
            { label: "OSHL-05", url: "/troubleshooting" },
            { label: "OSHL-06", url: "/troubleshooting" },
            { label: "OSHL-07", url: "/troubleshooting" },
          ],
        },
        {
          groupTitle: "Residential Locks",
          links: [
            { label: "OS-103", url: "/adjustment-tips" },
            { label: "OS-104", url: "/troubleshooting" },
            { label: "OS-105", url: "/troubleshooting" },
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
            { label: "Guide to App Access", url: "/installation-guide" },
            { label: "Guide to Activating Locks", url: "/installation-guide" },
          ],
        },
        {
          groupTitle: "Residential Locks",
          links: [
            { label: "Guide to App Access", url: "/installation-guide" },
            { label: "Guide to Activating Locks", url: "/installation-guide" },
          ],
        },
      ],
    },
    {
      title: "Software & Firmware Issues",
      image: "/SoftWareRelatedIssues.jpg",
      links: [
        { label: "TT Hotel software", url: "/firmware-update" },
        { label: "Software Assitance", url: "/firmware-update" },
      ],
    },
    {
      title: "AMC Subscription Plans",
      image: "/AMC.jpg",
      links: [
        { label: "1-Month Plan – Starting at ₹999/month", url: "/subscription-plans" },
        { label: "3-Month Plan – Starting at ₹833/month", url: "/coverage-details" },
        { label: "6-Month Plan – Starting at ₹666/month", url: "/how-to-enroll" },
        { label: "12-Month Plan – Starting at ₹583/month", url: "/how-to-enroll" },
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
                    href="/AMCPLANS.docx"
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
