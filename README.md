# Project Overview

In this project i was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! 

I have been able to complete the required test for this application  to ensure future work does not break the existing code base.

# Installation

1. Fork the repository, download it and open the index.html the dist folder in a browser.
2. Or run the "gulp" command from the root directory in the command line as described below on running the build process step 1.

## Usage
1. After the application has been loaded successfully test results will be displayed below in the Jasmine test section


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

1. initially created as part of a frontend nano degree program that was done with Udacity in march of 2016.

## Credits

1. The udacity nano degree team provided the guidance and training i required to complete the initial version of this project.

## License

MIT License

Copyright (c) 2016 Clive Cadogan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# How to set up the build process

1. Install gulp globally: sudo npm install --global gulp-cli
2. Install gulp in project folder: sudo npm install --save-dev gulp
3. Install gulp-sass: sudo npm install gulp-sass --save-dev
4. Install autoprefixer: sudo npm install gulp-autoprefixer --save-dev 
5. Install browser sync globally: sudo npm install -g browser-sync
6. Install browser sync in project folder: sudo npm install browser-sync gulp --save-dev
7. Install eslint: sudo npm install -g eslint
8. Install sublimelinter-contrib-eslint via package control
9. Initialize eslint: eslint --init
10. Install gulp-eslint: sudo npm install gulp-eslint
11. Install eslint-config-google: sudo npm install --save eslint-config-google
12. Install gulp-jasmine: sudo npm install gulp-jasmine
13. Install gulp-concat: sudo npm install gulp-concat
14. Install gulp-uglify: sudo npm install gulp-uglify
15. Install gulp-sourcemaps: sudo npm install gulp-sourcemaps
16. Install gulp-imagemin: sudo npm install --save-dev gulp-imagemin
17. Install imagemin-pngquant: sudo npm install --save imagemin-pngquant
18. Install gulp-gh-pages to deploy to gh-pages with "gulp deploy" or "gulp dist" command: sudo npm install --save-dev gulp-gh-pages

# Running the Build Process

1. Once the build process has been set up as described above navigate to the root directory of the project and type "gulp" and press enter to run the default task this will open the application in the browser.
2. To process source files for distribution and deploy run the following form root directory on the command line: "gulp dist" this will deploy any updates to the project gh-pages.
3. While the application is running via the build process several gulp tasks will be watching for changes and errors in the css, js, html and spec files and update the distribution files automatically. The browser will be refreshed for changes to the index.html.
4. 