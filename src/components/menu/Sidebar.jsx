import React, { useState,useEffect } from 'react';
import {FcGlobe,FcMenu ,FcDisapprove} from 'react-icons/fc';
import {FaArrowLeft,FaRegTimesCircle} from 'react-icons/fa';
import { SidebarItems,SidebarItemFooter } from './../../setting_lib/menuConfig';
import { Link } from 'react-router-dom';
//import {TopBar } from './../components';
import { useAuth } from './../../context/AuthContext'; // Importa useAuth
import {motion} from 'framer-motion';

const variants = {
    expanded: {width: "15%"},
    nonExpanded :{width:"5%"}
  }

/**
  * @function Sidebar
  * @description Funcion que devuele el menu lateral principal y Lateral Pie de Pagina
  * @param No aplica
 */
function Sidebar() {
    const [isOpen,setIsOpen] = useState(true);
    const { userAuth } = useAuth(); // Obtiene la información del usuario del contexto

    const isAuthenticated = userAuth ? true : false;
    const userName =  userAuth ? userAuth.Username : 'Visitante'; // Usa el username del usuario del contexto o un valor por defecto
    const avatarUser = userAuth ? userAuth.avatar : null; // Usa el avatar del contexto o null
    const NameDesc = userAuth ? userAuth.DescUser : null; // Usa el rol del contexto o null


    const [activeNavIndex,setActiveNavIndex] = useState(0);
    const [isExpanded,setIsExpanded] = useState(true); //Expande o No la Barra de menu lateral
    useEffect(()=> {
        const handleResize = () => {
          const width = window.innerWidth;
          if (width <= 768){
              setIsExpanded(false);
          }
          else {
              setIsExpanded(true);
          }
      };
        handleResize();
        window.addEventListener('resize',handleResize);
        return ()=> {
            window.removeEventListener('resize',handleResize);
        };
    },[]);

    return (
        <motion.section animate={isExpanded ? "expanded": "nonExpanded"} variants={variants}
        className={'w-1/5   border-gray-600 min-w-[60px] h-screen flex flex-col justify-between items-center gap-10 relative'+
        (isExpanded ? ' py-8 px-6 ' : ' px-8 py-6 ')} >
        <div className='flex flex-col justify-center items-center gap-8'>
          {isExpanded ?
          (<div id='logo-box'>
                {/* LOGO*/}
                <div className='flex items-center gap-2 px-1 py-3'>
                    <FcGlobe fontSize={30} />
                    <h1 className='text-green-800 font-bold text-1xl' >ARA</h1>
                </div>
                <div className='flex items-center gap-2 px-1 py-3 md:hidden'>
                    {isExpanded ? <FcMenu fontSize={80}  /> : <FcDisapprove fontSize={80}  />}
                    <FcGlobe fontSize={100} className='text-blue-700'/>
                </div>
          </div>) :
          (<div className='flex justify-center items-center text-green-950'>
            <h1 className='text-green-800 font-bold text-1xl' > <FcGlobe fontSize={40}/> </h1>
          </div>
          )}

            {/* //Flecha  */}
            <div className='flex justify-end items-end '>
                <div id='expanded-icon' className='   text-2xl  rounded-full cursor-pointer md:flex ' onClick={() => (setIsExpanded(!isExpanded)) }>
                    {isExpanded ? <FaArrowLeft /> : <FaRegTimesCircle fontSize={30} />  }
                </div>
            </div>

            {/* Barra de Naveacion Lateral Izquierda */}
            <div id='navlinks-box' className='flex flex-col justify-center  gap-5 w-full mt-5  border-neutral-500   '>
                {SidebarItems.map( (item,index) => (
                    <Link to={item.LinkPath} key={item.key} >
                        <div key={item.key} id='link-box' className={' flex justify-start items-center  gap-4 w-full cursor-pointer rounded hover:shadow hover:bg-blue-400  hover:no-underline ' +
                            +(activeNavIndex === index ? 'border-neutral-700  text-green-950 ': 'text-white ' + (isExpanded ? ' px-6 py-2 ' : ' p-2 '))}
                            onClick={()=> setActiveNavIndex(index)}>
                            <div className='border-neutral-300 text-green-950 p-1 flex rounded-full '>
                                <item.icon className='md:w-6 w-4 h-4 md:h-6'/>
                            </div>
                            <span className={' text-1xl text-gray-700 hover:text-white  '+ (isExpanded ? ' flex ':' hidden ')}> {item?.label}</span>
                        </div>
                    </Link> )
                    )}
            </div>

            {/* Opciones de pie de pagina del menu*/}
            <div className='flex flex-col border-t-2 p-2 gap-0.5 border-neutral-800'>
                {SidebarItemFooter.map((item) => (
                    <LinkSidebar key={item.key} item={item} isVisible={isExpanded}  isAuthenticated={isAuthenticated} />
                ))}
            </div>
        </div>

            {/* Barra Horizontal Superior Fija (TopBar) : Perfil, búsqueda y Cerrar Sesion * /}
            <div className="flex-grow">
                <TopBar userName={userName} avatarUser={avatarUser} rol={NameDesc} isAuthenticated={isAuthenticated}  />
                {/ * Aquí puedes agregar cualquier componente adicional que desees debajo del TopBar * /}
                <div className="pt-16 p-1">
                    {/ * Contenido principal de la aplicación puede ir aquí * /}
                </div>
            </div>
            */}

</motion.section>

        );
}
export default Sidebar;

/**
  * @function: LinkSidebar()
  * @description: Funcion que crea los botones y enlaes del menu principal lateral
  * @param: Objeto {item} con los siquientes campos(Ejemplo): { key: 'home', label: 'Inicio',LinkPath: '/home',icon: HiOutlineHome,rol :'PUBLIC'}
  * @param: Variable booleana {isVisible} Determina si se muestra o no  las etiquetas
 */
function LinkSidebar({item, isVisible,isAuthenticated }) {
    const linkClass = 'flex justify-center items-center gap-2 text-2xl  px-3 py-2 rounded hover:shadow hover:bg-blue-400  hover:no-underline text-base ';
    return (
        <>
            {/* Mostrar el enlace solo si el usuario no está autenticado o el label no es 'Login' */}
            {(!isAuthenticated && item.label === 'Login') || item.label !== 'Login' ? (
            <Link to={item.LinkPath} className={linkClass}>
                <span className=' md:w-6 w-4 h-4 md:h-6 '>{item.icon}</span>
                {isVisible && <span className='text-lg text-ms hidden md:block'>{item?.label}</span>}
            </Link>
            ) : null
            }
        </>
    )
}

