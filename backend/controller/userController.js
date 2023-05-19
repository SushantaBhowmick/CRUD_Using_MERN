const User = require('../model/user')


//Create User
exports.createUser = (async(req,res)=>{
    const user = await User.create(req.body);

    res.status(201).json({
        message:"User created successfully!",
        user
    })
})


//Get All User
exports.GetAllUser = (async(req,res)=>{
    const user = await User.find();

    res.status(200).json(user)
})

//Get A Single User
exports.GetAUser = (async(req,res)=>{
    
    const user = await User.findById(req.params.id);

    res.status(200).json(user)
})

//Update User
exports.updateUser = (async(req,res)=>{
    const newData = {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        clgName:req.body.clgName,
        department:req.body.department
    }

    const user = await User.findByIdAndUpdate(req.params.id,newData,{
        new:true,
        runvalidators:true,
        useFindAndModify:false
    });

    

    res.status(200).json({
        success:true,
        user
    })
})


exports.deleteUser = (async(req,res)=>{

    const user = await User.findById(req.params.id);

    await User.findByIdAndDelete(user)

    res.status(200).json({
        success:true,
    })
})