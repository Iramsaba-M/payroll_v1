
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
    <div className=" flex min-h-screen">
      <div className=" w-14 border-r border-border-line">
        <Iconbar />
      </div> 
    
      <div className='flex w-60 border-r border-border-line'>
        <Routes>{renderRoutes(routesConfig)}</Routes>
      </div>
      

      <div className='w-full h-12 border-b-border-line text-gray-600 text-sm'>
        <Header HeadConfi={HeadConfi} currentPath={currentPath} />
      </div> 

      </div>
  
      
  </>
  );
};

export default Layout;