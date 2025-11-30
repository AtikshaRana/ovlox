// "use client";
// import { useState } from "react";
// import { QRCodeSVG } from "qrcode.react";

// export default function FAQAccordion() {
//   const data = [
//     { title: "Group 1", content: "Details for group 1" },
//     { title: "Group 2", content: "Details for group 2" },
//     { title: "Group 3", content: "Details for group 3" },
//   ];

//   const [open, setOpen] = useState(null);
//   const [images, setImages] = useState({});

//   const handleImageUpload = (e, index) => {
//     const file = e.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setImages((prev) => ({ ...prev, [index]: url }));
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {data.map((item, i) => (
//         <div key={i} className="border rounded-lg p-4 bg-white">
//           {/* Accordion Header */}
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => setOpen(open === i ? null : i)}
//           >
//             <h3 className="text-lg font-semibold">{item.title}</h3>

//             {/* Arrow */}
//             <span
//               className={`transform transition-all ${
//                 open === i ? "rotate-180" : "rotate-0"
//               }`}
//             >
//               ▼
//             </span>
//           </div>

//           {/* Accordion Body */}
//           {open === i && (
//             <div className="mt-4 space-y-3">
//               <p>{item.content}</p>

//               {/* Image Upload */}
//               <div className="space-y-2">
//                 <label className="font-medium">Upload Image:</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleImageUpload(e, i)}
//                 />

//                 {/* Uploaded Image Preview */}
//                 {images[i] && (
//                   <img
//                     src={images[i]}
//                     alt="Uploaded"
//                     className="w-32 h-32 object-cover rounded border"
//                   />
//                 )}
//               </div>

//               {/* QR Code Based on Group Title */}
//               <div className="mt-3">
//                 <label className="font-medium">QR Code for this group:</label>
//                 <QRCodeSVG value={item.title} size={120} />
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
