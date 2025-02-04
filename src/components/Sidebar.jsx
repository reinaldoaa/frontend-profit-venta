import React, { useState } from 'react';
import {FcGlobe,FcMenu ,FcDisapprove} from 'react-icons/fc';
import { SidebarItems,SidebarItemFooter } from './../setting_lib/menu/menuConfig';
import { Link } from 'react-router-dom';

/**
  * @function Sidebar
  * @description Funcion que devuele el menu lateral principal
  * @param No aplica
 */
function Sidebar() {
    const [isOpen,setIsOpen] = useState(true);

    return (
        <div className={`flex flex-col p-3 shadow-md h-screen ${isOpen ? 'w-45':'w-16'} transition-width duration-300`}>
            <div className=' flex items-center gap-2 px-1 py-3 '>
                < FcGlobe  fontSize={30} />
                <button onClick={()=> setIsOpen(!isOpen) } className='md:hidden' >
                {isOpen ? <FcMenu fontSize={30} />: <FcDisapprove fontSize={30} />}
                </button>
                { isOpen && <span className="text-lg text-ms hidden md:block">CTRA</span>}
            </div>
            <div className='border-t-2 flex flex-col  gap-0.5 py-8 border-neutral-700'>
                {SidebarItems.map( (item)=> (<LinkSidebar key={item.key} item={item} isVisible={isOpen}/> ))}
            </div>
            <div className='flex flex-col border-t-2 p-2 gap-0.5 border-neutral-800 '>
                {SidebarItemFooter.map( (item) => ( <LinkSidebar key={item.key} item={item}/> ))}
            </div>
        </div>
 )
}

export default Sidebar;

/**
  * @function: LinkSidebar()
  * @description: Funcion que crea los botones y enlaes del menu principal lateral
  * @param: Objeto {item} con los siquientes campos(Ejemplo): { key: 'home',
  *                                                             label: 'Inicio',LinkPath: '/home'
  *                                                             ,icon : <HiOutlineHome/>,rol :'public'}
  * @param: Variable booleana {isOpen} Determina si se muestra o no  las etiquetas
 */
function LinkSidebar({item},{isOpen}) {
    const linkClass = 'flex items-center gap-2  px-3 py-2 rounded hover:shadow hover:bg-blue-400  hover:no-underline text-base ';
    return (
        <>
            <Link to={item.LinkPath} className={linkClass}  >
                <span >{item.icon}</span>
                {!isOpen && <span className='text-lg text-ms hidden md:block'>{item.label}</span>}
            </Link>
        </>
    )
}

