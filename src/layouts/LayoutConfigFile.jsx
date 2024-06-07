
import Button from "../configurations/Button/Button.jsx";
import IconbarComponent from "../configurations/Iconbar/IconbarComponent";
import IconConfig from "../configurations/Iconbar/IconConfig.jsx"
import routesConfig from "../routing/RoutingConfig.jsx";
import LogoConfig from "../configurations/logo/LogoConfig.jsx";
import HeadConfi from "../configurations/Header/HeadConfi";
import HeadComponents from "../configurations/Header/HeaderComponents.jsx";
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
      style: " border-r  min-h-screen fixed start-0 w-14",
      config: IconConfig,
      content: [
        {
          componentKey: "LogoConfig",
          style: "flex "
        },
      ],
    },
    {
      componentKey: "RoutesComponent",
      style: "  ",
      config: routesConfig,
    },
    {
      componentKey: "HeadComponents",
      style: "min-w-[167vh]  h-12 border-b-gray-50 text-gray-600 text-sm fixed ml-[15.8%]",//start-[19.6%] 72
      content: [
        {
          componentKey: "ApplicationSearch",
          config: HeadConfi,

        },
      ]
    },
  ],
};
