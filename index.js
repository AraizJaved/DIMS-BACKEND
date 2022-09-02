import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sql from 'mssql';
import _sql from "msnodesqlv8";

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

app.post('/api/araiz', async (req, res) => {
    // const pool = await poolPromise;
    // const result = await pool.request()
    //     .input("FullName", sql.VarChar(50), req.body.fullName)
    //     .input("UserName", sql.VarChar(50), req.body.userName)
    //     .input("Cnic", sql.VarChar(50), req.body.cnic)
    //     .input("ContactNumber", sql.VarChar(50), req.body.contact)
    //     .input("Email", sql.VarChar(50), req.body.email)
    //     .input("Address", sql.VarChar(500), req.body.address)
    //     .input("Password", sql.VarChar(50), req.body.password)
    //     .input("ConfirmPassword", sql.VarChar(50), req.body.confirmPassword)
    //     .input("Gender", sql.VarChar(50), req.body.gender)
    //     .input("Districts", sql.VarChar(50), req.body.district)
    //     .execute("[User]").then((recordSet) => {
    //         res.status(200).json({ status: "Success" })
    //     }).catch((err) => { err.message })

    //     console.log(result)
    var _temp="INSERT INTO [User] (FullName, UserName, Cnic, ContactNumber, Email, Address, Password,ConfirmPassword,Gender,Districts)" +
               "VALUES "+
               "('"+ req.body.fullName +"','"+ req.body.userName+"','"+ req.body.cnic+"','"+ req.body.contact+"','"+req.body.email+"',"+
               "'"+req.body.address+"','"+req.body.password+"','"+req.body.confirmPassword+"','"+req.body.gender+"','"+req.body.district+"')";
    var request = new sql.Request();
    request.query(_temp).then((result) => {
        console.log(result);
        res.send("Recored Saved Successfully");
    }).catch((err) => {
        console.log(err.message)
        console.log("error..........!")
        res.send(err.message)
    })
})



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
