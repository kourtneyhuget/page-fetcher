// input is URL & local file path on command line
// output is downloading resource to specified pass


const request = require('request');
const fs = require('fs');

const argument = process.argv.slice(2);
const urlInput = argument[0];
const specifiedPath = argument[1];

request(urlInput, (error, response, body) => {
  if (error) {
    console.log("Failed to make request");
    process.exit;
  }
  fs.writeFile(specifiedPath, body, (err) => {
    if (err) throw err;
    const stats = fs.statSync(specifiedPath);
    const fileSizeInBytes = stats["size"];
    console.log(`Downloaded and saved ${fileSizeInBytes} to ${specifiedPath}`);
  });
});



// error
// if local file path given already exits --> overwrite the file (.fswriteFile())
// local file path given invalid --> File path invalid 
// URL results in an error or non-200 result? --> terminate the app and ;
