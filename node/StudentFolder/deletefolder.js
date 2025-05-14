const fs = require('fs');
 fs.mrdir('StudentFolder',(err) => {
    if(err){
        console.error('error deleting folder',err);
        return;

    }
    console.log('folder deleted sucessfully!');
 })
 // this is for deleting the folder     mrdir
