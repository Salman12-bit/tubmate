export const metadata = {
    title: "Buffstreamz SignUp",
    description: "This is the SignUp page for Buffstreamz.",
    openGraph: {
        title: "Buffstreamz SignUp",
        description: "SignUp to access Buffstreamz and start following live sports and streams.",
        url: "https://buffstreamz.cyou/signup", 
        images: [
            {
                url: "https://buffstreamz.cyou/images/favicon.webp", 
                width: 1200,
                height: 630,
                alt: "SignUp to Buffstreamz to follow live sports and streams",
            },
        ],
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
