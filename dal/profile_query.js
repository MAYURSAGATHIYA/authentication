const products = require('./index').db('CRED').collection('userprodata');

const ObjectId = require('mongodb').ObjectId;

const profile_api = require('../api/profile_api')
const saveforprofile= async ({ profile_id, username, bio, hobbies }, ctx) => {

    const result = await products.insertOne({ profile_id, username, bio, hobbies });
    // if(!{first,last,email,password,confirmpassword})
    //   {
    //       ctx.body='please fill all fields'
    //     }

    return result;//.ops[0];

}
const getAll = async () => {

    const cursor = await products.find();

    return cursor.toArray();
}
// console.log("jhv")
// ================================================================
const getById = async (id) => {
    return await products.findOne({ _id: ObjectId(id) });
}
// ================================================================
const update = async (id, { first, last, email, password, confirmpassword }) => {
    const result = await products.replaceOne({ _id: ObjectId(id) }, { first, last, email, password, confirmpassword });
    return result //.ops[0];
}
// ================================================================
const removeById = async id => {

    await products.deleteOne({ _id: ObjectId(id) });
}








module.exports = {
    saveforprofile,
    getAll,
    getById,
    update,
    removeById
}