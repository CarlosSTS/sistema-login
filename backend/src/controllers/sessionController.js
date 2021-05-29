const User = require('../models/User');

module.exports = {
  //Login de usuário
async index(request, response) {
  const {email,password} = request.body

const user = await User.findOne({email,password});

if(!user) {
  return response.status(400).json({error : 'User does not exists'})
}

return response.json(user)
},
}