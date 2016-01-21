/** Created by annaharr on 1/19/16. ...*/
angularBlog.controller("BlogController", ["$scope", "$uibModal", "BlogRestService", function($scope, $uibModal, BlogRestService) {
    $scope.entries = [];

    var entries = BlogRestService.get(function() {
        $scope.entries = entries.results;//Gets the array of results. This might break if backend is changed.
    }); //query() returns all the entries

    //Instantiating the New Entry Form modal.
    $scope.open = function () {

        var modalInstance = $uibModal.open({
            templateUrl: 'html/newEntryForm.html',
            controller: 'NewEntryFormController',
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalInstance.result.then(function (entry) {
            //Resets array so that new blog entries will show up at the top of the page.
            entries = BlogRestService.get(function() {
                $scope.entries = entries.results;
            });
        });
    };
}]);


