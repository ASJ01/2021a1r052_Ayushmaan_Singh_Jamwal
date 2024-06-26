const axios = require('axios');
const fs = require('fs');

const registerPayload = {
  companyName: "Rakshitgupta",
  ownerName: "Rakshit",
  rollNo: "2021a1r050",
  ownerEmail: "guptarakshit9858@gmail.com",
  accessCode: "PdeDGR"
};

axios.post('http://20.244.56.144/test/register', registerPayload)
  .then(response => {
    const jsonResponse = response.data;
    fs.writeFile('response.json', JSON.stringify(jsonResponse, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file', err);
      } else {
        console.log('Response saved to response.json');
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
