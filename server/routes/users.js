var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    users:[
      {id:1 , name:'Aslan1' },
      {id:2 , name:'Aslan2' },
      {id:3 , name:'Aslan3' },
      {id:4 , name:'Aslan4' },
      {id:5 , name:'Aslan5' },
    ]
  })
});

module.exports = router;
