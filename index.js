// HINTS:
// To start the server type the following command in the terminal: nodemon index.js
// 1. Import express and axios
import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

// 2. Create an express app and set the port number.
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send("Something went wrong!");
  }
});

// 3. Use the public folder for static files.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 4. When the user goes to the home page it should render the index.ejs file.


// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
