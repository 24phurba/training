const fs = require('fs');

fs.appendFile('notes.txt','\nadding another line to my note',(err)=>{
    if(err){
        console.error('error appending to file',err);
        return;
    }
    console.log('appended succesfully')
    })

    // this is for appending the text to the notes.text file 