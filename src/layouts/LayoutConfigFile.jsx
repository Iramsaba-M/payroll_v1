
import Button from "../configurations/Button/Button.jsx";
import IconbarComponent from "../configurations/Iconbar/IconbarComponent";
import IconConfig from "../configurations/Iconbar/IconConfig.jsx"
import routesConfig from "../routing/RoutingConfig.jsx";
import LogoConfig from "../configurations/logo/LogoConfig.jsx";
import HeadConfi from "../configurations/Header/HeadConfi";
import HeaderComponents from "../configurations/Header/HeaderComponents.jsx";
import ButtonConfig from "../configurations/Button/ButtonConfig.jsx";
import ApplicationSearch from "../configurations/applicationsearch/ApplicationSearch.jsx";
import RoutesComponent from "../routing/RoutesComponent.jsx";

export const componentMapping = {
  HeaderComponents,
  ApplicationSearch,
  HeadConfi,
  RoutesComponent,
  Button,
  ButtonConfig,
  LogoConfig,
  IconbarComponent,
  IconConfig,
  routesConfig,

};

export const routingConfig = routesConfig

export const sections = {
  section1: [
    {
      componentKey: "IconbarComponent",
      style: " min-h-screen  fixed start-0 ",
      config: IconConfig,
      content: [
        {
          componentKey: "LogoConfig",
          style: "flex bg-red-600 "
        },
      ],
    },
    {
      componentKey: "RoutesComponent",
      style: "  -ml-4 ",
      config: routesConfig,
    },
    {
      componentKey: "HeaderComponents",
      style: "  min-w-[178vh]      fixed ml-[10.4%]",//start-[19.6%] 72
      content: [
        {
          componentKey: "ApplicationSearch",
          config: HeadConfi,

        },
      ]
    },
  ],
};


