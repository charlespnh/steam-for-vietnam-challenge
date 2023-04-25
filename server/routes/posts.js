const express = require('express');
const fetch = require('node-fetch');
const httpStatus = require('http-status');
const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(posts => {
                res.status(httpStatus.OK).json(posts);
            })
            .catch(err => res.status(err.code).send(err.message));
    });

router
    .route('/:postId')
    .get(async (req, res) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.postId}`)
            .then(data => data.json())
            .then(post => {
                res.status(httpStatus.OK).json(post);
            })
            .catch(err => res.status(err.code).send(err.message));
    })

module.exports = router;
