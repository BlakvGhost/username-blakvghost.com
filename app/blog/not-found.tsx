import { Metadata } from "next";
import NotFoundComponent from "../components/shared/NotFound";

export const metadata: Metadata = {
  title: "Post Not Found",
};

export default function PostNotFound() {
  return (
    <NotFoundComponent
      title="Post Not Found"
      description="Vous avez réussi à accéder à un article qui n'existe probablement pas ou n'a jamais existé sur ce site. Veuillez retourner à la page d'accueil ou lire les articles présentés ci-dessous."
    />
  );
}
