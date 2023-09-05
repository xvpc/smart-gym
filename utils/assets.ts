type assetsInfoProps = {
    siteIcon: string,
    cardImage: string,
    bannerImage: string,
    googleMap: string,
    whatsapp1: string,
    whatsapp2: string,
    instagram: string,
    facebook: string,
    email: string,
    site: string,
}
export const assetsInfo: assetsInfoProps = {
    siteIcon: "/images/placeholder2.png",
    cardImage: "/images/placeholder2.png",
    bannerImage: "/images/placeholder2.png",
    googleMap: process.env.NEXT_PUBLIC_GOOGLEMAP_URL as string,
    whatsapp1: process.env.NEXT_PUBLIC_WHATSAPP1 as string,
    whatsapp2: process.env.NEXT_PUBLIC_WHATSAPP2 as string,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM as string,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK as string,
    email: process.env.NEXT_PUBLIC_EMAIL as string,
    site: "localhost",
}
