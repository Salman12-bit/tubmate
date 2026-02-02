import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Baseball Matches - Live & Upcoming",
    description:
        "Watch all Baseball matches live and upcoming on Buffstreamz. Stream games in HD with advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreamz.cyou Baseball Matches - Live & Upcoming",
        description:
            "Watch all Baseball matches live and upcoming on Buffstreamz. Stream games in HD with advanced filtering for your favorite teams.",
        url: "https://buffstreamz.cyou/baseball",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Baseball.webp",
                width: 1200,
                height: 630,
                alt: "Watch Baseball matches live on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/baseball",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Baseball Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/baseball",
        "description":
            "Baseball streaming page showing live and upcoming games on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Baseball"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Baseball.webp",
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
