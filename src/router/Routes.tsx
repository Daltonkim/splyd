import React, { Suspense } from "react";
import { DefaultRootState, shallowEqual, useSelector } from "react-redux";
import * as routerHelpers from "./RouterHelpers";
import { publicRoutes } from './RoutesConfig';
import { LayoutContextProvider, LayoutSplashScreen } from "../components";
import Layout from "../components/layout/Layout";
import { Route, Routes as MadeRoutes, useLocation } from 'react-router-dom';

export const Routes = () => {

const location =  useLocation();
// const nav = useNavigate()
console.log(location, )

    // const lastLocation = useLastLocation();
// console.log(lastLocation)
    routerHelpers.saveLastLocation('asdas');
    const { menuConfig } = useSelector(
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
