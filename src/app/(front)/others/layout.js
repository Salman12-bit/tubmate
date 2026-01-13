import React from "react";

export const metadata = {
  title: "Buffstreamz.cyou Other Sports Matches - Live & Upcoming",
  description:
    "Watch all other sports matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite events.",
  openGraph: {
    title: "Buffstreamz.cyou Other Sports Matches - Live & Upcoming",
    description:
      "Watch all other sports matches live and upcoming on Buffstreamz. Stream games in HD with schedule updates and advanced filtering for your favorite events.",
    url: "https://buffstreamz.cyou/othermatches",
    images: [
      {
        url: "https://buffstreamz.cyou/images/Others.webp", 
        width: 1200,
        height: 630,
        alt: "Watch other sports matches live and upcoming on Buffstreamz in HD",
      },
    ],
  },
  alternates: {
    canonical: "https://buffstreamz.cyou/othermatches",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Others Live Streams on Buffstreamz",
    "url": "https://buffstreamz.cyou/othermatches",
    "description":
      "Others streaming page showing live and upcoming matches on Buffstreamz.",
    "about": {
      "@type": "Thing",
      "name": "Others"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Buffstreamz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://buffstreamz.cyou/images/Others.webp",
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
