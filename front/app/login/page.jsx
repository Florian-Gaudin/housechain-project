"use client";
import PageLogin from "@/components/Auth/Login/PageLogin";
import Header from "@/components/Include/_header";
import PolygonClipPath from "@/components/PolygonClippath";

const LoginPage = () => {
    return (
        <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
            <Header />
            <PolygonClipPath />
            <PageLogin />
        </div>
    );
};

export default LoginPage;
