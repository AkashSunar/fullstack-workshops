const {info}= require("./logger")
const noHandler = (request, response, next) => {
  response.status(404).send("no url available")
  next()
}
const errorHandler = (error, request, response, next) => {
  info(error.message) //consol.error() => info()

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name ==="Validation error") {
    return response.status(400).send({error:error.message})
  }
  next(error)
}
 
module.exports={errorHandler,noHandler}