const express = require('express');
var router = express.Router();

//item model
const item = require('../../models/Item');

//route GET api/items

router.get('/',(req,res)=>{
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items));
})

//post request in Item
router.post('/',(req,res)=>{
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
    .then(item => res.json(item));
})

//post request in Item
//app/items/:id

router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item =>item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}))
 })



  //Delete using async await

// router.delete('/:id', async (req, res) => {
//     try {
//       const item = await Item.findById(req.params.id);
//       if (!item) throw Error('No item found');
  
//       const removed = await item.remove();
//       if (!removed)
//         throw Error('Something went wrong while trying to delete the item');
  
//       res.status(200).json({ success: true });
//     } catch (e) {
//       res.status(400).json({ msg: e.message, success: false });
//     }
//   });   



module.exports = router;