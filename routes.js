import Express from 'express';


const app = Express();


app.post('/araiz', async (req, res) => {
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
    // var _temp="INSERT INTO [User] (FullName, UserName, Cnic, ContactNumber, Email, Address, Password,ConfirmPassword,Gender,Districts)" +
    //            "VALUES "+
    //            "('"+ req.body.fullName +"','"+ req.body.userName+"','"+ req.body.cnic+"','"+ req.body.contact+"','"+req.body.email+"',"+
    //            "'"+req.body.address+"','"+req.body.password+"','"+req.body.confirmPassword+"','"+req.body.gender+"','"+req.body.district+"')";
    // var request = new sql.Request();
    // request.query(_temp).then((result) => {
    //     console.log(result);
    //     res.send("Recored Saved Successfully");
    // }).catch((err) => {
    //     console.log(err.message)
    //     console.log("error..........!")
    //     res.send(err.message)
    // })
    res.send('okkkkkkkkzzzzzzzzz!');
})


app.post("/me",(req,res)=>{
    res.send("ok////////////////////!")
})
app.post("/you",(req,res)=>{
    res.send("o////////!")
})

export default app; 