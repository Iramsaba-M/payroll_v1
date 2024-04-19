
import Button from "../configurations/Button/Button.jsx";
import IconbarComponent from "../configurations/Iconbar/IconbarComponent";
import IconConfig from "../configurations/Iconbar/IconConfig.jsx"
import routesConfig from "../routing/RoutingConfig.jsx";
import LogoConfig from "../configurations/logo/LogoConfig.jsx";
import HeadConfi from "../configurations/Header/HeadConfi";
import HeadComponents from "../configurations/Header/HeadComponents.jsx";
import Iconbar from "../configurations/Iconbar/Iconbar.jsx";
import ButtonConfig from "../configurations/Button/ButtonConfig.jsx";
import Header from "../configurations/Header/Header.jsx"
import ApplicationSearch from "../configurations/applicationsearch/ApplicationSearch.jsx";
import RoutesComponent from "../routing/RoutesComponent.jsx";

export const componentMapping = {
  HeadComponents,
  Header,
  ApplicationSearch,
  HeadConfi,
  RoutesComponent,

  Button,
  ButtonConfig,
  LogoConfig,

  Iconbar,
  IconbarComponent,
  IconConfig,
  routesConfig,

};
export const routingConfig = routesConfig

export const sections = {
  section1: [

    {
      componentKey: "IconbarComponent",
      style: "w-14 border-r border-gray-200",
      config: IconConfig,
      content: [
        {
          componentKey: "LogoConfig",
          style: "flex"
        },

      ],
    },
    {
      componentKey: "RoutesComponent",
      style: " flex w-60 border-r border-gray-200",
      config: routesConfig,
    },
    {
      componentKey: "HeadComponents",
      style: "w-full h-12 border-b-gray-50 text-gray-600 text-sm ",
      content: [
        {
          componentKey: "ApplicationSearch",
          config: HeadConfi,

        },

      ]
    },

  ],

};
