import { router } from "./config.js"

router.get("/",(req,res)=>{
    res.render("index.hbs")
})