async function fileOperations(){
    try{
        const fileName= "task.txt";
        const folderName = "AsyncFolder";
        const filePath =Path.join(folderName,fileName);

        await fs.mkdir(folderName);
        await fs.writeFile(filePath,"Task 1: learn npode.js FS module.");
        await fs.appendFile(filePath,"\nTask 2: pratice more examples.");
        const data = await fs.readFile(filePath,"utf-8");
        console.log(data);

        await fs.unlink(filePath);
        await fs.rmdir(folderName);
    } catch(error) {
        console.log(error);
    }
}