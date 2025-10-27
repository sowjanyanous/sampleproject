const express = require('express');
const app = express();
const PORT = 80;

app.get('/nodejs/*', (req, res) => {
    res.send('Hello from Node.js ECS CI/CD Test! for test');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

