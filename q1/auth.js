const axios = require('axios');
const fs = require('fs');

const data = {
  companyName: "ASJ",
  clientID: "2897a431-2c25-4444-9cef-25f59bd954c1",
  clientSecret: "oMxVJkgXiJyPWuEj",
  ownerName: "Ayushmaan",
  ownerEmail: "2021a1r052@mietjammu.in",
  rollNo: "2021a1r052"
};

axios.post('http://20.244.56.144/test/auth', data)
  .then(response => {
    fs.writeFile('auth.json', JSON.stringify(response.data, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Response saved to auth.json');
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
