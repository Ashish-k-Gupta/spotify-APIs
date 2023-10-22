//imports
const express = require('express')
const app = express();
const port = 8080;

app.use(express.static('public'))
app.use('/CSS', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/images', express.static(__dirname + '/public/images'))

//static files
// app.set('views', './views');
// app.set('view engine', 'html');

//This display my html files
app.get('',(req, res)=> {
    res.sendFile(__dirname + "/view/web.html")
})

app.get('/logged', (req, res) => {
    res.sendFile(__dirname + "/views/logged.html")
})

//listen on port 8080

app.listen (port, () => console.info ('listening on port ${port}'));


console.log('Hello, world')