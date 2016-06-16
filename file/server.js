var express=require("express");

var multer=require("multer");

var app=express();

app.use(express.static("app"));
/*

app.use(multer({dest:'uploads/',filename:function(file,req,cb){
    cb(null, file.originalname);
}}).any());

*/

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/LMS/fileupload/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

app.get('/', function(req, res)
{
    res.sendFile(__dirname + '/app/fileupload.html');

});

app.post("/file",upload.any(),function(req,res)
{
    console.log(req.files);
    res.send("sucess");

});

app.listen(1111,function()
{
    console.log("server is start....");

});