
module.exports = function ($scope, $http, crud) {

  function initData() {

    $scope.allData = {};
    $scope.Data = {};

    var promise = crud.allData('tariffs2');
    promise.then(function (data) {
      $scope.allData = data;
      debugger;
    })


  };
  initData();

  $scope.SaveData = function () {
    $http.post('/tariffs/', $scope.Data)
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
    $http.delete('/tariffs/' + Data._id)
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
    $http.put('/tariffs/' + $scope.Data._id, $scope.Data)
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

};