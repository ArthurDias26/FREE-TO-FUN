[JAVASCRIPT__BADGE]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000
[REACT__BADGE]: https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB
[STYLEDCOMPONENTS__BADGE]:https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white
[HTML__BADGE]: https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white
[CSS__BADGE]: https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff
[PROJECT__BADGE]: https://img.shields.io/badge/📱Visit_this_project-000?style=for-the-badge&logo=project
[PROJECT__URL]: https://free-to-fun.vercel.app/

<h1 align="center" style="font-weight: bold;">FREE TO FUN 💻</h1>

![javascript][JAVASCRIPT__BADGE]
![html][HTML__BADGE]
![css][CSS__BADGE]
![react][REACT__BADGE]
![styled components][STYLEDCOMPONENTS__BADGE]

<p align="center">
 <a href="#about">About</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#started">App Routes</a> 
</p>


<p align="center">
    <img src="./src/assets/image/project-preview.png">
</p>

<h2 id="about">📌 About</h2>


Free to Fun is a platform dedicated to helping gaming enthusiasts discover the best free games available. Its goal is to make the search for fun accessible and personalized by offering tools for game research and recommendations that match your style and preferences.

[![visit this project][PROJECT__BADGE]][PROJECT__URL]



<h2 id="started">🚀 Getting started</h2>


To run this application on your machine, make sure you have met all the prerequisites and follow the step below after obtaining an API KEY from (https://www.freetogame.com/api-doc).

<h3>Prerequisites</h3>


- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/downloads)
- [API KEY](https://www.freetogame.com/api-doc)

<h3>Cloning</h3>


```bash
git clone https://github.com/ArthurDias26/FREE-TO-FUN.git
```

<h3>Starting</h3>

After cloning the application, go to <kbd>src/api/request.js</kbd>, insert your API KEY on line 8, and continue with the steps below.

```bash
cd FREE-TO-FUN
npm start
```

<h2 id="routes">📍 Application Routes</h2>


| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>/src/api</kbd>     | Folder containing the file for backend communication with the FreeToGame API
| <kbd>/src/assets</kbd>     | Folder with the necessary external resources, such as images, fonts, and styles.
| <kbd>/src/components/pages</kbd>     | Folder containing all application pages routed using React Router.
| <kbd>/src/components/layout</kbd>     | Folder with all reusable components used within the pages.
| <kbd>/src/contexts</kbd>     | Folder that stores the contexts created with React's Context API.
| <kbd>/src/utilis</kbd>     | Folder containing React Router routing and additional functionalities.




