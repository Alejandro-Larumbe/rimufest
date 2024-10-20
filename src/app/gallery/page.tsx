import { PageHero } from "~/components/PageHero/PageHero";
import { Gallery as GalleryComponent } from "../../components/Gallery";
import { gallery } from "./gallery";

const Gallery = () => {
  return (
    <>
      <PageHero title={"Gallery"} image={"/gallery.jpeg"} />
      <div className="w-screen p-6 md:p-8">
        {gallery.map(({ photos, title }) => (
          <GalleryComponent key={title} title={title} photos={photos} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
