import PageContact from "@/components/Contact/PageContact";
import Header from "@/components/Include/_header";
import PolygonClipPath from "@/components/PolygonClippath";

const Contact = () => {
    return (
        <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
            <Header />
            <PolygonClipPath />
            <PageContact />
        </div>
    );
};

export default Contact;
