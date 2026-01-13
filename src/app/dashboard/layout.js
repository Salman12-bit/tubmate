export const metadata = {
    title: "Buffstreamz Dashboard",
    description: "Access your personal Buffstreamz dashboard. Manage live streams, track favorite sports, and customize your experience.",
    openGraph: {
        title: "Buffstreamz Dashboard",
        description: "Explore your Buffstreamz dashboard to manage live streams, view match updates, and personalize your sports tracking.",
        url: "https://buffstreamz.cyou/dashboard",
        images: [
            {
                url: "https://buffstreamz.cyou/images/favicon.webp", 
                width: 1200,
                height: 630,
                alt: "View your personalized Buffstreamz dashboard to track live sports and matches",
            },
        ],
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
