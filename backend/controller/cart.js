const db = require('../model/index');
module.exports = {
  getAll: async (req, res) => {
    try {
      const cart = await db.Cart.findAll({});
      res.status(200).send(cart);
    } catch (error) {
      throw error;
    }
  },
  postCart: async (req, res) => {
    console.log(req.body)
    try {
      const cart = await db.Cart.create(req.body);
      res.status(201).send(cart);
    } catch (error) {
      throw error;
    }
  },
  updateCart: async (req, res) =>{  
    try {
      const cart = await db.Cart.update(req.body, {
        where: { id: req.params.id },
      });

      res.status(201).send(cart);
    } catch (error) {
      throw error;
    }
  },
  deleteCart: async (req, res) => {
    try { 
      const cart = await db.Cart.destroy({
        where: { id: req.params.id },
      });

      res.json(cart);
    } catch (error) {
      throw error;
    }
  },
};
