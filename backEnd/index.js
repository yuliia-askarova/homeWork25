const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  const arr = req.body;
  const obj = changeData(arr)
  res.json(obj)

})
function changeData (arr){
    const set = new Set();
const map = new Map();

arr.forEach(element => {
    if(element.trim() !== ""){
        element = element.toLowerCase();
        set.add(element);
            if(map.has(element)){
                let count = map.get(element);
                count += 1;
                map.set(element, count)
            } else {
                map.set(element, 1)
    }} 
});

const size = set.size;
const newArray = [];

for (const entry of map) {
    const str = entry.toString().split(',').join(': ')
    newArray.push(str);
  }

return {
    size, newArray
}
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})