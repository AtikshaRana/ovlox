export interface SupportVideo {
    title: string;
    url: string;
}

export interface SupportContent {
    title: string;
    videoUrl?: string; // Kept for legacy/single video support
    videos?: SupportVideo[];
    posterUrl: string;
    summary: string;
    steps: string[];
}

export const supportData: Record<string, SupportContent> = {
    "handle-issue-free-loose-handle": {
        title: "Handle Issue (Free / Loose Handle)",
        videoUrl: "", // Add actual video URL when available
        posterUrl: "/HardwareIssue.jpg",
        summary: "This guide explains how to fix a loose or free-spinning handle on your Ovlox smart lock. This common issue is usually caused by a loose set screw or internal alignment.",
        steps: [
            "Check the small hex screw on the underside of the handle.",
            "Tighten it using the provided Allen key.",
            "Ensure the internal spindle is correctly aligned with the motor.",
            "Test the handle's resistance and return mechanism."
        ]
    },
    "oshl-03": {
        title: "OSHL-03 Lock Body",
        videoUrl: "/videos/OSHL-03.mp4",
        posterUrl: "/Ovlox-India-OSHL-01-Hotel-Smart-Door-Lock-Silver-Door.png",
        summary: "The OSHL-03 is a premium hotel smart lock. This guide covers setup, battery replacement, and standard troubleshooting for this model.",
        steps: [
            "Locate the battery compartment under the rear panel.",
            "Use 4 high-quality alkaline AA batteries.",
            "Check for the connectivity light on the front panel.",
            "Follow the app pairing instructions to sync with the central system."
        ]
    },
    // Hardware Issues
    "handle-issue-stiff-not-free-handle": {
        title: "Handle Issue (Stiff / Not Free Handle)",
        videoUrl: "",
        posterUrl: "/HardwareIssue.jpg",
        summary: "If your lock handle feels stiff or doesn't return to its original position, follow these maintenance steps.",
        steps: [
            "Inspect the handle for any physical obstructions.",
            "Apply a small amount of lubricant to the handle pivot if necessary.",
            "Check if the handle spring is correctly seated.",
            "Consult the manual if the stiffness persists after cleaning."
        ]
    },
    "how-to-reset-the-pcb": {
        title: "How to Reset the PCB",
        videoUrl: "",
        posterUrl: "/HardwareIssue.jpg",
        summary: "A PCB reset can resolve connectivity or software glitches. Follow these steps to safely reset your lock's internal controller.",
        steps: [
            "Locate the reset button (usually near the battery compartment or on the main PCB).",
            "Press and hold the button for 10 seconds until you hear a beep.",
            "The lock will enter setup mode.",
            "Reconfigure your settings via the mobile app."
        ]
    },
    "pcb-not-working": {
        title: "PCB Not Working",
        videoUrl: "",
        posterUrl: "/HardwareIssue.jpg",
        summary: "Troubleshooting steps for when the lock's main controller (PCB) is unresponsive.",
        steps: [
            "Ensure the batteries are fresh and correctly oriented.",
            "Check the connection cables between the front and back panels.",
            "Look for any signs of moisture or damage on the PCB.",
            "Contact technical support if the board remains dead."
        ]
    },
    // Hotel Locks
    "oshl-01": {
        title: "OSHL-01 Support Guide",
        videos: [
            { title: "OSHL-01 Handle Direction", url: "/videos/OSHL-01.mp4" },
            { title: "OSHL-01 Lock Body", url: "/videos/OSHL01-lock-body.mp4" }
        ],
        posterUrl: "/Ovlox-India-OSHL-01-Hotel-Smart-Door-Lock-Silver-Door.png",
        summary: "Comprehensive guide for the OSHL-01 hotel lock model. This guide covers the main setup and specific lock body installation.",
        steps: [
            "Installation requirements and door prep.",
            "Setting up the hotel management system.",
            "Issuing guest cards and master cards.",
            "Battery maintenance and emergency access."
        ]
    },
    "oshl-04": {
        title: "OSHL-04 Support Guide",
        videoUrl: "/videos/OSHL-04.mp4",
        posterUrl: "/Ovlox-India-OSHL-01-Hotel-Smart-Door-Lock-Silver-Door.png",
        summary: "Step-by-step tutorial for setting up and managing your OSHL-04 digital hotel lock.",
        steps: [
            "Check all components in the OSHL-04 package.",
            "Install the mortise and align the external panels.",
            "Initialize the lock using the management software.",
            "Test card access and manual key override."
        ]
    },
    "oshl-05": {
        title: "OSHL-05 Support Guide",
        videoUrl: "/videos/OSHL-05.mp4",
        posterUrl: "/Ovlox-India-OSHL-01-Hotel-Smart-Door-Lock-Silver-Door.png",
        summary: "Support resources for the OSHL-05 advanced hotel security lock.",
        steps: [
            "Mounting the OSHL-05 on standard hotel doors.",
            "Configuring wireless connectivity (if applicable).",
            "Managing user permissions and audit trails.",
            "Routine maintenance and cleaning tips."
        ]
    },
    "oshl-06": {
        title: "OSHL-06 Support Guide",
        videoUrl: "/videos/OSHL-06.mp4",
        posterUrl: "/Ovlox-India-OSHL-01-Hotel-Smart-Door-Lock-Silver-Door.png",
        summary: "Technical documentation and video tutorials for the OSHL-06 model.",
        steps: [
            "Unboxing and verifying the OSHL-06 kit.",
            "Wiring and battery installation guide.",
            "Syncing with the central management server.",
            "Troubleshooting common access issues."
        ]
    },
    "oshl-07": {
        title: "OSHL-07 Support Guide",
        videoUrl: "/videos/OSHL-07.mp4",
        posterUrl: "/Ovlox-India-OSHL-01-Hotel-Smart-Door-Lock-Silver-Door.png",
        summary: "Official support page for the Ovlox OSHL-07 series hotel locks.",
        steps: [
            "Hardware installation and alignment check.",
            "Software registration and setup.",
            "Emergency power and key usage.",
            "Contact support for OSHL-07 specific queries."
        ]
    },
    // Residential Locks
    "os-103": {
        title: "OS-103 Support Guide",
        videoUrl: "",
        posterUrl: "/HardwareIssue.jpg",
        summary: "Support resources for the OS-103 residential smart lock.",
        steps: [
            "Setting up the OS-103 for home use.",
            "Connecting to the Smart Life app.",
            "Managing family member access.",
            "Battery check and maintenance."
        ]
    },
    "os-104": {
        title: "OS-104 Support Guide",
        videoUrl: "",
        posterUrl: "/HardwareIssue.jpg",
        summary: "Detailed guide for the OS-104 residential model.",
        steps: [
            "Initial setup and fingerprint registration.",
            "Configuring access codes and temporary keys.",
            "App integration and remote unlocking.",
            "Troubleshooting connectivity issues."
        ]
    },
    "os-105": {
        title: "OS-105 Support Guide",
        videoUrl: "",
        posterUrl: "/HardwareIssue.jpg",
        summary: "Comprehensive support for the OS-105 series.",
        steps: [
            "Installation steps for OS-105.",
            "Pairing with your home Wi-Fi/Bluetooth.",
            "Adjusting volume and notification settings.",
            "Manual key usage and emergency access."
        ]
    },
    // More Hardware Issues
    "lock-fitting-issue-door-below-35mm": {
        title: "Lock Fitting Issue (Door Below 35mm)",
        videoUrl: "",
        posterUrl: "/HardwareIssue.jpg",
        summary: "How to handle lock installation on doors with thickness less than 35mm.",
        steps: [
            "Measure the door thickness accurately.",
            "Use the provided spacers to adjust for thinner doors.",
            "Ensure the screws are trimmed correctly if they are too long.",
            "Test the stability of the lock after fitting."
        ]
    },
    "lock-body-rod-fitting-issue": {
        title: "Lock Body Rod Fitting Issue",
        videoUrl: "/videos/OSHL01-lock-body.mp4",
        posterUrl: "/HardwareIssue.jpg",
        summary: "Troubleshooting rod alignment and fitting issues within the lock body.",
        steps: [
            "Identify the rod alignment within the mortise.",
            "Check for any bends or obstructions in the rod path.",
            "Ensure the rod is correctly engaged with the handle mechanism.",
            "Watch the video tutorial for visual alignment tips."
        ]
    },
    "correct-method-for-lock-installation": {
        title: "Correct Method for Lock Installation",
        videoUrl: "",
        posterUrl: "/HardwareIssue.jpg",
        summary: "The standard recommended procedure for installing Ovlox smart locks.",
        steps: [
            "Prepare the door using the provided template.",
            "Install the lock body/mortise first.",
            "Connect the front and back panel wires carefully.",
            "Secure the panels and insert batteries to test."
        ]
    },
    "software-setup-installation": {
        title: "Software Setup & Installation",
        videoUrl: "",
        posterUrl: "/SoftWareRelatedIssues.jpg",
        summary: "Learn how to initialze the Ovlox Smart Life app and connect it to your local network and locks.",
        steps: [
            "Download the Ovlox app from the App Store or Play Store.",
            "Create an account using your email or phone number.",
            "Turn on Bluetooth on your mobile device.",
            "Select 'Add Device' and follow the on-screen pairing steps."
        ]
    },
    "tracking-orders": {
        title: "Tracking Your Orders",
        videoUrl: "",
        posterUrl: "/direction-change.jpg",
        summary: "Need to know where your new smart lock is? Follow this guide to track your shipment from our warehouse to your door.",
        steps: [
            "Check your email for the order confirmation and tracking ID.",
            "Log in to the Ovlox Support Portal.",
            "Enter your Tracking ID in the 'Order Search' field.",
            "Real-time status updates will be displayed."
        ]
    }
};

export const defaultSupportContent: SupportContent = {
    title: "Support Article",
    posterUrl: "/HardwareIssue.jpg",
    summary: "Detailed support information for this topic is currently being prepared. Please check back shortly for full video tutorials and step-by-step guides.",
    steps: [
        "Contact our support team for immediate assistance.",
        "Check the physical manual provided with your device.",
        "Ensure your device has fresh batteries installed."
    ]
};
