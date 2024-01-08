const fs = require("fs");

fs.readFile("note.txt",(err,data)=>{
    if(err){
        return console.log("error ", err.message);
    }
    //console.log(data.toString());
    fs.writeFile("copy.txt",data,(err)=>{
        if(!err){
            console.log("file copied");
        }
    });
});