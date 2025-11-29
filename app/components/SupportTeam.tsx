"use client";
import Image from "next/image";

const teamMembers = [
    {
        name: "Deependra Singh Rana",
        role: "Technical Support Specialist",
        email: "deependra@ovloxindia.com",
        photo: "/team/Deependra.jpg",
    },
    {
        name: "Akash Kumar",
        role: "Customer Support Lead",
        email: "akash@ovloxindia.com",
        photo: "/team/Akash.jpg",
    },
    {
        name: "Ankan Sharma",
        role: "Technical Support Specialist",
        email: "ankan@ovloxindia.com",
        photo: "/team/Ankan.jpg",
    },
    {
        name: "Anuj Pratap Singh",
        role: "Customer Success Manager",
        email: "anuj@ovloxindia.com",
        photo: "/team/Anuj.jpg",
    },

    {
        name: "Harsh Kumar",
        role: "Customer Success Manager",
        email: "harsh@ovloxindia.com",
        photo: "/team/Harsh.jpg",
    },
    // Add more members here
];

export default function SupportTeam() {
    return (
        <section className="bg-gradient-to-b from-[#101828] to-[#8cdff4]">
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 opacity-80"></div>
      
          <h1 className="text-4xl font-bold text-center mb-[60px]! text-white">Our Support Team</h1>
      
          {/* Flex container with wrap */}
          <div className="flex flex-wrap justify-center gap-5">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative w-full sm:w-[45%] md:w-[30%] rounded-xl overflow-hidden shadow-2xl 
                           transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-blue-400/50 group"
              >
                {/* Image */}
                <div className="relative h-[435px] w-full">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
      
                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-[50%] 
                                bg-gradient-to-t from-[#101828]/90 via-[#101828]/70 to-transparent
                                flex flex-col justify-center items-center text-center
                                translate-y-0 md:translate-y-full md:group-hover:translate-y-0
                                transition-transform duration-500 px-4 py-3">
                  <h3 className="text-xl font-semibold text-white mt-2 mb-1">{member.name}</h3>
                  <p className="text-blue-100 mb-1">{member.role}</p>
                  <p className="text-blue-50 text-sm">{member.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    );
}
