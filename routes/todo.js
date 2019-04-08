const router = require('express').Router();
const todoModel = require('../model/todo');

router.post('/new', (req, res, next) => {
   // console.log(req.body);
   const todo = new todoModel(req.body);
   todo.save().then(doc => {
      res.status(201).json({ message: 'success', data: doc });
   })
      .catch(error => {
         res.status(400).json({ message: 'error', error });
      })
});

router.get('/list', (req,res,next) => {
   todoModel.find({})
      .then(docs => {
         res.status(200).json({message: 'success', todos: docs })
      })
      .catch(error => {
         console.log(error);
         res.status(400).json({message: 'error', todos: []})
      })
});

module.exports = router;