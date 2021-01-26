const { Router } = require('express')
const router = Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json())

router.get('/', (req, res, next) => {
  console.log("Ürünler gönderildi");
  res.status(200);
  // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});


module.exports = router;