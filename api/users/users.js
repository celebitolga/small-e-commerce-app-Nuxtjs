const { Router } = require('express')
const router = Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json())

router.get('/', (req, res, next) => {
  
});


module.exports = router;