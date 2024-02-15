import { BiBell, BiLogOut } from 'react-icons/bi'
import { GoHomeFill } from "react-icons/go";
import { MdGroups } from "react-icons/md";
import { RiApps2Fill } from "react-icons/ri";
import { RiSettings3Fill } from "react-icons/ri";
import IconStyle from './IconbarStyle';


export const DASHBOARD_ICONBAR_LINKS ={ 
    links: [
    {
        key: 'home',
        path:"/",
        icon: <GoHomeFill className={IconStyle.style1}/>
    },
    {
        key: 'team',
        path:"/team",
        icon: <MdGroups className={IconStyle.style1} />
    },
    {
        key: 'apps',
        path:"/apps",
        icon: <RiApps2Fill className={IconStyle.style1} />
    },
    {
        key: 'settings',
        path:"/settings",
        icon: <RiSettings3Fill className={IconStyle.style1} />
        
    },
    ],
    footerIcon : [
    {
        key: 'notifications',
        path:"/",
        icon: <BiBell className={IconStyle.style1} />
    },
    {
        key: 'logout',
        path:"/",
        icon: <BiLogOut className={IconStyle.style1} />
    },
],
    

}
    

