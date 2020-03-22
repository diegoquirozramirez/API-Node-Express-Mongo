const express = require('express')
const Post = require('../models/postModel')

//instacion metodo Router
const route = express.Router();


/** METODOS DE CONSUMO */ //POST GET PUT DELETE PATCH OPTIONS

route.get('/list',async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({
            message: error
        })
    }
});

route.post('/post', async (req,res) => {
    try {
        console.log(req.body)
        const postM = new Post({
            titulo: req.body.titulo,
            autor: req.body.autor
        })
        const post = await postM.save();
        res.json(post)
    } catch (error) {
        res.json({
            message:  error
        })
    }
});

route.get('/:id', async (req, res) => {
    try {
        const postOne = await Post.findById({_id: req.params.id})
        res.json(postOne)
    } catch (error) {
        res.json({
            message: error
        })
    }
});

route.patch('/:id', async (req, res) => {
    try {
        await Post.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    titulo: req.body.titulo
                }
            }
        )
        const postOne = await Post.findById({_id: req.params.id})
        res.json(postOne)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

route.delete('/:id', async (req, res) => {
    try {
        await Post.deleteOne({_id: req.params.id})
        res.json({
            message: "se eliminio correctamente",
            codRes: "00",
            mesRes: "ok"
        })
    } catch (error) {
        res.json({
            message: error
        })
    }
})


//exportarlo para su uso
module.exports = route