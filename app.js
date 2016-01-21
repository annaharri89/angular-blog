/** Created by annaharr on 1/19/16. ...*/
var angularBlog = angular.module("angularBlog", ["ui.bootstrap", "ngResource"]);

angularBlog.config(function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}); //This prevents removal of the '/' that Django expects from the resource url.