# lazy-product-slideshow

###Description:
* implement infinite slideshow of products;
* open product details on a click.

###Technical details of what was done:
* Lazy load of data/components from product list;
* CSS loader on load;
* Broken request/image src handling;
* Responsive layout implementation;
* SEO consideration;
* Used Portal for Model;
* Use of SASS features;
* Added 100% tests for ProductTile component and array util;
* Made fitting of images with an incorrect ratio to tile;
* Slide change after each 12 sec.

### How to run 
* run `npm install` to install all dependencies;
* run `npm start` to open the web page;
* run `npm test` to run tests with coverage;
* run `npm build` to build the project.

###Found issues:
* provided JSON was incorrect (no double quotes for keys);
* images can have different ratios (e.g. Nike Air Max 97);
* no h1 on designs (it should be visible otherwise it's a violation). Didn't add as assume that I've made just part of the page.

###If there would be more time/requirements than:
* would finish fully functionality (stop animation of modal open, improve FOC, resize and etc.);
* would add prop types checking + default prop values with Prop Types;
* would add prettier, eslint;
* would add all tests;
* would make a re-factoring (move to global constants paths/urls/digits, revise the folder structure and etc.);
* would add error boundaries;
* would profile and check if there would be better to use different techniques for performance (if styles.css should be in the DOM and etc.).
