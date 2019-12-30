app.config(function($routeProvider) {
    $routeProvider.
    when('/home/:id', {
            template: "<h2>全部课程</h2>",
            controller: "HomeController",
            replace: true
        })
        .when('/note/:id', {
            template: "<h2>菜鸟笔记</h2>",
            controller: "HomeController"
        })
        .when('/tool/:id', {
            template: '<h2>菜鸟工具</h2>',
            controller: "HomeController"
        })
        .when('/manual/:id', {
            template: '<h2>参考手册</h2>',
            controller: "HomeController"
        })
        .when('/user/:id', {
            template: '<h2>用户笔记</h2>',
            controller: "HomeController"
        })
        .when('/test/:id', {
            template: '<h2>测试考试</h2>',
            controller: "HomeController"
        })
        .otherwise({
            redirectTo: '/home/0'
        });
});