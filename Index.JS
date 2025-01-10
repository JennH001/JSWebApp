const express = require(`express`)
const app = express();
const path = require('path')

const PORT= process.env.PORT || 5000
app.use(express.static('public'))

app.listen(PORT,()=> {
    console.log(`server is running`)
})

const API_KEY = 'live_4qrnUQkgwm58B1UCVpSgDJJu1qC9GVkUeQ8c6p4SKXaKHiOjjKtZm9Q98JrQGYUu';
const URL= `https://api.thecatapi.com/v1/images/search?limit=10`
 
app.use(express.static(path.join(__dirname, 'public')))
app.get('/api/cats', async (req, res)=>
{
try {
	const response = await fetch(URL,{
        method: 'GET',
        headers: {
            'x-api-key': API_KEY 
        }
    });
 const cats = await response.json()
 res.json(cats)
} catch (error){
    console.error('error', error)
}})

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname,'public','index.html'))
})



