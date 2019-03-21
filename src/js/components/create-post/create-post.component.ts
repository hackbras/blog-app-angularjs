angular
    .module('blogApp')
    .component('createPost', {
        templateUrl: require('./create-post.component.html'),
        controller: ['authorService', '$scope', 'postService', '$location','FileUploader','endpointApi',
            function (authorService, $scope, postService, $location,FileUploader,endpointApi) {
                let ctrl = this

                ctrl.uploader = new FileUploader({
                    url: `${endpointApi}/PostPhotoContainers/main/upload`
                })

                ctrl.$onInit = async function () {
                    ctrl.post = {}

                    ctrl.authors = await authorService.listAll()

                    $scope.$apply()
                }

                ctrl.save = async function () {
                   

                    try {
                        
                        let savedPost=await postService.save(ctrl.post)

                        if (ctrl.uploader.queue && ctrl.uploader.queue.length > 0) {
                            await new Promise((resolve,reject) => {
                                let fileItem = ctrl.uploader.queue[0]

                                fileItem.file.name = savedPost.id

                                fileItem.onSuccess = function(){
                                    resolve()
                                }

                                fileItem.onError = function(error){
                                    reject(error)
                                }

                                fileItem.upload()
                            })
                        }

                        $location.path('/posts')

                        $scope.$apply()
                    } catch (error) {
                        console.error(error)
                        alert("Failed")

                    }
                }
            }]
    })