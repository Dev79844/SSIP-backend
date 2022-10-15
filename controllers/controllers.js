const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User')

const getUser = async(req,res) => {
    const data = await User.find({})

    res.status(200).json(data)
}

const postUser = async(req,res) => {
    const {name, description, industry} = req.body

    try{
        const data = await User.create({name,description,industry})
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// const timeline = async(req,res) => {
//     console.log(req.params.id)
//     const users = await User.find({})
//     let data = users.map((user)=>{
//         return user.name
//     })
//     res.json(data)
// }

module.exports = {
    getUser,
    postUser,
}