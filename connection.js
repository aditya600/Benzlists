const https = require('https');

https.get('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/WDDGF81X39F247455?format=json', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });


}).on("error", (err) => {
    console.log("Error: " + err.message);
});
