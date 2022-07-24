const express = require('express')
const amenityRouter = express.Router()

amenityRouter.route('/').all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res)=>{
    res.end('Will send all the amenities to you')
})

.post((req,res)=>{
    res.end(`Will add the amenity: ${req.body.name} with description: ${req.body.description}`)
})

.put((req,res)=>{
    res.statusCode=403
    res.end('Put operation not supported on /amenities')
})

.delete((req,res)=>{
    res.end('Deleting all amenities')
})

amenityRouter.route('/:amenityId').all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req, res) => {
    res.end(`Will send details of the amenity: ${req.params.amenityId} to you`);
})

.post( (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /amenities/${req.params.amenityId}`);
})

.put( (req, res) => {
    res.write(`Updating the amenity: ${req.params.amenityId}\n`);
    res.end(`Will update the amenity: ${req.body.name}
        with description: ${req.body.description}`);
})

.delete((req, res) => {
    res.end(`Deleting amenity: ${req.params.amenityId}`);
});


module.exports = amenityRouter;