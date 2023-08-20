import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { PropertyFilterProvider } from "@/services/reducer/propertyFilterContext";

const Dashboard = () => {
    return (
        <PropertyFilterProvider>
            <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home min-h-[100vh] w-full">
                <DashboardLayout />
            </div>
        </PropertyFilterProvider>
    );
};

export default Dashboard;
