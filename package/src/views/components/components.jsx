import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import AreasDePractica from "../custom-components/sections/areasdepractica.jsx";
import Litigio from "../custom-components/sections/litigio.jsx";
import SocioFundador from "../custom-components/sections/sociofundador.jsx";


const Components = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <SocioFundador />
                    <AreasDePractica />
                    <Litigio />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
