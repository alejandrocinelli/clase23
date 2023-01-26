import express , {json} from 'express'; 
import cookieParser from "cookie-parser";
import routes from './routes/index.js';

// ejemplo de como usar cookie-parser en express 
// https://www.npmjs.com/package/cookie-parser

const app = express(); 
app.use(json())
// le pasamos una secret para que nos genere la cookie autenticada signed
app.use(cookieParser("alex"));

app.use(routes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

