var express=require('express');
var multer = require('multer');
var app = express();
app.use(express.static("app"));
var upload=(multer({dest:'./uploads/'}));
/*
app.use(router);
var fs = require('fs');

*/
/*

router.post('/upload', upload.single('recfile'), function (req,res) {
    var tmp_path = req.files.recfile.path;
    console.log(tmp_path);
    var target_path = 'uploads/' + req.files.recfile.name;
    fs.readFile(tmp_path, function (err, data) {
        fs.writeFile(target_path, data, function (err) {
            res.render('complete');
        })
    });
});

*/

app.post('/upload',upload.single('photo'), function (req, res)

{
    //var form_description = req.body.description;
    console.log(req.file);
    //  insert operations into database get placed here
    res.redirect('/');

});

    app.listen(1112,function(){
        console.log("server is start....");
    });
