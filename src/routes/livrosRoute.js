const express = require("express");
const router = express.Router();
const controller = require("../controller/livrariaController");

router.get("/", controller.getAll);
router.get("/livros", controller.getAll);
router.get("/:id", controller.getByIdLivros);
router.get("/:genero", controller.getByIdGeneroLivros);
router.post("/", controller.postLivro);
router.delete("/:id", controller.deleteLivro);
router.put("/:id", controller.putLivro);
router.patch("/:id", controller.patchLivro);

module.exports = router;