/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/pages/auth/AuthPage`, `src/pages/home/HomePage`).
 */
import React, { Suspense } from "react";
import { DefaultRootState, shallowEqual, useSelector } from "react-redux";
// import { useLastLocation } from "react-router-last-location";
import * as routerHelpers from "./RouterHelpers";
import { publicRoutes } from './RoutesConfig';
import { LayoutContextProvider, LayoutSplashScreen } from "../components";
import Layout from "../components/layout/Layout";
import { Route, Navigate, Routes as MadeRoutes, useLocation, useNavigate } from 'react-router-dom';
import { useLastLocation } from "react-router-last-location";

export const Routes = () => {

const location =  useLocation();
// const nav = useNavigate()
console.log(location, )

    // const lastLocation = useLastLocation();
// console.log(lastLocation)
    routerHelpers.saveLastLocation('asdas');
    const { menuConfig, userLastLocation } = useSelector(
        (menuConfig: DefaultRootState) => ({
            menuConfig,
            userLastLocation: routerHelpers.getLastLocation()
        }),
        shallowEqual
    );

    return (       

        /* Create `LayoutContext` from current `history` and `menuConfig`. */
        <LayoutContextProvider history={location} menuConfig={menuConfig}>
            <Layout
                contentContainerClasses={undefined}
                contentClasses={undefined}>
                <Suspense fallback={<LayoutSplashScreen />}>
                    <MadeRoutes>
                        {publicRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <route.component />}
                            />
                        ))}
                        {/* <Navigate to="/error/error-v1" /> */}
                    </MadeRoutes>
                </Suspense>
            </Layout>
        </LayoutContextProvider>
    );
}
