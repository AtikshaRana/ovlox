export interface SupportContent {
    title: string;
    videoUrl?: string;
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
        title: "OSHL-03 Support Guide",
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
