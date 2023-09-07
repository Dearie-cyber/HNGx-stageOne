const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

const user = JSON.parse(
    fs.readFileSync(`${__dirname}/data.json`)
)

const getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: user.length,
        data: {
            user
        }
    });
};

app.get('/api/v1/user', getUser);
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});