const Product = require("../models/product");

function getProduct(req, res) {

    let productId = req.params.productId

  product.findById(productId, (err, product) =>{
    if(err) return res.status(500).send({message: 'Error al realizar la petición: ', err})
    if(!product) return res.status(404).send({message: 'Porducto inexistente'})

    res.status(200).send({ product })
    
  })
}

//obtener todos los productos
function getProducts(req,res) {

    Product.find({}, (err, products) => {
        if(err) return res.status(200).send({message: 'Error al consultar la base de datos: ', err})
        if(!products) return res.status(404).send({message: 'No existen productos'})
    
        res.status(200).send({ products });
      })
}

function saveProduct(req,res) {

    console.log("POST /api/v1/product");
    console.log(req.body);
  
    let product = new Product();
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
  
    product.save((err, productStored) => {
      if(err) res.status(500).send({message: 'Error al salvar en la base de datos ', err});
  
      res.status(200).send({product: productStored})
    })
}

function updateProduct(req,res) {

    let productId = req.params.productId
    let update = req.body

  Product.findOneAndUpdate(productId, update, (err, productUpdated) =>{
    if(err) res.status(500).send({message: 'Error al buscar el producto en la base de datos: ', err});
    
    res.status(200).send({ product: productUpdated })
  })
}

function deleteProduct(req,res) {

    let productId = req.params.productId
  Product.findById(productId, (err, product) => {
    if(err) res.status(500).send({message: 'Error al buscar el producto: ', err})

    product.remove(err =>{
      if(err) res.status(500).send({message: 'Error al borrar el producto: ', err})
      res.status(200).send({message: 'El producto se eliminó correctamente' })
    })
  })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}