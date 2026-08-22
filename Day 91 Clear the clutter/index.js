// you have to write a Node.js program to clear clutter inside of a directory and organize the content of the directory 
// into diiferent folders 


// for example , these files become:


// 1. name.jpg
// 2. name.png
// 3. ayush.png
// 4. ayush.jpg
// 5. ayush.zip
// 6. rohan.zip

// this:

// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// zip/ayush.zip
// zip/rohan.zip
// pdf/ayush.pdf

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let files = await fs.readdir("D:\\Web Dev\\Day 91 Clear the clutter")
console.log(files)

const basepath = "D:\\Web Dev\\Day 91 Clear the clutter"


for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]


    if (ext != "js" && ext != "json" && item.split(".").length > 1) {




        if (fsn.existsSync(path.join(basepath, ext))) {

            //move this file to this directory
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
             fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}