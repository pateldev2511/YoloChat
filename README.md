# YoloChat (ModenUi Chat App)
### Description
YoloChat is a modern chat application built using NodeJS, React, and MongoDB. This app is designed to provide users with an intuitive and user-friendly interface that makes chatting with friends and family a breeze. The app leverages the Multiavatar API to set a unique profile picture for each user.

With YoloChat, users can create an account and easily connect with their friends, family, or colleagues. The app allows users to create and join chat rooms, send messages, and share files. The user interface is designed to be intuitive and easy to use, with a clean and modern design that will appeal to users of all ages.

One of the standout features of YoloChat is the use of the Multiavatar API to generate unique profile pictures for users. This API generates avatar images based on a user's name and color scheme, resulting in a highly personalized and unique profile picture for each user.

YoloChat is built using NodeJS for server-side scripting, React for front-end development, and MongoDB for database management. The app is highly scalable and can handle a large number of users without compromising performance.

In summary, YoloChat is a modern and highly customizable chat app that provides users with a user-friendly interface, personalized profile pictures, and a range of features to enhance their chat experience. With YoloChat, users can stay connected with friends and family in a fun and intuitive way.
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

## Chat UI

![image](https://user-images.githubusercontent.com/57655776/223530347-f673cdf0-2f70-4255-b6f5-3ccf4336cb55.png)

## Demo

![ezgif com-optimize](https://user-images.githubusercontent.com/57655776/223533547-11c5aea2-6cb8-49be-b1ee-f972d6198e99.gif)
