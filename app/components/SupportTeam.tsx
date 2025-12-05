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
        photo: "/team/AkashKumar.jpg",
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
    {
      name: "Pushpendra Singh",
      role: "Customer Success Manager",
      email: "pushpendra@ovloxindia.com",
      photo: "/team/pushpendra.jpg",
    },
    // Add more members here
];

export default function SupportTeam() {
    return (
        <section className="bg-gradient-to-b from-[#101828] to-[#8cdff4]">
        <div className="container">
          {/* Background Gradient */}
          <div className="absolute inset-0 -z-10"></div>
      
          <h1 className="text-4xl font-bold text-center mb-[60px]! text-white">Our Support Team</h1>
      
          {/* Flex container with wrap */}
          <div className="flex flex-wrap justify-center w-[calc(100%+20px)] ml-[-10px]">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative w-full  mx-[10px] sm:w-[45%]  md:w-[calc(33.33%-20px)] rounded-xl overflow-hidden shadow-2xl 
                           transform transition-transform duration-500  hover:shadow-blue-400/50 group mb-[20px]  "
              >
                {/* Image */}
                <div className="relative h-[350px] xl:h-[450px]  w-full">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
      
                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-[50%] 
                                bg-gradient-to-t from-[#101828]/90 via-[#101828]/70 to-transparent
                                flex flex-col justify-center items-center text-center
                                translate-y-0 md:translate-y-full md:group-hover:translate-y-0
                                transition-transform duration-500 px-4 py-3">
                  <h4 className="font-semibold text-white !my-[10px] ">{member.name}</h4>
                  <p className="text-blue-100 !mb-[10px]">{member.role}</p>
                  <p className="text-blue-50 text-sm">{member.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    );
}
