import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
