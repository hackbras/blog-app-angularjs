angular
.module('blogApp')
.component('createComment',{
    templateUrl: require('./create-comment.component.html'),
    bindings:{
        postId:'@',
        commentSent:'&'
    },
    controller:['postService','$scope',function(postService,$scope){
        let ctrl = this

        ctrl.$onInit = function(){
            ctrl.comment = {}
        }

        ctrl.sendComment = async function(){
            try {
                await postService.sendComment(ctrl.postId,ctrl.comment)

                ctrl.commentSent()

                ctrl.comment = {}

                $scope.$apply()
            }catch(error){
                console.error(`falha ao enviar o comentario`)
            }
        }
    }]
})