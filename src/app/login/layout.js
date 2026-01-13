export const metadata = {
    title: "Buffstreamz Login",
    description: "This is the Login page for Buffstreamz.",
    openGraph: {
        title: "Buffstreamz Login",
        description: "Login to access Buffstreamz and start following live sports and streams.",
        url: "https://Buffstreamz.cyou/login", 
        images: [
            {
                url: "https://Buffstreamz.cyou/images/favicon.webp", 
                width: 1200,
                height: 630,
                alt: "Login to Buffstreamz to follow live sports and streams",
            },
        ],
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
