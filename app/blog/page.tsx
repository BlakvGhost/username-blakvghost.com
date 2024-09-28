import { Metadata } from "next";
import { BiDetail, BiSolidTime } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";
import { sanityFetch } from "@/lib/sanity.client";
import { PostType } from "@/types";
import { postsQuery } from "@/lib/sanity.query";
import EmptyState from "../components/shared/EmptyState";
import Link from "next/link";
import Image from "next/image";
import { HiCalendar } from "react-icons/hi";
import { formatDate } from "../utils/date";
import { readTime } from "../utils/readTime";
import { toPlainText } from "@portabletext/react";


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
  const posts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["Post"]
  });

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

        {posts.length > 0 ? (
          <section className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
            {posts.reverse().map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post._id}
                className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-primary-bg bg-secondary-bg p-6 rounded-lg border dark:border-zinc-800 border-zinc-200 group"
              >
                <div className="relative lg:w-[450px] lg:h-52 w-full h-56 overflow-clip">
                  <span className="position box-content block overflow-hidden w[initial] h[initial] bg-none inset-0">
                    <Image
                    src={post.coverImage.image}
                    width={300}
                    height={250}
                    quality={100}
                    placeholder={post.coverImage?.lqip ? `blur` : "empty"}
                    blurDataURL={post.coverImage?.lqip || ""}
                    alt={post.coverImage.alt || post.title}
                    className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover group-hover:scale-125 duration-300"
                  />
                  </span>                  
                </div>
                <div className="max-w-lg">
                  <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4">{post.title}</h2>
                  <p className="dark:text-zinc-400 text-zinc-600 text-[0.95rem]">
                    {post.description.slice(0, 150)}
                  </p>
                  <div className="flex items-center gap-x-4 mt-3 text-sm">
                    <div className="flex items-center gap-x-2">
                      <HiCalendar />
                      <time dateTime={post.date ? post.date : post._createdAt}>
                        {post.date
                          ? formatDate(post.date)
                          : formatDate(post._createdAt)}
                      </time>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <BiSolidTime />
                      <div className="">{readTime(toPlainText(post.body))}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState value="Blogs" />
        )}
        <Posts />
      </Slide>
    </main>
  );
}
