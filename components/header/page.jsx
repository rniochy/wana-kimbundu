'use client'
import React, {useContext} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMoon,
    faHome,
    faBook,
    faMusic,
    faHistory,
    faCode,
    faUser,
    faBrain,
    faInfo,
    faWindowClose,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import Banner from '../banner/page'; 

export function Header (){
    const pathname = usePathname();
    const [toggleMenu, setToggleMenu] = useState(false);

    const onSugerir = (e) =>{
        const value = e.target.value
        if (value !== ''){
            const pyShell = new PythonShell('suggestion.py')
            pyShell.send(value)
            pyShell.end((err, code, signal) => {
               // 
               err? console.log('Some error ocurred!') : 'Good!!'
            })
        }
    }

    const toggleMenuHandler = ()=>{
         setToggleMenu(!toggleMenu)
    }
    const NavItems = () => {
         return (
            <nav className={`${toggleMenu ?'hidden':'flex'} w-full  mt-[-530px] border-t flex flex-col gap-4 border-t-[#232e36]  md:border-0 md:mt-0 `}>
                    <div className='self-end mt-2 flex md:hidden bg-black'>
   
                    </div>
                    <ul className={`flex flex-col h-full  md:p-0 md:bg-[transparent] md:flex-row  md:justify-center gap-[1rem] w-full`}>
                        <li className="text-md header-li">
                            <Link href='/' passHref> 
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faHome}></FontAwesomeIcon></span>
                                    <span>Home</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/grammar' passHref>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faBook}></FontAwesomeIcon></span>
                                    <span>Gramática</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/music' passHref>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faMusic}></FontAwesomeIcon></span>
                                    <span>Música</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/history' >
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faHistory}></FontAwesomeIcon></span>
                                    <span>Histórias</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/courses' passHref>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faBrain}></FontAwesomeIcon></span>
                                    <span>Cursos</span>
                                </span>
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link href='/about' passHref>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faInfo}></FontAwesomeIcon></span>
                                    <span>Sobre</span>
                                </span>
                            </Link>  
                        </li>
                        <li  className="header-li">
                            <Link href='/team' passHref>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faCode}></FontAwesomeIcon></span>
                                    <span>Criadores</span>
                                </span>
                            </Link>
                        </li>
                        <li  className="header-li">
                            <Link href='#' passHref>
                                <span className='header-li-span'>
                                    <span><FontAwesomeIcon size='lg' icon={faUser}></FontAwesomeIcon></span>
                                    <span>Perfil</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
         );
    }

    return(
        <>
            <header className={`sticky top-0 z-40 bg-slate-100 px-2 flex flex-col  justify-between items-center w-full ${toggleMenu ? 'h-fit' : 'h-[100vh]'} md:h-[90px] shadow-lg font-mulish`}>
                <div className='flex h-fit flex-row  justify-between w-full flex-wrap relative'>
                        <div>
                            <h2 className="font-bold text-xl md:absolute md:top-6 ml-[1.5rem] md:text-2xl text-slate-800">
                                <Link href='/'>Zwelar</Link>
                            </h2>
                        </div>
                        <div className='flex flex-row-reverse justify-between gap-4 items-center md:flex-row'>
                            <div className='w-[16px] h-[16px] mb-2 md:hidden'>
                                    {!toggleMenu ?   
                                        <span 
                                            onClick={toggleMenuHandler}> 
                                            <FontAwesomeIcon 
                                                className='text-red-600 header-li mt-2 flex cursor-pointer' 
                                                size='lg' 
                                                icon={faWindowClose}>
                                        </FontAwesomeIcon>
                                        </span> :
                                        <span 
                                            onClick={toggleMenuHandler} className='header-li mt-2 flex'>
                                            <FontAwesomeIcon 
                                                className='cursor-pointer'
                                                icon={faBars}>
                                            </FontAwesomeIcon>
                                        </span>
                                    }
                            </div>
                            <aside>
                                <span className='header-li mt-2 '>
                                    <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                                </span>
                                <button className='w-[fit-content]  hover:text-[blue] mt-3 font-bold  p-1 rounded-[5px] text-black  bg-green-400 text-[11px]' 
                                        onClick={onSugerir}>Sugerir Palavras
                                </button>
                            </aside>
                        </div>
                </div>
                <div className='flex w-full  flex-row py-2 gap-4'>
                    <NavItems />
                </div>
            </header>
            { pathname === '/' ?
                    <Banner /> 
                    : ''
            }
        </>
    )
}