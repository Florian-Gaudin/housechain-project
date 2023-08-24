"use client";
import PageRegister from "@/components/Auth/Register/PageRegister";
import Header from "@/components/Include/_header";
import PolygonClipPath from "@/components/PolygonClippath";

const RegisterPage = () => {
    return (
        <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
            <Header />
            <PolygonClipPath />
            <PageRegister />
        </div>
    );
};

export default RegisterPage;
