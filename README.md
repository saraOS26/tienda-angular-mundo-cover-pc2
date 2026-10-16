# Mundo Cover - Tienda de celulares y accesorios

Aplicación web tipo e-commerce desarrollada con Angular para el curso **JavaScript Avanzado** (PC2) de la Universidad Tecnológica del Perú (UTP).

Mundo Cover es una tienda de celulares, cargadores, fundas, baterías portátiles y otros accesorios.

## Integrante

- Sara Daniela Ospina Hernandez

## Enlaces

- **Proyecto desplegado:** https://tienda-angular-mundo-cover-pc2.vercel.app/
- **Repositorio:** https://github.com/saraOS26/tienda-angular-mundo-cover-pc2

## Tecnologías

- Angular
- TypeScript
- Bootstrap
- HTML y CSS
- JSON Server (base de datos simulada)
- Vercel (despliegue)

## Funcionalidades

- Navbar y footer reutilizables (arquitectura basada en componentes).
- Páginas: Home, Productos, Ofertas, Tienda, Contacto, Mi Cuenta, Login, Dashboard y página 404 personalizada.
- Navegación con Angular Routing.
- Login simulado con `ngModel`, validaciones y LocalStorage.
- Dashboard protegido: si no hay sesión, redirige al Home.
- Opción de cerrar sesión.
- Productos cargados dinámicamente desde `db.json` mediante un servicio de Angular.
- Data binding (interpolación, property binding, event binding y two-way binding).
- Directivas `*ngFor`, `*ngIf`, `[ngClass]` y `[ngStyle]`.
- Pipes: `currency`, `uppercase` y `date`.
- Diseño responsive con Bootstrap (grid, cards, navbar, formularios, botones y tablas).

## Cómo ejecutar el proyecto

1. Instalar las dependencias:

```
npm install
```

2. Levantar JSON Server (primera terminal):

```
npx json-server --watch db.json --port 3000
```

3. Levantar Angular (segunda terminal):

```
ng serve
```

4. Abrir `http://localhost:4200` en el navegador.

## Usuario de prueba

- **Correo:** admin@mundocover.com
- **Contraseña:** 123456

## Despliegue

El proyecto está desplegado en Vercel. En la versión en línea, los productos se leen desde el archivo `public/db.json`; en desarrollo se leen desde JSON Server.