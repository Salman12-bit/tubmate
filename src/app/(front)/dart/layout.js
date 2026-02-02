import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Darts Matches - Live & Upcoming",
    description:
        "Watch all Darts matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite players.",
    openGraph: {
        title: "Buffstreamz.cyou Darts Matches - Live & Upcoming",
        description:
            "Watch all Darts matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite players.",
        url: "https://buffstreamz.cyou/dart",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Darts.webp",
                width: 1200,
                height: 630,
                alt: "Watch Darts matches live and upcoming on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/dart",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Darts Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/dart",
        "description":
            "Darts streaming page showing live and upcoming matches on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Darts"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Darts.webp",
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
