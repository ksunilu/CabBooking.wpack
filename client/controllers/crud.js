'use strict';
crud.$inject = ['$http'];
function crud($http){
   var _this = this;
     _this.allData = function (serviceName) {
         return $http({
            method: 'GET',
             url: `/${serviceName}` 
        })
        .then(function(response) {
            console.log(response);
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };
    _this.addData = function (model, serviceName) {
         return $http({
            method: 'POST',
            url: `/${serviceName}`,
            data: model,
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {           
            throw error;
        });
    };
    _this.deleteData = function (model, serviceName) {
          return $http.delete(`/${serviceName}/${model[`${serviceName}ID`]}` )
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {            
            throw error;
        });
    };
     _this.editData = function (model, serviceName) {
          return $http({
            method: 'GET',
            url: `/${serviceName}/${model[`${serviceName}ID`]}`            
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };
    _this.updateData = function (model, serviceName) {
          return $http({
            method: 'PUT',
            url: `/${serviceName}/${model[`${serviceName}ID`]}`,  
            data: model          
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };
}
module.exports = crud;
