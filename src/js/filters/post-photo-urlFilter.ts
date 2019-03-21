angular
.module('blogApp')
.filter('postPhotoUrl',['endpointApi',function(endpointApi){
    return function (postId){
        return `${endpointApi}/PostPhotoContainers/main/download/${postId}`
    }
}])