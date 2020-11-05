module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost/product',
    SECRET_TOKEN: 'miclavedetokens'
}