import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Football Matches - Live & Upcoming",
    description:
        "Watch all Football matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreamz.cyou Football Matches - Live & Upcoming",
        description:
            "Watch all Football matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite teams.",
        url: "https://buffstreamz.cyou/football",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Football.webp", 
                width: 1200,
                height: 630,
                alt: "Watch Football matches live and upcoming on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/football",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Football Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/football",
        "description":
            "Football streaming page showing live and upcoming matches on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Football"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Football.webp",
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
