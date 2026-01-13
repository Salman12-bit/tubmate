import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Motorsports Matches - Live & Upcoming",
    description:
        "Watch all Motorsports events live and upcoming on Buffstreamz. Stream races in HD with schedule updates and advanced filtering for your favorite drivers and teams.",
    openGraph: {
        title: "Buffstreamz.cyou Motorsports Matches - Live & Upcoming",
        description:
            "Watch all Motorsports events live and upcoming on Buffstreamz. Stream races in HD with schedule updates and advanced filtering for your favorite drivers and teams.",
        url: "https://buffstreamz.cyou/motorsportmatches",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Motorsports.webp", 
                width: 1200,
                height: 630,
                alt: "Watch Motorsports events live and upcoming on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/motorsportmatches",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Motor Sports Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/motorsportmatches",
        "description":
            "Motor Sports streaming page showing live and upcoming matches on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Motor Sports"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Motorsports.webp",
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
