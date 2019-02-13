const fs = require('fs')
const glob = require('glob')
const axios = require('axios')

const ENDPOINT = process.env.ENDPOINT

glob(`${process.argv[2]}/*.ipynb`, (err, files) => {
  Promise.all(files.map(file => {
    const content = fs.readFileSync(file).toString()
    const parsedContent = JSON.parse(content)
    const fileObject = {
      content,
      name: 'Untitled',
      country: Math.round(Math.random() * 100),
      emergency: Math.round(Math.random() * 100)
    }
    return axios.post(`${ENDPOINT}/reports`, fileObject, {
      headers : {'Content-Type': 'application/json'}
    })
  })).then(results => console.log(`Wrote ${results.length} reports`))
})
