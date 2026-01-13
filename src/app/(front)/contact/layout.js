export const metadata = {
    title: "Contact Us - Buffstreamz",
    description: "Get in touch with the Buffstreamz team. Reach out for support, inquiries, and feedback.",
    openGraph: {
        title: "Contact Us - BuffStream",
        description: "Have questions or need assistance? Contact the Buffstreamz team for support, inquiries, and feedback.",
        url: "https://buffstreamz.cyou/contactus",
        images: [
            {
                url: "https://buffstreamz.cyou/images/buffstream-contact.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Buffstreamz for support and inquiries",
            },
        ],
    },
};

export default function Layout({ children }) {
    return <>{children}</>;
}
