import React from 'react';

export const metadata = {
    title: "Buffstreamz: Free HD Live NFL, NBA, UFC & WWE Streaming",
    description:
        "Stream live sports in HD for free on Buffstreamz! Watch NFL, NBA, UFC, WWE, Soccer, Boxing & more with a smooth, user-friendly interface.",
    openGraph: {
        title: "Buffstreamz: Free HD Live NFL, NBA, UFC & WWE Streaming",
        description:
            "Stream live sports in HD for free on Buffstreamz! Watch NFL, NBA, UFC, WWE, Soccer, Boxing & more with a smooth, user-friendly interface.",
        url: "https://buffstreamz.cyou/",
        images: [
            {
                url: "https://buffstreamz.cyou/images/preview.jpg",
                width: 1200,
                height: 630,
                alt: "Buffstreamz - Watch NFL, NBA, UFC, WWE live in HD",
            },
        ],
    },
    alternates: {
        canonical: "https://buffstreamz.cyou/",
    },
};

export default function Layout({ children }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Buffstreamz: Free HD Live NFL, NBA, UFC & WWE Streaming",
        "url": "https://buffstreamz.cyou/",
        "description":
            "Stream live sports in HD for free on Buffstreamz! Watch NFL, NBA, UFC, WWE, Soccer, Boxing & more with a smooth, user-friendly interface.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://buffstreamz.cyou/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Buffstreamz",
            "logo": {
                "@type": "ImageObject",
                "url": "https://buffstreamz.cyou/favicon.webp",
                "width": 500,
                "height": 500,
            },
        },
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://buffstreamz.cyou/images/preview.jpg",
            "width": 1200,
            "height": 630,
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
