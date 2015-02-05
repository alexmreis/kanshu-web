'use strict';

/**
 * @ngdoc overview
 * @name kanshWebApp
 * @description
 * # kanshuWebApp
 *
 * Main module of the application.
 */
angular
  .module('kanshuWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'kanshuWebApp.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/articlesFeed.html',
        controller: 'ArticlesFeedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
