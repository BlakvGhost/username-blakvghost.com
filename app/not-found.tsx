import { Metadata } from "next";
import NotFoundComponent from "./components/shared/NotFound";

export const metadata: Metadata = {
  title: "Error 404",
};

export default function NotFound() {
  return (
    <NotFoundComponent
      title="Error 404!"
      description="Oups ! Cette page n'existe pas sur username-blakvghost.com. Pendant que vous êtes ici, vous pouvez lire quelques articles en vedette ci-dessous."
    />
  );
}
