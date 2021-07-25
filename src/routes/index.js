const express = require('express');
const router = express.Router();
router.get('/', (req, res) => { 
res.status(200);
console.log('obaa');
//     success: 'true',
//     message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + pipipopo!',
//     version: '1.0.0',
//   });
res.render('index');
 });
module.exports = router;