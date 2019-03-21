angular
.module('blogApp')
.component('viewComment',{
    templateUrl: require('./view-comment.component.html'),
    bindings: {
        comment: '<'
    }
})