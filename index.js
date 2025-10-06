import { router } from "./config.js"
// Get (Obtener) POST(Enviar) PUT(Actualizar) Delete(Borrar)
// Funcion de flecha ()=>{}
router.get("/",(req,res)=>{
    const menu = [
        {nombre:"inicio",url:"/"},
        {nombre:"login",url:"/login"},
        {nombre:"registro",url:"/registro"}
    ]
    res.render("index.hbs",{menu})
})
router.get("/login",(req,res)=>{
    res.render("login.hbs")
})