const router = require('express').Router()
 
router.get('/UserName', (req, res)=>{
  res.send("Username route")
})

router.get('/profile', (req, res)=>{
  res.send('Profile page')
})

module.exports = router