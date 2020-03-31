var scraper = require('table-scraper');
var csvjson = require('csvjson');
var fs = require('fs');

scraper
  .get('https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/situation-coronavirus-in-quebec/')
  .then(function(tableData) {
      const csv = csvjson.toCSV(tableData)
      const d = new Date()
      const month = d.getMonth() + 1
      const date = d.getDate()
      const year = d.getFullYear()
      const displayDate = `${date}-${month}-${year}`
      const fileName = `${displayDate}_covid19QC.csv`

      fs.writeFile(fileName, csv, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  });
