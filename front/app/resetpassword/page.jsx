"use client";

import PageResetPassword from "@/components/Auth/ResetPassword/PageResetPassword";
import Header from "@/components/Include/_header";
import PolygonClipPath from "@/components/PolygonClippath";

const ResetPasswordPage = () => {
    return (
        <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
            <Header />
            <PolygonClipPath />
            <PageResetPassword />
        </div>
    );
};

export default ResetPasswordPage;
