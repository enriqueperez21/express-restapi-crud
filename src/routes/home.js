const router = require('express').Router()

router.all("/about", (req, res)=>{
  const title = "Mi página creada desde Express test"
  res.render('index', {title})
})

router.get("/dashboard", (req, res)=>{
  res.sendFile("Dashboard page")
})

module.exports = router