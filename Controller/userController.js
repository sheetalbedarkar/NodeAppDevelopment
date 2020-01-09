class abc {
    helloWorld = ((req, res) => {
        res.send('Hello World')
    })
}
module.exports = new abc;