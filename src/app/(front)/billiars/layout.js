import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Billiards Matches - Live & Upcoming",
    description:
        "Watch all Billiards matches live and upcoming on Buffstreamz. Stream games in HD with advanced filtering for your favorite players.",
    openGraph: {
        title: "Buffstreamz.cyou Billiards Matches - Live & Upcoming",
        description:
            "Watch all Billiards matches live and upcoming on Buffstreamz. Stream games in HD with advanced filtering for your favorite players.",
        url: "https://buffstreamz.cyou/billiardmatches",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Billiards.webp",
                width: 1200,
                height: 630,
                alt: "Watch Billiards matches live on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/billiardmatches",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Billiards Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/billiardmatches",
        "description":
            "Billiards streaming page showing live and upcoming matches on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Billiards"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Billiards.webp",
                "width": 500,
                "height": 500
            }
        },
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
