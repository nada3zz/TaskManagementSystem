const express = require('express');
const cors = require('cors')
const { apiBaseRouter } = require('./app/api/routes');
const { NotFoundException } = require('./utils/execeptions');


const app = express();
const port = 3000;

app.use(cors({
    origin: "*",
    maxAge: 86400
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiBaseRouter);

app.use("**", (req, res, next) => {
    throw new NotFoundException(`Cannot ${req.method} ${req.originalUrl}` );
});


app.use((err, req, res, next)=>{
    err.statusCode = err.statusCode ?? 500;
    if(err.statusCode == 500) console.log(err)
    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.statusCode == 500 ? "internal server error" : err.message,
        data: null
    })
})


app.listen(port, ()=> {
    console.log(`App is listening on port ${port}`)
});