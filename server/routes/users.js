const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        return fetch('https://jsonplaceholder.typicode.com/users');
    });

router
    .route('/:userId')
    .get(async (req, res) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${req.params.userId}`);
    })

module.exports = router;
