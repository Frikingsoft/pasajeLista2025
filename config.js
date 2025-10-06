// antes de ejecutar el servidor escribir en la terminal del proyecto npm i , esto baja la carpeta node_modules necesaria para el proyecto
import express from "express"  // LLamamos al modulo de express , para instalarlo habrir terminal y escribir npm i express
import hbs from "hbs"  // LLamamos al modulo hbs 
import { Router } from "express" //Importamos el Enrutador de express
import { fileURLToPath } from 'url';
import path from "path"
const servidor = express() // guardamos toda la funcionalidad en la variable servidor
const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
servidor.set("view engine","hbs")
// Configurar la ubicación de las vistas
servidor.set("views", path.join(__dirname, 'views'))
// Middleware para parsear JSON y form data
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));

// Configurar partials de HBS
hbs.registerPartials(path.join(__dirname, 'views/partials'))

// Middleware para archivos estáticos (CSS, JS, imágenes)
servidor.use(express.static(path.join(__dirname, 'public')));
servidor.use(router)
servidor.listen(80)
export{
    router // exportamos el router
}