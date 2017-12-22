const fs = require('fs'),
      csv = require('csvtojson')
      
      const port = 3000
      let jsonData = []
// fs.readFile('customer-data.csv', (error, data) => {
//     if(error) throw error;
//     // console.log(data.toString())
//     console.log(data.toString())

    const csvFilePath='customer-data.csv'
    // const csv=require('csvtojson')
    csv()
    .fromFile(csvFilePath)
    .on('json',(jsonObj)=>{
        jsonData.push(JSON.stringify(jsonObj))
        
    })
    .on('done',(error)=>{
        // jsonData = JSON.parse(jsonData)
        fs.writeFile('customer-data.json', '['+jsonData +']', (err) => {
            if(err) throw err;
            console.log('done')
        })
        // console.log('done')
    })
    

    
    
    
    
    // csv({noheader:true})
    // .fromString(data.toString())
    // .on('csv', (csvRow) => {
    //     // console.log(csvRow)
    //     jsonData.push(csvRow)
    // })
    // .on('done', () => {
    //     console.log(jsonData)
    // })
// })

