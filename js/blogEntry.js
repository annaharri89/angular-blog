/**
 * Created by annaharr on 1/18/16.
 */
/*The blogEntry directive allows html files to create a <blog-entry> element
which displays the blogEntry html template. It's only used once in the app,
but it would be very useful in an app with multiple blogs to cut down on code*/
angularBlog.directive("blogEntry", function() {
    return {
        restrict : "E",
        scope : {
            entryInfo : "="
        },
        templateUrl : "html/blogEntry.html"
    }
});
