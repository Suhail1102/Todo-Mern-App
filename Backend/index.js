const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 3001
const path = require('path')

const _dirname = path.resolve();

const cors = require('cors')
const router = require('./Routes/router')

app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.static(path.join(_dirname, "/Frontend/build")));
app.get('*', (req, res)=>{
  res.sendFile(path.resolve(_dirname, "Frontend" ,"build", "index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


