import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou Tennis Matches - Live & Upcoming",
    description:
        "Watch all Tennis matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite players.",
    openGraph: {
        title: "Buffstreamz.cyou Tennis Matches - Live & Upcoming",
        description:
            "Watch all Tennis matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite players.",
        url: "https://buffstreamz.cyou/tennismatches",
        images: [
            {
                url: "https://buffstreamz.cyou/images/Tennis.webp",
                width: 1200,
                height: 630,
                alt: "Watch Tennis matches live and upcoming on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/tennismatches",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Tennis Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/tennismatches",
        "description":
            "Tennis streaming page showing live and upcoming matches on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Tennis"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/Tennis.webp",
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
