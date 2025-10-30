const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
    res.send('Hello from Node.js ECS CI/CD Test! test44');
});  

/*
app.get(['/nodejs*', '/nodejs/*'], (req, res) => {
    res.send('Hello from Node.js ECS CI/CD Test! for test222');
});
*/

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

