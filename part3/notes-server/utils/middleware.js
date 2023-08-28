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
    return response.status(400).send({ error: error.message })
  }
   else if (error.name ===  'JsonWebTokenError') {
    return response.status(401).json({ error: error.message })
  }
  else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({
      error: 'token expired'
    })
  }
  next(error)
}
 
module.exports={errorHandler,noHandler}