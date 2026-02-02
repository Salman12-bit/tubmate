import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Fight Matches - Live & Upcoming",
    description:
        "Watch all Fight matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite fighters.",
    openGraph: {
        title: "Buffstreamz.cyou Fight Matches - Live & Upcoming",
        description:
            "Watch all Fight matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite fighters.",
        url: "https://buffstreamz.cyou/fight",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Fight.webp",
                width: 1200,
                height: 630,
                alt: "Watch Fight matches live and upcoming on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/fight",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Fight Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/fight",
        "description":
            "Fight streaming page showing live and upcoming matches on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Fight"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Fight.webp",
                "width": 500,
                "height": 500
            }
        }
    };

    return (
        <>
            {children}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
        </>
    );
}
