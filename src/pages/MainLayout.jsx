import React from "react";
import { Routes, Route } from "react-router-dom";

import ROUTES from '../constants/routes';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from './Home';
import About from './About';
import Somethings from "./Somethings";
import Something from "./Something";
import NotFound from "./NotFound";

const MainLayout = () => {
    return (
        <div>
            <Header />

            <Routes>
                <Route path={ROUTES.HOME()} element={<Home />} />

                <Route path={ROUTES.SOMETHINGS()} element={<Somethings />} />

                <Route path={ROUTES.SOMETHING()} element={<Something />} />

                <Route path={ROUTES.ABOUT()} element={<About />} />

                <Route path={ROUTES.NOT_FOUND()} element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default MainLayout;