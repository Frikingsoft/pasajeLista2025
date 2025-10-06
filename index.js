import { router } from "./config.js"
// Get (Obtener) POST(Enviar) PUT(Actualizar) Delete(Borrar)
// Funcion de flecha ()=>{}
router.get("/",(req,res)=>{
    res.render("index.hbs")
})
router.get("/login",(req,res)=>{
    res.render("login.hbs")
})