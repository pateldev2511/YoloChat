# YoloChat (ModenUi Chat App)

## Installation

Install NodeJS 
- command to install nvm (Mac/Linux)
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
- Windows
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
- Reopen the terminal/cmd then type
```sh
source ~/.bashrc
```
- list of all NodeJS versions 
```
nvm ls-remote
```
-  Install the version you like `v18.14.2` [Recommended]
```
nvm install 18.14.2
```
- Check the version
```
node -v
```
- Clone the repo
```
git clone https://github.com/pateldev2511/YoloChat.git
```
## Server
- goto `server`
```
cd server
```
- install modules in `server`
```
npm install
```
- change the values in `.env` depanding on your settings
```
PORT=<PORTNUMBER> // Recommanded 5000
MONGO_URL= <MongoDB_LINK> // e.g: "mongodb://127.0.0.1:27017/chat"
```
-  start `server`
```
- npm start
```
## Fornt-End
- open another `terminal` goto `public`
```
cd public
```
- install modules in `public`
```
npm install
```
-  start `react-app`
```
- yarn start
```
- ✨Boom! Enjoy :)✨


# Screenshots

## Login 

![image](https://user-images.githubusercontent.com/57655776/223529262-ddb254a4-a76e-47fa-81d2-de42820bab3f.png)

## Register

![image](https://user-images.githubusercontent.com/57655776/223529445-ce81b2bc-a451-41b0-b4dd-094454946a7b.png)

## Set Profile

![image](https://user-images.githubusercontent.com/57655776/223529830-da39e376-77ef-4e6b-99c5-09a18c2bc609.png)

##Chat UI

![image](https://user-images.githubusercontent.com/57655776/223530347-f673cdf0-2f70-4255-b6f5-3ccf4336cb55.png)

##Demo

![ezgif com-optimize](https://user-images.githubusercontent.com/57655776/223533547-11c5aea2-6cb8-49be-b1ee-f972d6198e99.gif)
