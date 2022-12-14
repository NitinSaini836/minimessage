var express = require('express');
var router = express.Router();

const messages = [ 
  { 
    text: "Hi there!", 
    user: "Amando", 
    added: new Date() 
  }, 
  { 
    text: "Hello World!", 
    user: "Charles", 
    added: new Date() 
  } 
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});
router.get('/api/new',(req,res)=>{
  res.render('new.ejs')
})
router.post('/api/new',(req,res)=>{
  console.log(req.body);

  messages.push( { user: `${req.body.user}`, text: `${req.body.text}` } );
  res.render('index', { messages: messages });


})

module.exports = router;
