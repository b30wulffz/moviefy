# MovieFy

MovieFy is a movie rating plaform, powered by React.

# New Features!

  - Added an option to Add Movie
  - On changing rating or after adding a movie, a popup with JSON will appear

You can also:
  - See movies in the form of tiles
  - Open each movie in separate section
  - Rate each movie

`Note: This website will only run on full screen mode on desktop as it is **not resposive** as of now.`

### Tech

MovieFy uses a number of open source projects to work properly:

* [ReactJS] - A Javascript Framework
* [Movie API] - API to fetch movies
And of course MovieYy itself is open source with a [public repository][dill]
 on GitHub.

### Installation

MovieFy requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ #clone moviefy.
$ cd moviefy
$ npm install
$ npm start
```

For production environments...

 - Install gh-pages *(Google it)*
 - Setup ```homepage: https://[your-user-name].github.io/[your-repo-name]/``` in package.json
 - Setup ```"predeploy": "npm run build", "deploy": "gh-pages -d build"``` in "scripts" of package.json 
 - Run: ```$ npm run deploy```


### Development

Want to contribute? Great!
You are welcome to contribute and increase the features on this website.

### Todos

 - Integrate Front End with Back End
 - Add Login and Sign Up Authentication
 - **Make website responsive**

License
----

[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/b30wulffz/moviefy>
