const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 3001
const path = require('path')

const _dirname = path.resolve();

const cors = require('cors')
const router = require('./Routes/router')

const corsOption = {
  origin: "https://todo-mern-app-4i4g.onrender.com",
  Credential: true
}
app.use(cors(corsOption));
app.use(express.json());
app.use(router);
app.use(express.static(path.join(_dirname, "/Frontend/build")));
app.get('*', (req, res)=>{
  res.sendFile(path.resolve(_dirname, "Frontend" ,"build", "index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


