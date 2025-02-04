//Icons
import {HiOutlineViewGrid,
    HiOutlineUsers,
    HiOutlineShoppingCart,
	HiOutlineHome,
	HiOutlineCog,
	HiPrinter,
    HiOutlinePresentationChartBar,
    HiOutlineLogin
 } from 'react-icons/hi';


 /**
  * @function SidebarItems
  * @description Funcion que devuele los link del menu lateral principal
  * @param No aplica
  */
 export const SidebarItems =[
    {
        key: 'home',
        label: 'Inicio',
        LinkPath: '/home',
        icon: <HiOutlineHome/>,
        rol:'public'
    },
    {
        key: 'statistics',
        label: 'Estadística',
        LinkPath: '/statistics',
        icon: <HiOutlinePresentationChartBar/>,
        rol:'admin'
    },
    {
        key: 'order',
        label: 'Pedido',
        LinkPath: '/order',
        icon: <HiOutlineShoppingCart/>,
        rol:'client'
    },
    {
        key: 'products',
        label: 'Productos',
        LinkPath: '/products',
        icon: <HiOutlineHome/>,
        rol:'admin'
    }
]

 /**
  * @function SidebarItemFooter
  * @description Funcion que devuele los link del menu lateral inferior (Pie de pagina)
  * @param No aplica
  */
 export const SidebarItemFooter =[
    {
        key: 'login',
        label: 'Login',
        LinkPath: '/login',
        icon: <HiOutlineLogin/>,
        rol:'public'
    },
    {
        key: 'logout',
        label: 'Salir',
        LinkPath: '/logout',
        icon: <HiOutlineLogin/>,
        rol:'public'
    },
    {
        key: 'setting',
        label: 'Panel',
        LinkPath: '/setting',
        icon: <HiOutlineCog/>,
        rol:'admin'
    },
    {
        key: 'reports',
        label: 'Reportes',
        LinkPath: '/reports',
        icon: <HiPrinter/>,
        rol:'admin'
    }
]

