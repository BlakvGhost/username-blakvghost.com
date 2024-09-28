"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";
import { giscusRepoId, giscusCategoryId } from "@/lib/env.api";

export default function Comments() {
  const theme = useTheme();
  const giscusTheme =
    theme.theme === "light"
      ? "light"
      : theme.theme === "dark"
      ? "transparent_dark"
      : "dark";

  return (
    <Giscus
      id="comments"
      repo="BlakvGhost/username-blakvghost.com"
      repoId={giscusRepoId}
      category="Announcements"
      categoryId="general"
      mapping="title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={giscusTheme}
      lang="en"
      loading="lazy"
    />
  );
}
