####This file is to document what I've done so far.


#File System:

## 4. Component.js > 3. App.js > 2. index.js > 1. index.html (Public View)

##1.index.html 

* Everything is rendered in the root div `<div id="root"></div>` 

##2.index.js

* React DOM renders <App /> (App.js) in the root div
* ReactDOM.render(<App />, document.getElementById('root'));

##3.App.js 

* App.js renders the different <Components />
* `function App() {return (<Component />);} export default App;`

##4.Component.js


-- 
###Problem Rendering Background Image

When I try to render the background image in a non-public folder, it doesn't render. But when placing the image and style.css file in the PUBLIC folder, it works. Why?

From the index.html file

      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.



