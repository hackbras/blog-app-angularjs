angular
    .module('blogApp')
    .factory('postService', ['$http', 'endpointApi', function ($http, endpointApi) {
        return {
            listAll: function () {
                return new Promise((resolve, reject) => {
                    $http.get(endpointApi + '/posts')
                        .then(response => resolve(response.data))
                        .catch(error => reject(error))

                })
            },
            save: function (post) {
                return new Promise(async (resolve, reject) => {
                    let response = await $http.post(endpointApi + '/posts', post)

                    if (response.status == 200) {
                        resolve(response.data)
                    } else {
                        reject(response.data)
                    }
                })
            },
            get: function (postId) {
                return new Promise(async (resolve, reject) => {
                    let filter = {
                        include: ['author']
                    }
                    let response =
                        await $http.get(
                            `${endpointApi}/posts/${postId}?filter=${JSON.stringify(filter)}`
                        )

                    resolve(response.data)
                })
            },
            sendComment: function(postId,comment){
                return new Promise(async (resolve, reject) => {
                    let response = await $http.post(`${endpointApi}/posts/${postId}/comments`,comment)

                    if (response.status == 200) {
                        resolve(response.data)
                    } else {
                        reject(response.data)
                    }
                })
            }
        }
    }])