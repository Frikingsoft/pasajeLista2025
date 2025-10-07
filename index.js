import { router } from "./config.js"
// Get (Obtener) POST(Enviar) PUT(Actualizar) Delete(Borrar)
// Funcion de flecha ()=>{}
    const menu = [
        {nombre:"inicio",url:"/"},
        {nombre:"login",url:"/login"},
        {nombre:"registro",url:"/registro"}
    ]
router.get("/",(req,res)=>{
    res.render("index.hbs",{menu})
})
router.get("/login",(req,res)=>{
    res.render("login.hbs",{menu})
})

router.get("/registro",(req,res)=>{
     res.render("registro.hbs",{menu})
})