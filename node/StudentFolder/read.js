const fs = require('fs');
fs.readFile('notes.txt','utf-8',(err,data)=>{
    if (err){
        console.error('error reading file',err);
        return;
    }
    console.log('file content');
    console.log(data);
})

// this is for reading the notes text file in the console or terminal
// or display the notes text file