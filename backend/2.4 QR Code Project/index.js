import inquirer from 'inquirer';

inquirer
  .prompt([
    {message:"Type in your URL",
    name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Couldn't render");
    } else {
      console.log(`Something went wrong ${error}`);
    }
  });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
