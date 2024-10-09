import React, { ReactNode } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Outlet,
} from "react-router-dom";

import { AuthProvider } from "./auth";
import Login from "../pages/users/login";
import Register from "../pages/users/register";
import Dashboard from "../pages/dashboards";
import NotFound from "../pages/notfound";

// interface PropsRouter {
//     children: ReactNode
// }

// Public Route Wrapper ( hanya untuk access yang sudah authenticate )
const PrivateRoute = () => {
    return AuthProvider.isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}

// Public Route Wrapper ( hanya untuk access yang tidak authenticate )
const PublicRoute = () => {
    return AuthProvider.isAuthenticated() ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default function RouterApp() {
    return(
        <>
            <Router>
                <Routes>
                    <Route element={<PublicRoute />}>

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    <Route element={<PublicRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    )
}