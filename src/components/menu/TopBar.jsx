import { Link } from 'react-router-dom';
import defaultAvatar from './../../images/Avatar4.jpg';
import {    HiOutlineLogin } from 'react-icons/hi';
import Tooltip from '@mui/material/Tooltip'; // Importa Tooltip para la flecha
import { useAuth } from './../../context/AuthContext'; // User Autentificado
import { IoSearch } from "react-icons/io5";
import {IoIosArrowDown,IoIosLogOut} from 'react-icons/io';
import { useState } from 'react';
/**
 * @function TopBar
 * @description Component TopBar
 * @ValueUser {string} userName - Username of the User
 * @ValueUser {string} avatarUser - Image of the Avatar
 * @ValueUser {string} rol - Rol of the User o Name of the User
 * @ValueUser {boolean} isAuthenticated - Indica si esta o no Autenticado un usuario
 */
const TopBar = () => {
    const {userAuth, isAuthenticated } = useAuth(); //Contexto para verificar si esta o no Autentificado
    const UserName = userAuth ? userAuth.DescUser : '(Invitado)';
    const rol = userAuth ? userAuth.DescUser : '*Invitado*';
    const avatarUser = null;

    return (
        <section className='w-full bg-slate-100 lg:h-15 h-fit flex lg:flex-row flex-col justify-between items-center p-1 rounded-xl lg:gap-2 gap-4'>
            <div>
                <h1 className='text-2xl font-semibold'>Buscar</h1>
            </div>

            <div className='flex justify-between items-center gap-10'>
                {/* <HiOutlineLogin className='w-6 h-6 cursor-poiner hover:scale-150 hover:text-neutral-600 transition-all'/> */}
                <Tooltip title={rol || "(Invitado)"} arrow>
                    <img src={avatarUser || defaultAvatar} alt={UserName || "(Invitado)"}
                    className="h-8 w-8 rounded-full cursor-poiner hover:scale-150 hover:text-neutral-600 transition-all"/>
                </Tooltip>
                {isAuthenticated && (<Link to={'/logout'} className='flex justify-end px-2'>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                        <IoIosLogOut className="h-5 w-5" />
                    </span>
                    <span className="hidden md:flex  text-lg ">Salir</span>
                </Link>)}

{/*                 <div id='client-info' className='flex justify-center items-center gap-4'>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='flex justify-center items-center -mb-1 gap-2'>
                            <Tooltip title={rol || "(Invitado)"} arrow>
                                <img src={avatarUser || defaultAvatar} alt={UserName || "(Invitado)"}
                                className="h-8 w-8 rounded-full"/>
                                {isAuthenticated && (<Link to={'/logout'} className='flex justify-end px-2'>
                                    <span className="hidden md:flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                                        <HiOutlineLogin className="h-5 w-5" />
                                    </span>
                                    <span className="text-lg ">Salir</span>
                                </Link>)}
                            </Tooltip>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
  )
}
export default TopBar;
