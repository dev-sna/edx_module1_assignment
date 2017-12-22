const fs = require('fs'),
      csv = require('csvtojson')
      
      const port = 3000
      let jsonData = []

    const csvFilePath='customer-data.csv'
    // const csv=require('csvtojson')
    csv()
    .fromFile(csvFilePath)
    .on('json',(jsonObj)=>{
        jsonData.push(JSON.stringify(jsonObj))
        
    })
    .on('done',() => {
        // jsonData = JSON.parse(jsonData)
        fs.writeFile('customer-data.json', '['+jsonData +']', (err) => {
            if(err) throw err;
            console.log('done')
        })
        
    })
    