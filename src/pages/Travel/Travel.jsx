
import React from 'react';

// import MainLayout from '../../layouts/MainLayout';
import { routes } from '../../utils/routes';
import MapCustom from '../../components/modules/FormSuggest/MapCustom/MapCustom';
import Suggestions from '../../components/modules/FormSuggest/Suggestions/Suggestions';
import './Travel.scss'


const Travel = () => {
    return (
        <div className="travel-suggestion">
        <div className="form-suggest">
            <Suggestions/>
        </div>
        <div className="form-maps">
            <MapCustom/>
        </div>
    </div>
    );
}

Travel.options = {
    // layout: MainLayout,
    route: routes.TRAVEL,
  };

export default Travel