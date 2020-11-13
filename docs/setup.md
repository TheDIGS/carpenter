# Setting up Carpenter

This is a guide on setting up Carpenter and running it.

### Cloning this repo

- Navigate to the download button in the main repo.
- Click on **"Download ZIP"**. GitHub will download the repository to your downloads folder.
- Open the zip file and extract the **/src/** folder. You don't need anything else.

### Setting the bot

Once you're in your chosen editor with the src folder opened, follow these steps.

- Create a file in the root and name it **.env**. Inside this file, write the following: 
```
token = "YOUR_BOT_TOKEN_HERE"
```
(If you haven't got a bot yet, create an application [here](https://discord.com/developers/applications).)

- If you know how [Klasa](https://klasa.js.org) works, you can edit `config.js` with your preferred options.

- Finally, inside your console (Bash, Powershell etc.), run the command `npm start` and your bot should be up and running.