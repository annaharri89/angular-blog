/**
 * Created by annaharr on 1/19/16.
 */
angularBlog.controller('NewEntryFormController', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
    $scope.entry = {};
    $scope.entry.datePub = new Date();
    $scope.submitPost = function () {
        $uibModalInstance.close($scope.entry);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);