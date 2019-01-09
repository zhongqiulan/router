angular.module('myapp', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        //通过 $stateProvider 配置路由
        // $stateProvider 配置路由是通过配置多种路由的状态来配置 不是通过url来配置
        // $stateProvider.state('状态名')
        $stateProvider.state('desk', {
            url: '/desk',
            templateUrl: 'desk.html'
        }).state('desk.detail', {
            url: '/detail',
            templateUrl: 'desk.detail.html'
        }).state('music', {
            //如果要路由要传参 和获取参数就要指定url 并且要指定一个参数名 参数只和/:参数名
            url: '/music/:musicId',
            templateUrl: 'music.html',
            controller: 'musicCtrl'
        }).state('picture', {
            url: '/picture',
            templateUrl: 'picture.html'
        }).state('baidu', {
            url: '/baidu',
            templateUrl: 'baidu.html'
        }).state('link', {
            url: '/link',
            templateUrl: 'link.html'
        });
    }]).controller('musicCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
        //以为$stateParams 只能根据url来获取参数
        console.log($stateParams.musicId);
    }]);
