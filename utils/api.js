require("dotenv").config();
const axios = require("axios");
const api = {
  getUser(username) {
    const userURL = `https://api.github.com/users/${username}`;
    const config = {
      headers: {
        Authorization: `token ${process.env.API_KEY}`,
      },
    };
    return axios.get(userURL, config);
  },
};
module.exports = api;

// require("dotenv").config();//letting eveeryone know that we are doing the env file
// const axios = require("axios")
// const api = {
//   getUser(username) {
//     const userURL =`https://api.github.com/users/${username}`;
//     const config = {
//       headers: {
//         Authorization: `token ${process.env.API_KEY}`,
//       },
//     };
//     return axios.get(userURL, config);
//   },
// };
// module.exports=api;

    //this is a header to get the email becuase email is secure
//     axios.get(`https://api.github.com/users/${username}`)
//     .then(function(res){
//       const answers = {...res}
//       console.log(res.data.avatar_url);
//         const newData = {...answers, image: res.data.avatar_url, userEmail:res.data.email}
//         console.log(newData);
//         //null and 2, why do we use them? its a format-
//         return writeToFile("Read Me", JSON.stringify(newData,null,2))
      

//     })
//   }
// };

// module.exports = api;
// const config = {
//   headers: {
//     Authorization: `token ${process.env.API_KEY}`,
//   },
// };
// return axios.get(userURL, config);