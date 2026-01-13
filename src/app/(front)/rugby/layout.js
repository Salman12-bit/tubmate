import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Rugby Matches - Live & Upcoming",
    description:
        "Watch all Rugby matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreamz.cyou Rugby Matches - Live & Upcoming",
        description:
            "Watch all Rugby matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
        url: "https://buffstreamz.cyou/rugbymatches",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Rugby.webp",
                width: 1200,
                height: 630,
                alt: "Watch Rugby matches live and upcoming on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/rugbymatches",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Rugby Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/rugbymatches",
        "description":
            "Rugby streaming page showing live and upcoming matches on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Rugby"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Rugby.webp",
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
