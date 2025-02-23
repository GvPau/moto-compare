import {
    AudioWaveform,
    BookOpen,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    ShoppingCart
} from "lucide-react"

export const sidebarItems = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Products",
            url: "#all",
            icon: ShoppingCart,
            isActive: true,
            items: [
                {
                    title: "All Gear",
                    url: "#all",
                },

                {
                    title: "Jackets",
                    url: "#jackets",
                },
                {
                    title: "Helmets",
                    url: "#helmets",
                },
                {
                    title: "Gloves",
                    url: "#gloves",
                },
                {
                    title: "Boots",
                    url: "#boots",
                },
            ],
        },
        {
            title: "Appearance",
            url: "#appearance",
            icon: BookOpen,
            items: [
                {
                    title: "Theme",
                    url: "#theme",
                },
                {
                    title: "Layout Preferences",
                    url: "#layout-preferences",
                },
            ],
        },
        {
            title: "Notifications",
            url: "#notifications",
            icon: AudioWaveform,
            items: [
                {
                    title: "Email",
                    url: "#email",
                },
                {
                    title: "SMS",
                    url: "#sms",
                },
                {
                    title: "Push",
                    url: "#push",
                },
            ],
        },
        {
            title: "Security",
            url: "#security",
            icon: Command,
            items: [
                {
                    title: "Change Password",
                    url: "#change-password",
                },
                {
                    title: "Data Privacy & GDPR",
                    url: "#data-privacy",
                },
            ],
        },
        {
            title: "Billing",
            url: "#billing",
            icon: PieChart,
            items: [
                {
                    title: "Subscriptions",
                    url: "#subscriptions",
                },
                {
                    title: "Payment Methods",
                    url: "#payment-methods",
                },
                {
                    title: "Addresses",
                    url: "#addresses",
                },
            ]
        },
        {
            title: "Account Settings",
            url: "#account-settings",
            icon: Settings2,
            items: [
                {
                    title: "Profile",
                    url: "#profile",
                },
                {
                    title: "Order History",
                    url: "#order-history",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#design-engineering",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#sales-marketing",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#travel",
            icon: Map,
        },
    ],
};