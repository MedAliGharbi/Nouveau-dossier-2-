const db = require('../model/index');
module.exports = {
  getAll: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      res.status(200).send(products);
    } catch (error) {
      throw error;
    }
  },

  postProduct: async (req, res) => {
    console.log(req.body)
    try {
      const product = await db.Product.create(req.body);
      res.status(201).send(product);
    } catch (error) {
      throw error;
    }
  },

  updateProduct: async (req, res) => {
    try {
      const product = await db.Product.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(201).send(product);
    } catch (error) {
      throw error;
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await db.Product.destroy({ where: { id } });

      if (deleted) {
        res.status(200).send(" deleted successfully");
      } else {
        res.status(404).send("not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
};
