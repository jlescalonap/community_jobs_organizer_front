// Modules
import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="fixed top-0 w-full bg-black dark:bg-white text-white dark:text-black flex justify-evenly items-center py-3">
      <div className="flex min-w-fit mx-5 items-center justify-center">
        <h3 className="text-2xl">Proyecto Programadores Venezuela</h3>
      </div>
      <div className="flex justify-around w-full px-5">
        <Link href={"/"}>Inicio</Link>
        <Link href={"/"}>Sobre el Proyecto</Link>
        <Link href={"/"}>Example</Link>
        <Link href={"/"}>Example</Link>
        <Link href={"/"}>Example</Link>
      </div>
      <div className="min-w-fit mx-5">
        <Link href={"/sign"} className="p-3 text-white bg-blue-700 m-2 rounded-xl">Iniciar Sesion</Link>
      </div>
    </div>
  )
}

export default Nav