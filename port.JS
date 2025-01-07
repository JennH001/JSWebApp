const app = express();
const express = require (`express`)
const PORT= process.env.PORT || 5000
app.use(express.static('public'))

app.listen(PORT,()=> {
    console.log(`server is running`)
})