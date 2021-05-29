const User = require('../models/User');

module.exports = {
  //Listagem de todos usuários
async index(request, response) {
const users = await User.find();

return response.json(users)
},

  async create(request, response) {
    //Criação de usuários
    const {userName, email, password} = request.body;

    let user = await User.findOne({email});
      if(user) {
        return response.status(409).json({error : 'User already exists'})
      }
    if(!user) {
      user = await User.create({userName,email,password})
    } 
    
   return response.json(user)
  }
}