# Community Jobs Organizer Frontend

## Descripción del Proyecto

Community Jobs Organizer es una aplicación web completa creada por un grupo de programadores de Venezuela. Esta aplicación facilita la organización y gestión de trabajos comunitarios, proporcionando una plataforma moderna y receptiva.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para la creación de aplicaciones web de una sola página y sitios web renderizados en el servidor.
- **TailwindCSS**: Framework CSS de bajo nivel que proporciona clases de utilidad para diseñar interfaces de usuario rápidamente.
- **next-auth**: Solución de autenticación para Next.js que simplifica el proceso de agregar autenticación y autorización a las aplicaciones.
- **react-icons**: Biblioteca de iconos React que proporciona una amplia gama de iconos SVG para usar en las aplicaciones.
- **axios**: Biblioteca de promesas HTTP para JavaScript que facilita la realización de solicitudes HTTP.
- **zustand**: Biblioteca de administración de estado ligera y simplificada para aplicaciones React.
- **yarn**: Administrador de paquetes JavaScript que simplifica la instalación y administración de dependencias.

## Características

- **Autenticación y autorización** con next-auth.
- **Interfaz de usuario moderna y receptiva** con TailwindCSS.
- **Íconos SVG personalizables** con react-icons.
- **Solicitudes HTTP asincrónicas** con axios.
- **Administración de estado global** con zustand.

## Configuración

### Clonar el repositorio

```bash
git clone https://github.com/jlescalonap/community_jobs_organizer_front

## Comandos de Terminal

- yarn install
- yarn dev

## Variables de entorno

Configura las siguientes variables de entorno en un archivo **.env.local:**

- **FACEBOOK_CLIENT_ID=**'facebook id app'
- **FACEBOOK_CLIENT_SECRET=**'facebook secretkey Oauth'
- **AUTH_GITHUB_ID=**'github key app id'
- **AUTH_GITHUB_SECRET=**'github secret key'
- **AUTH_SECRET=**'variable obtenida a partir de un hash'
- **NEXTAUTH_URL=**'http://localhost:3000'
- **NEXT_PUBLIC_URL=**'http://localhost:3000'

## Uso

La aplicación se puede usar navegando a http://localhost:3000 en su navegador web.

## Contribución

 ¡Se alienta la contribución a este proyecto! Puedes enviar solicitudes de extracción para corregir errores, agregar funciones o mejorar la documentación