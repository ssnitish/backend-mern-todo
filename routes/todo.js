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

router.get('/list', (req, res, next) => {
   todoModel.find({})
      .then(docs => {
         res.status(200).json({ message: 'success', todos: docs })
      })
      .catch(error => {
         console.log(error);
         res.status(400).json({ message: 'error', todos: [] })
      })
});

router.delete('/delete/:id', (req, res, next) => {
   todoModel.findOneAndDelete({ _id: req.params.id }, (error, response) => {
      if (error) {
         res.status(400).josn({ message: 'unable to delete todo', error })
      }
      res.status(200).json({ message: 'todo deleted successfully', response })
   })
})

router.patch('/todos/:id', (req, res, next) => {
   todoModel.findOneAndUpdate(
      { _id: req.params.id },
      {
         $set: {
            description: req.body.description,
            priority: req.body.priority,
            responsible: req.body.responsible
         }
      }
   )
      .then(response => {
         res.status(200).json({ message: "updated successfully", response })
      })
      .catch(error => {
         res.status(400).json({ message: "Could not update document", error })
      })
})

module.exports = router;