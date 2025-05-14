const fs = require('fs');

fs.unlink('notes.txt',(err)=>{
    if (err){
        console.error('error deleting file',err);
        return;
    }
    console.log('file Deleted successfully')
})
//this for deleting the file! unlink