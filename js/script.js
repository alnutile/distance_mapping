// Code goes here

angular.module('app', ['uiGmapgoogle-maps']);

angular.module('app').controller('mainCtrl', function($scope, $http) {
  console.log("Loaded");

   //https://maps.googleapis.com/maps/api/distancematrix/json?origins=Sydney+NSW|Orange+NSW&destinations=Wagga+Wagga+NSW|Dubbo+NSW&sensor=false&key=AIzaSyC5hiEcDp1tm5LisGGS7-rOgWOzvSMAlJ0
  $scope.map = {
    "center": { "latitude": 45, "longitude": -73 }, 
    "zoom": 8
  };

  $scope.distance = $http.get('/js/distance.json').success(
    function(data) {
        $scope.distances = data;
      }
    );
});