// import Head from '../Configurations/Head/Head';
// import Iconbar from '../Configurations/Iconbar/Iconbar'
// import routesConfig from '../Routing/RoutingConfig'
// import HeadConfi from './HeadConfi'

// import { Routes, Route, useLocation } from 'react-router-dom'

// const Layout = () => {
//   const renderRoutes = (routes) => {
//     return routes.map((route) => (
//       <Route key={route.path} path={route.path} element={route.element} index={route.index}>
//         {route.children && renderRoutes(route.children)}
//       </Route>
//     ))
//   };

//   const location = useLocation();
//   const currentPath = location.pathname;

//   return (
//     <>
//     <div className=" flex ">
//       <div className="border-r border-gray-200">
//         <Iconbar />
//       </div>
//     <div>
      
//       <div>
//         <Head HeadConfi={HeadConfi} currentPath={currentPath} />
//       </div>  
    
//       <div className='  flex w-[1467px] h-[690px] border-r border-gray-400'>
//         <Routes>{renderRoutes(routesConfig)}</Routes>
//       </div>

//       </div>
//   </div>
      
//   </>
//   );
// };

// export default Layout;


import Header from '../configurations/Header/Header';
import Iconbar from '../configurations/Iconbar/Iconbar'
import routesConfig from '../routing/RoutingConfig'
import HeadConfi from './HeadConfi'
import { Routes, Route, useLocation } from 'react-router-dom'

const Layout = () => {
  const renderRoutes = (routes) => {
    return routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} index={route.index}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ))
  };

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
    <div className=" flex h-screen">
      <div className=" w-14 border-r border-gray-200">
        <Iconbar />
      </div> 
    
      <div className='flex w-60 border-r border-gray-200'>
        <Routes>{renderRoutes(routesConfig)}</Routes>
      </div>
      

      <div className='w-full h-12 border-b-gray-50 text-gray-600 text-sm'>
        <Header HeadConfi={HeadConfi} currentPath={currentPath} />
      </div> 

      </div>
  
      
  </>
  );
};

export default Layout;