import multer from "multer";
import path from 'path'


const storage = multer.diskStorage({
     destination:(req,file,cb) =>{
          cb(null,"uploads/")
     },

     filename:(req,file,cb)=>{
          cb(null,Date.now() + path.extname(file.originalname))
     }
}) 

const fileFilter = (req,file,cb) =>{
     const allowed = ["image/jpeg", "image/png", "image/jpg"];
     allowed.includes(file.mimtype) ? cb(null,true) : cb(new Error("Only image files are allowed"),false)
}


const upload = multer({storage,fileFilter})
export default upload