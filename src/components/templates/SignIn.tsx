// Modules
import React from 'react'

const SignIn = () => {
  return (
    <div className="rounded-xl shadow-sm flex items-center flex-col w-full bg-white p-5">
      <h2 className="text-4xl mb-6">Iniciar sesion</h2>
      <div className="flex flex-col justify-center mb-4 w-4/5">
        <label itemID="user" className="mb-2">
          Ingrese el usuario
        </label>
        <input
          type="text"
          placeholder="Usuario"
          name="user"
          className="border border-solid rounded-xl p-3 m-0 w-full"
        />
      </div>
      <div className="flex flex-col justify-center mb-4 w-4/5">
        <label itemID="user_password" className="mb-2">
          Ingrese la contraseña
        </label>
        <input
          type="password"
          placeholder="Contarseña"
          name="user_password"
          className="border border-solid rounded-xl p-3 m-0 w-full"
        />
      </div>
      <div className="w-3/5 mt-4">
        <button className="p-4 shadow-sm rounded-xl w-full mb-5">
          Iniciar con Facebook
        </button>

        <button className="p-4 shadow-sm rounded-xl w-full mb-5">
          Iniciar con Github
        </button>
      </div>
    </div>
  )
}

export default SignIn;