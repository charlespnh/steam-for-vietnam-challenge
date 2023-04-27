const express = require('express');
const fetch = require('node-fetch');
const httpStatus = require('http-status');
const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(data => data.json())
            .then(albums => {
                res.status(httpStatus.OK).json(albums);
            })
            .catch(err => res.status(err.code).send(err.message));
    });

router
    .route('/:albumsId')
    .get(async (req, res) => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${req.params.albumsId}`)
            .then(data => data.json())
            .then(album => {
                res.status(httpStatus.OK).json(album);
            })
            .catch(err => res.status(err.code).send(err.message));
    });

router
    .route('/:albumsId/photos')
    .get(async (req, res) => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${req.params.albumsId}/photos`)
            .then(data => data.json())
            .then(photos => {
                res.status(httpStatus.OK).json(photos);
            })
            .catch(err => res.status(err.code).send(err.message));
    });

// router
//     .route('/:albumsId/photos/:photoId') ???

module.exports = router;
