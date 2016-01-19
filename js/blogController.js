/** Created by annaharr on 1/19/16. ...*/
angularBlog.controller("BlogController", ["$scope", function($scope) {
    $scope.entries = [
        {
            title : "The First Post",
            datePub : new Date("2015", "10", "18"),
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tellus nibh, tincidunt ut commodo ac, consequat eu libero. Sed vitae facilisis elit. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tempus imperdiet nisl. Aenean eget erat eget ipsum tincidunt hendrerit a sed dui. In consequat magna ac luctus lacinia. In in libero nec risus cursus cursus non sodales nibh. Pellentesque faucibus laoreet massa, at tincidunt velit faucibus eu. Phasellus efficitur nisi mattis feugiat venenatis. Maecenas porttitor sem non libero vulputate, a aliquet tellus vehicula. Donec rhoncus quam sit amet urna rhoncus faucibus. Sed sodales turpis non orci tristique, sed mollis dolor congue. Aliquam lobortis ipsum mi. Mauris aliquam libero ac venenatis venenatis. Suspendisse nisl mi, vulputate quis neque eget, lacinia tincidunt nisl. Quisque aliquam lacus quis libero finibus, quis scelerisque dui euismod. Curabitur in vestibulum dui. Suspendisse eget nulla mauris. Curabitur vestibulum vehicula ex ac lobortis. Suspendisse gravida sodales neque, ac tempus eros sollicitudin non."
        },
        {
            title : "Second Post, Awwww Yeah",
            datePub : new Date("2015", "11", "17"),
            content : "Vivamus magna sem, tristique id posuere in, fringilla in arcu. Proin eleifend nisl eu felis facilisis, in ultrices enim commodo. Suspendisse molestie justo magna, sed iaculis felis tristique quis. Duis egestas rutrum lacinia. Curabitur congue, velit non suscipit consectetur, enim lacus bibendum nibh, sit amet auctor enim ipsum vitae lorem. Vestibulum non tellus quis tortor sollicitudin pulvinar eget sit amet orci. Integer odio odio, maximus ac lorem ut, volutpat luctus justo. Vestibulum feugiat turpis turpis, eu mollis dolor lacinia vitae. Fusce aliquam bibendum elementum. Etiam sit amet magna sit amet elit porttitor vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque massa est, consectetur eget posuere sed, congue quis arcu. Morbi efficitur congue metus faucibus maximus. Quisque interdum tincidunt scelerisque. Pellentesque varius elit ac erat faucibus, quis commodo libero interdum."
        }
    ]

}]);