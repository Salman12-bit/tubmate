import React from "react";

export const metadata = {
    title: "Buffstreamz.cyou American Football Matches - Live & Upcoming",
    description:
        "Watch all American Football matches live and upcoming on Buffstreamz. Stream games in HD with advanced filtering for your favorite teams.",
    openGraph: {
        title: "Buffstreamz.cyou American Football Matches - Live & Upcoming",
        description:
            "Watch all American Football matches live and upcoming on Buffstreamz. Stream games in HD with advanced filtering for your favorite teams.",
        url: "https://buffstreamz.cyou/americanfootball",
        images: [
            {
                url: "https://buffstreamz.cyou/images/AmericanFootball.webp",
                width: 1200,
                height: 630,
                alt: "Watch American Football matches live on Buffstreamz in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/americanfootball",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "American Football Live Streams on Buffstreamz",
        "url": "https://buffstreamz.cyou/americanfootball",
        "description":
            "American Football streaming page showing live and upcoming games on Buffstreamz.",
        "about": {
            "@type": "Thing",
            "name": "American Football"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/images/AmericanFootball.webp",
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
