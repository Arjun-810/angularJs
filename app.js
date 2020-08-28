(function(){
    'use strict';

    angular.module('myFirstApp',[])
        .controller('myFirstController', myFirstController);
    
    myFirstController.$inject = ['$scope'];

    function myFirstController($scope){
        $scope.dishes = '';
        $scope.message = '';

        $scope.checkLunch = function(){
            if($scope.dishes.trim().length == 0){
                $scope.message = "empty";
            }
            else{
                var arrayDishes = $scope.dishes.split(',');
                var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
                    return v.trim() !== '';
                });
                if (arrayDishesWithoutEmptys.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        } 
        }
})();