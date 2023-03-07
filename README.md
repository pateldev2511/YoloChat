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
