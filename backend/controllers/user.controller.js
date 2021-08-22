 const User = require('../models/user.model');

 exports.getUsers = async(req, res, next) => {
     try {
         const items = await User.find();
         res.json(items);
     } catch (error) {
         throw error;
     }
 }

 exports.getUserById = async(req, res, next) => {
     try {
         const item = await User.findOne({ "_id": req.params.id });
         console.log(item);
         if (!item) {
             return res.status(404).json({
                 message: 'Item not found',
             })
         }
         res.json(item);
     } catch (error) {
         throw error;
     }
 }

 exports.newItem = async(req, res, next) => {
     try {
         const item = await User.create(req.body);
         console.log(item);
         res.status(201).json({
             message: 'Item created',
             item
         });
     } catch (error) {
         throw error;
     }
 }

 exports.updateItem = async(req, res, next) => {
     try {
         let filter = { "_id": req.params.id };
         let item = await User.findOne(filter);
         console.log(item);
         if (!item) {
             return res.status(404).json({
                 message: 'Item not found',
             })
         }

         item = await User.findOneAndUpdate(filter, req.body, {
             new: true,
             runValidators: true,
             useFindAndModify: false,
         });

         res.status(200).json({
             "message": "Item Updated",
             item
         });
     } catch (error) {
         throw error;
     }
 }

 exports.deleteItem = async(req, res, next) => {
     try {
         let filter = { "_id": req.params.id };
         let item = await User.findOne(filter);
         console.log(item);
         if (!item) {
             return res.status(404).json({
                 message: 'Item not found',
             })
         }
         await item.remove();

         res.status(200).json({
             "message": "Item Deleted",
             item
         });
     } catch (error) {
         throw error;
     }
 }