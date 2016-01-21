/**
 * Created by annaharr on 1/21/16.
 */

// BlogRestService gets the data from the database. It also will end up being able to send new blog entries to the database.
angularBlog.factory('BlogRestService', ['$resource', function($resource) {
    return $resource("http://127.0.0.1:8000/entries/");
}]);

// TODO: Make it so users posts updates the database