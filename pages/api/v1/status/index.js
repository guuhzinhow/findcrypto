function status (request, response) {
  response.status(200).json({chave:"conectado"})
}

export default status