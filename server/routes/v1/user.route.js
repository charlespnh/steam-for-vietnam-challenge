const express = require('express');
const fetch = require('node-fetch');
const httpStatus = require('http-status');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(users => {
                res.status(httpStatus.OK).json(users);
            })
            .catch(err => res.status(err.code).send(err.message));
    });

router
    .route('/:userId')
    .get(async (req, res) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${req.params.userId}`)
            .then(data => data.json())
            .then(user => {
                res.status(httpStatus.OK).json(user);
            })
            .catch(err => res.status(err.code).send(err.message));
    })

module.exports = router;
