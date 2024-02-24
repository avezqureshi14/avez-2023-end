const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./db/connection');
const categoryRouter = require('./routes/Category');
const blogRouter = require('./routes/Blog');
const userRouter = require('./routes/User');
const bookmarkRouter = require("./routes/Bookmark");
const appRouter = require('./routes/App');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '10mb' })); 
app.use('/user', userRouter);
app.use('/categories',categoryRouter);
app.use('/blogs', blogRouter);
app.use('/bookmark',bookmarkRouter);
app.use('/apps', appRouter);

connectToDatabase();

app.listen(8800, () => {
  console.log('Server started on port 8800');
});