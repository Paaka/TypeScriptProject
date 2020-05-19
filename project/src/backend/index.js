const express = require('express');
const noteRouter = require('./routers/notesRouter');
const SigninRouter = require('./routers/SigninRouter');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(noteRouter);

app.use(SigninRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
