import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Basketball Matches - Live & Upcoming",
    description:
        "Watch all Basketball matches live and upcoming on Buffstreamz. Stream games in HD with advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreamz.cyou Basketball Matches - Live & Upcoming",
        description:
            "Watch all Basketball matches live and upcoming on Buffstreamz. Stream games in HD with advanced filtering for your favorite teams.",
        url: "https://buffstreamz.cyou/basketballmatches",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Basketball.webp",
                width: 1200,
                height: 630,
                alt: "Watch Basketball matches live on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/basketballmatches",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Basketball Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/basketballmatches",
        "description":
            "Basketball streaming page showing live and upcoming games on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Basketball"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Basketball.webp",
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
