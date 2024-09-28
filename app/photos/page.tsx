import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";

const YOUTUBE_API_KEY = "TA_CLE_API_YOUTUBE";
const CHANNEL_ID = "ID_DE_TA_CHAINE_YOUTUBE";

export const metadata: Metadata = {
  title: "YouTube Vidéos | Kabirou ALASSANE",
  metadataBase: new URL("https://username-blakvghost.com/photos"),
  description: "Explore youtube videos published by Kabirou ALASSANE",
  openGraph: {
    title: "YouTube Vidéos | Kabirou ALASSANE",
    url: "https://username-blakvghost.com/photos",
    description: "Explore youtube videos published by Kabirou ALASSANE",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692635149/victoreke/photos.png",
  },
};

export default async function Photos() {

  async function fetchVideos() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
      );
      const data = await response.json();
      const videoItems = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
      }));

      return videoItems;

    } catch (error) {
      console.error("Erreur lors de la récupération des vidéos : ", error);
    }
  }

  const videos: { thumbnail: string, title: string, id: number }[] = await fetchVideos();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Vidéos YouTube"
        description="Liste des vidéos YouTube que j'ai déjà publiées sur ma chaîne"
      />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {videos?.length > 0 ? (
            videos?.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={350}
                  height={200}
                  className="dark:bg-primary-bg bg-secondary-bg"
                />
                <p className="mt-2 text-center">{video.title}</p>
              </a>
            ))
          ) : (
            <p>Chargement des vidéos...</p>
          )}
        </Slide>
      </figure>
    </main>
  );
}
