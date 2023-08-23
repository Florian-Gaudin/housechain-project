import "../../styles/components/_homepageHeader.scss";
import About from "@/components/Homepage/About";
import Properties from "@/components/Homepage/Properties";
import Services from "@/components/Homepage/Services";
import Welcome from "@/components/Homepage/Welcome";
import Footer from "@/components/Include/_footer";
import PolygonClipPath from "@/components/PolygonClippath";

const Home = () => {
    return (
        <div className="bg-bg relative isolate pt-14 bg-fixed bg-center bg-cover bg-no-repeat bg-home w-full">
            <PolygonClipPath />
            <section
                id="welcome"
                className="mx-auto py-32 sm:py-48 lg:py-56 min-h-[100vh] relative"
            >
                <Welcome />
            </section>

            <section id="about" className="mx-auto py-16 bg-white/70">
                <About />
            </section>
            <section
                id="properties"
                className="mx-auto py-16 lg:py-16  min-h-[100vh]"
            >
                <Properties />
            </section>
            <section id="actuality" className="mx-auto min-h-[100vh]">
                <Services />
            </section>
            <Footer />
        </div>
    );
};
export default Home;
