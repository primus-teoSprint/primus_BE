const Theory = require("../models/investIndicator");

exports.createTheory = async (req, res) => {
  try {
    const theory = new Theory(req.body);
    await theory.save();
    res.status(201).json(theory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
