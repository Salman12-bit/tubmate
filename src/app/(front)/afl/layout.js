import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou AFL Matches - Live & Upcoming Games",
    description:
        "Watch all AFL matches live, upcoming, and 24/7 on Buffstreamz. Enjoy HD streaming, schedule updates, and advanced filtering for your favorite teams and players.",
    openGraph: {
        title: "Buffstreamz.cyou AFL Matches - Live & Upcoming Games",
        description:
            "Watch all AFL matches live, upcoming, and 24/7 on Buffstreamz. Enjoy HD streaming, schedule updates, and advanced filtering for your favorite teams and players.",
        url: "https://buffstreamz.cyou/aflmatches",
        images: [
            {
                url: "https://buffstreamz.cyou/images/AFL.webp",
                width: 1200,
                height: 630,
                alt: "Watch AFL matches live and upcoming on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/aflmatches",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "AFL Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/aflmatches",
        "description":
            "AFL streaming page showing live and upcoming Australian Football League games on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "Australian Football League"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/AFL.webp",
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
