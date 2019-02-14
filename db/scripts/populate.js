const fs = require('fs')
const glob = require('glob')
const axios = require('axios')

const ENDPOINT = process.env.ENDPOINT

glob(`${process.argv[2]}/*.ipynb`, (err, files) => {
  Promise.all(files.map(file => {
    const content = JSON.parse(fs.readFileSync(file).toString())
    const fileObject = {
      content,
      name: 'Untitled',
      country: Math.round(Math.random() * 100),
      emergency: Math.round(Math.random() * 100)
    }
    return axios.post(`${ENDPOINT}/reports`, fileObject, {
      headers : {'Content-Type': 'application/json'}
    }).catch(err => console.error(err.response.data))
  })).then(results => console.log(`Wrote ${results.length} reports`))
})
