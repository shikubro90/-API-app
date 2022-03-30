// Title : Handeler Request responce 
// Destiption : Handeler Reqest and responce
//  Date 27-02-2022

const url = require('url');
const { StringDecoder } = require('string_decoder');
const handeler = {}

handeler.handelerReqRes = (req, res)=>{

    const paths = url.parse(req.url, true)
    const pathName = paths.pathname;
    const trimedPath = pathName.replace(/^\/+\/+$/g, '');
    const methods = req.method.toLowerCase();
    let data = "";
    const decoder = new StringDecoder('utf-8')

    req.on('data', (buffer)=>{
        
        data += decoder.write(buffer) 
    })

    req.on('end', ()=>{
        data += decoder.end()
        console.log(data)
        res.end("Hello worlds") 
    })
}

module.exports = handeler;

