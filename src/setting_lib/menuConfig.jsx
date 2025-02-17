//Icons
import {HiOutlineViewGrid,
    HiOutlineUsers,
    HiOutlineShoppingCart,
	HiOutlineHome,
	HiOutlineCog,
	HiPrinter,
    HiOutlinePresentationChartBar,
    HiOutlineLogin,
    HiOutlineIdentification
 } from 'react-icons/hi';


 /**
  * @function SidebarItems
  * @description Funcion que devuele los items del menu lateral principal
  * @param No aplica
  */
 export const SidebarItems =[
    {
        key: 'home',
        label: 'Inicio',
        LinkPath: '/home',
        icon: HiOutlineHome,
        rol:'PUBLIC'
    },
    {
        key: 'statistics',
        label: 'Estadística',
        LinkPath: '/statistics',
        icon: HiOutlinePresentationChartBar,
        rol:'USER'
    },
    {
        key: 'order',
        label: 'Pedido',
        LinkPath: '/order',
        icon: HiOutlineShoppingCart,
        rol:'CLIENT'
    },
    {
        key: 'products',
        label: 'Productos',
        LinkPath: '/products',
        icon: HiOutlineHome,
        rol:'PUBLIC'
    },
    {
        key: 'reports',
        label: 'Reportes',
        LinkPath: '/reports',
        icon: HiPrinter,
        rol:'ADMIN'
    }
]

 /**
  * @function SidebarItemFooter
  * @description Funcion que devuele los Link del menu lateral inferior (Pie de pagina)
  * @param No aplica
  */
 export const SidebarItemFooter =[
    {
        key: 'login',
        label: 'Login',
        LinkPath: '/login',
        icon: <HiOutlineLogin/>,
        rol:'PUBLIC'
    },
    {
        key: 'setting',
        label: 'Panel',
        LinkPath: '/setting',
        icon: <HiOutlineCog/>,
        rol:'ADMIN'
    }
]

/*
    {
        key: 'register',
        label: 'Registrase',
        LinkPath: '/register',
        icon: <HiOutlineIdentification/>,
        rol:'PUBLIC'
    },
    {
    key: 'logout',
    label: 'Salir',
    LinkPath: '/logout',
    icon: <HiOutlineLogin/>,
    rol:'PUBLIC'
}, */