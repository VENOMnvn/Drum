const getDataUser = require('./GetUserData');
const GetUserData = require('./GetUserData');

async function AddNewUser(obj)
{
   const collection =  await getDataUser();
   const response = await collection.insertOne(obj);
   const naveen = "Naveen";
   
   return response.acknowledged;
}
module.exports =  AddNewUser;
