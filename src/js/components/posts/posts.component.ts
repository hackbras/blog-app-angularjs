angular
.module('blogApp')
.component('posts',{
    templateUrl: require('./posts.component.html'),
    controller: ['postService','$scope', function(postService,$scope){
        let ctrl = this

        ctrl.$onInit = function() {
            postService.listAll().then(posts => {
                ctrl.posts = posts

                $scope.$apply()
            })
        }
    }]
})