import express from 'express'
import multer from 'multer'

const upload = multer()

export const router = express.Router()
 
router.post('/', upload.single('fileupload'), (req, res, next) => {
   if(req.file === undefined){
     res.status(500).json({'error': 'File must be choosen '})
   }
   res.status(200).json({size: req.file.size +' bytes'})
})