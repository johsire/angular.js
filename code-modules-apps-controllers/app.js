// Rem NOT to pollute the Global Namespace;
// We'll only put ONE Variable into the Global Namespace - our App(we named our Variable "myApp");
// Inside the AngularJs Source code, there's a Global Angular Object which contains useful code, e.g - module, controller, e.t.c (which are functions)

// Module takes a Name(your app name) & An Array of Dependencies;
var myApp = angular.module('angularApp', []);

// Now we have ONLY ONE Object in the Global Namespace - named 'myApp' and its an Angular module(a.k.a an App);

// Remember model(Data & Objects) want to be connected to the View automatically(the MV* concept)
// We need to point/(tell/link/bind) Angular where in the 'View'(or HTML/DOM) our App('myApp') lives (the View is in the HTML file)
// This is to say what part of the View/(HTML/DOM) is going to be controlled by the APP/(Angular)
// The pointer code in our html file will look like this (ng-app = 'angularApp')

// From now on EVERYTHING else we add will be to our app variable, i.e. underneath the myApp Object. NOT to pollute the Global Namespace & takes advantage of all the special things the angular module can do

// 1st thing to do is Declare a Controller;
// Controller is an angular in-built fn & is made available to us thru the myApp which is now an angular module (as defined above)
// This controller Obj or Fn is defined inside the AngularJs code we injected in the project(found in our index.js file).
// Takes a Name & Function
// The function is a block/container we can use to put the code associated with our controller
// This is the CONTROLLER for the VIEW & we're looking to connect the View to the Model
// After the link is established, any code written in the Controller Function block/container(in our app.js file) will be associated with controlling the HTML/code inside our HTML controller Custom Attribute block/container(found in our index.html file)

// The code block in the controller- "mainController"(defined below) is the MODEL and the code block in the HTML custom attribute (ng-controller="mainController") (defined in our index.js file) is the VIEW

// AngularJs will keep our MODEL & VIEW BOUND/Linked to each-other for us; When we make changes in one side, we don't need to manually update the other side; Angular does it automatically for us
myApp.controller('mainController', function () {});


// We now have the bare bones of an Angular Js Application
// 1) A Module with just ONE Variable sitting in the Global Namespace- var = myApp
// 2) Controller with the same app ("angularApp") defined in the HTML using the Custom Attributes(ng-app="angularApp" & ng-controller="mainController")