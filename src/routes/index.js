const express = require('express')
const Router = express.Router();

const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')

//Metodos
//Router.post("/signup", userCtrl.signUp);

Router.get("/product", auth, productCtrl.getProducts);
Router.get("/product/:productId", productCtrl.getProduct);
Router.post("/product", auth, productCtrl.saveProduct);
Router.put("/product/:productId", productCtrl.updateProduct);
Router.delete("/product/:productId", productCtrl.deleteProduct);
Router.post("/signin", userCtrl.signIn)
Router.get("/private", auth ,(req, res) => {
    res.status(200).send({message: 'Tienes acceso al sistema'})
})

module.exports = Router