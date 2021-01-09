# NxChat
Simple chat application using websocket  

Monorepo: Nx  
Backend: Nestjs  
Frontend: Angular  
Css toolkit: TailwindCss  


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


## License

Free for good not for evil

Copyright (c) 2020 Madipta

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
