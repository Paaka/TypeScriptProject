const express = require('express');
const noteRouter = require('./routers/notesRouter');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(noteRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
