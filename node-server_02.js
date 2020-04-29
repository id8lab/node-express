const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('CP5310 node intro');
  })
  
  app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About CP5310')
  })

  app.get('/about*', (req,res) => {
    // send content....
  }) app.get('/about/contact', (req,res) => {
    // send content....
  }) app.get('/about/directions', (req,res) => {
    // send content....
  })

// custom 404 page
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))