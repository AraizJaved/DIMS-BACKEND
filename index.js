import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sql from 'mssql';
import _sql from "msnodesqlv8";
import router from './routes.js';
const config = {
    user: "muddasir",
    password: 'abc@123',
    server: "172.16.15.5",
    database: "DIMS",
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
};

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

sql.connect(config)
    .then(pool => {
        console.log('Connected to MSSQL')
        return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err.message))
app.use('/api',router)

// app.post('/api/signup', async (req, res) => {
//     console.log(req.body);
//     const login = await Signup.findOne({ email: req.body.data.email })
//     if (login) {
//         res.statusCode = 400;
//         res.setHeader('Content-Type', 'application/json');
//         res.send('user exists');
//     } else {
//         const signup = await Signup.create(req.body.data)

//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.send(signup);
//     }
// })


// app.post('/api/login', async (req, res) => {
//     console.log(req.body.data.email);

//     // const login = await Signup.findOne({ email: req.body.data.email, password: req.body.data.password })
//     console.log(login);
//     // if (login == null) {
//     //     res.statusCode = 404;
//     //     res.setHeader('Content-Type', 'application/json');
//     //     res.send('user not exists');
//     // } else {
//     //     console.log('....................');
//     //     res.statusCode = 200;
//     //     res.setHeader('Content-Type', 'application/json');
//     //     res.send(login);
//     // }
//     res.send("ok");
// })


// app.post('/api/signup', (req, res) => {
//     // console.log(req.body);


//     // res.send(seprated)
//     res.send("ok");
// })

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}....`));
