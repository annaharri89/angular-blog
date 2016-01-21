/**
 * Created by annaharr on 1/19/16.
 */
//Controller for the newEntryForm modal.
angularBlog.controller('NewEntryFormController', ["$scope", "$uibModalInstance", "BlogRestService",
    function ($scope, $uibModalInstance, BlogRestService) {
        $scope.entry = {};
        $scope.entry.datePub = new Date();
        $scope.entry.title = "";
        $scope.entry.body = "";
        $scope.alert = false;

        $scope.submitPost = function () {
            if ($scope.entry.title.length >= 1 && $scope.entry.body.length >= 1) {//Form Validation
                BlogRestService.save($scope.entry, function() {
                    $uibModalInstance.close($scope.entry);//Sends data (entry) to parent scope.
                }); //Saves an entry to database.
            }
            else { {{$scope.alert = true }} }
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);