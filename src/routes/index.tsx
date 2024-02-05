import React from "react";
import { Routes as BrowserRouterRoutes, Route, Outlet } from 'react-router-dom';
import { Dashboard } from "../pages/Dashboard";
import { Repo } from "../pages/Repo";

export const Routes: React.FC = () => {
    return (
        <BrowserRouterRoutes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/repositories" element={<Outlet />}>
                <Route index element={<Repo />} />
            </Route>
        </BrowserRouterRoutes>
    )
};

