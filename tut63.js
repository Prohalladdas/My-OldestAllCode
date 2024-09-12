// console.log("Hello funky world");
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Naruto Uzumaki');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Befor and after pseudo selectors</title>
      <style>
          body {
              margin: 0px;
              padding: 0px;
              background-color: black;
              color: aliceblue;
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
  
          header::before {
              background-image: url(https://i.pinimg.com/originals/6d/7a/33/6d7a33e1508e3af509b5503ff7676133.jpg);
              background-size: cover;
              background-repeat: no-repeat;
              content:"";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              opacity: 0.5;
          }
  
          .navigation {
              font-size: 15px;
              display: flex;
          }
  
          li {
              list-style: none;
              padding: 20px 20px;
          }
  
          section {
              height: 322px;
              margin: -0px 180px;
              display: flex;
              flex-direction: column;
              text-align: center;
              /* border: 2px solid red;   */
              justify-content: center;
  
          }
  
          h1 {
              font-size: 3rem;
              height: 30px;
          }
  
          /* section::before{
              content: "This is contant";
          } */
          p {
              text-align: center;
              font-size: 22px;
          }
      </style>
  </head>
  
  <body>
      <header>
          <div class="navber">
              <ul class="navigation">
                  <li class="item1">Home</li>
                  <li class="item2">About</li>
                  <li class="item3">Service</li>
                  <li class="item4">Contact Us</li>
              </ul>
  
          </div>
      </header>
      <section>
          <h1>Welcome to Coding World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus quaerat quod labore impedit eveniet
              iusto, recusandae ea ipsam ipsum nisi expedita. Perferendis temporibus quibusdam consequatur ratione aut in
              esse.</p>
      </section>
  </body>
  
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});