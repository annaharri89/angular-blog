/**
 * Created by annaharr on 1/19/16.
 */
//Controller for the newEntryForm modal.
angularBlog.controller('NewEntryFormController', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
    $scope.entry = {};
    $scope.entry.datePub = new Date();
    $scope.submitPost = function () {
        $uibModalInstance.close($scope.entry);//Sends data (entry) to parent scope.
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);