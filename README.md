# NxChat
Simple chat application using websocket  

Monorepo: Nx  
Backend: Nestjs  
Frontend: Angular  
Css toolkit: TailwindCss  

https://github.com/madipta/nx-chat/blob/master/apps/web/src/assets/screenshot/screenshot-min.png

## How to Install

clone project
`git clone https://github.com/madipta/nx-chat.git`

go to nx-chat folder and install packages
```
cd nx-chat
run npm install or yarn
```


## How to Run

install nx cli globaly if you haven't installed
`npm install -g nx`

run angular web server
`nx serve`

run nest api server
`nx serve api`


## Demo

open  http://localhost:4200 in two or more different browser with different user, ex:
 No | Browser | Username
----|---------|---------
  1 | Chrome  | vima
  2 | Firefox | carl

available username is hardcoded in data/user-list.ts  
vima, carl, sal, giu, tony, vingi, alevo, luci  
no password is required  

USE DIFFERENT BROWSER!  
because this sample application using local storage  to remember user auth  

*chat message is not persistance so it will disapear after refresh or go to another link*

