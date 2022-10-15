const to_find = "1674887089";

const fs = require('fs')
async function ls(path) {
  const dir = await fs.promises.opendir(path)
  for await (const dirent of dir) {
    const content = fs.readFileSync("./decompiled_scripts/" + dirent.name)
    if (content.includes(to_find))
        console.log("Found in " + dirent.name)
  }
}

ls('./decompiled_scripts').catch(console.error)