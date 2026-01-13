import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Hockey Matches - Live & Upcoming",
    description:
        "Watch all Hockey matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreamz.cyou Hockey Matches - Live & Upcoming",
        description:
            "Watch all Hockey matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
        url: "https://buffstreamz.cyou/hockeymatches",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Hockey.webp", 
                width: 1200,
                height: 630,
                alt: "Watch Hockey matches live and upcoming on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/hockeymatches",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Hockey Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/hockeymatches",
        "description":
            "Hockey streaming page showing live and upcoming matches on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Hockey"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Hockey.webp",
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
