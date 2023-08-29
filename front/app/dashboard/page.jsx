"use client";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { PropertyFilterProvider } from "@/services/reducer/propertyFilterContext";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../services/reducer";
import { Provider } from "react-redux";

const Dashboard = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
    });
    return (
        <Provider store={store}>
            <PropertyFilterProvider>
                <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home min-h-[100vh] w-full">
                    <DashboardLayout />
                </div>
            </PropertyFilterProvider>
        </Provider>
    );
};

export default Dashboard;
