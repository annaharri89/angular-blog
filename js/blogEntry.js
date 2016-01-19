/**
 * Created by annaharr on 1/18/16.
 */
angularBlog.directive("blogEntry", function() {
    return {
        restrict : "E",
        scope : {
            entryInfo : "="
        },
        templateUrl : "html/blogEntry.html"
    }
});
