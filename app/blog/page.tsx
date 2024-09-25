import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Blog | Kabirou ALASSANE",
  metadataBase: new URL("https://username-blakvghost.com/blog"),
  description: "Read latest stories from Kabirou ALASSANE's Blog",
  openGraph: {
    title: "Blog | Kabirou ALASSANE",
    url: "https://username-blakvghost.com/blog",
    description: "Read latest stories from Kabirou ALASSANE's Blog",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/blog.png",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Bienvenue sur mon blog où je partage des histoires personnelles sur des choses que j'ai apprises, des projets sur lesquels je travaille et des découvertes générales. J'écris également pour d'autres publications."
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explorez tout</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
