angular.module('blogApp')
.factory('authorService',['$http','endpointApi', function($http,endpointApi){
    return {
        listAll: function() {
            return new Promise(async (resolve,reject) => {
                let response = 
                await $http.get(endpointApi + '/authors')

                resolve(response.data)
            })
        }
    }
}])