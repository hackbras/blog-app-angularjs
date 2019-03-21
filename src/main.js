// angular
require('angular')

// angular-route
require('angular-route')

require('angular-file-upload')

// index.html
require('./index.html')

// módulo
require('./js/app')

// componentes
require('./js/components/create-post/create-post.component')
require('./js/components/view-post/view-post.component')
require('./js/components/home/home.component')
require('./js/components/posts/posts.component')
require('./js/components/create-comment/create-comment.component')
require('./js/components/view-comment/view-comment.component')

// serviços
require('./js/services/author.service')
require('./js/services/post.service')

//filtros
require('./js/filters/post-photo-urlFilter')
