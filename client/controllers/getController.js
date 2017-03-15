module.export = function (cRoute) {
  cRoute = cRoute.replace('/', '');
  cRoute = '/' + cRoute + '/';

 return function ($scope, $http) {

    function initData() {
      $scope.allData = {};
      $scope.Data = {};
      $http.get(cRoute).then(function (response) {
        $scope.allData = response.data;
        console.log('Sucess got data.');
        console.log(response);
      }, function (response) {
        console.log('Error getting data.');
        console.log(response);
      });
    };
    initData();

    $scope.SaveData = function () {
      $http.post(cRoute, $scope.Data)
        .then(function (response) {
          console.log('Data addedd successfully.');
          console.log(response);
          initData();
        }, function (response) {
          console.log('Data not addedd.');
          console.log(response);
        });

    };

    $scope.DeleteData = function (Data) {
      $http.delete(cRoute + Data._id)
        .then(function (response) {
          console.log('Data deleted successfully.');
          console.log(response);
          initData();
        }, function (response) {
          console.log('Data not deleted.');
          console.log(response);
        });
    };

    $scope.UpdateData = function () {
      $http.put(cRoute + $scope.Data._id, $scope.Data)
        .then(function (response) {
          console.log('Data updated successfully.');
          console.log(response);
          initData();
        }, function (response) {
          console.log('Data not updated.');
          console.log(response);
        });

    };

    $scope.EditData = function (c) {
      $scope.Data = c;
      debugger;
    };

  }
  
};