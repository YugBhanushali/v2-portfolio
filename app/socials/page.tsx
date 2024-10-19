import { Socials } from "@/components/SocialLinkItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socials - Yug Bhanushali",
  description:
    "Connect with me on social media and discover my online presence.",
  openGraph: {
    title: "Socials - Yug Bhanushali",
    description:
      "Connect with me on social media and discover my online presence.",
    url: "https://yugbhanushali.com/socials",
    images: "https://yugbhanushali.com/api/og?type=Socials",
  },
};

export default function SocialLinks() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] p-5 mt-4">
      <Socials />
    </main>
  );
}
