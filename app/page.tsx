
import Slider from "./components/Carousel";
import ClientLogoSlider from "./components/ClientLogoSlider";
import ProjectGallery from "./components/ProjectGallery";
import ViewBlogs from "./components/ViewBlogs";
import PromotionalBanner from "./components/PromotionalBanner";
import PrimeLocationsPage from "./components/PrimeLocations";
export default function Home() {
  return (
    <>
      <Slider />
      <ProjectGallery />
      <PromotionalBanner/>
      <ViewBlogs />
      <PrimeLocationsPage/>
      <ClientLogoSlider />
    </>
  );
}
