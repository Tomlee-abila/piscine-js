import fs from 'fs/promises'

const getContent = async fileName =>{
    const content = await fs.readFile(fileName, 'utf-8')
    return `${content} is my content`
}
console.log(await getContent('myfile.txt'))