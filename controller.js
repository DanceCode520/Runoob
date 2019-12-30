var app = angular.module("navApp", ['ngRoute', 'ngAnimate']);
var arrr = new Array();
app.controller("myCtrl", function($scope, $rootScope, $interval) {
    $rootScope.linames = [{
        "name": "首页",
        "url": "home",
        "id": "0"
    }, {
        "name": "菜鸟笔记",
        "url": "note",
        "id": "1"
    }, {
        "name": "菜鸟工具",
        "url": "tool",
        "id": "2"
    }, {
        "name": "参考手册",
        "url": "manual",
        "id": "3"
    }, {
        "name": "用户笔记",
        "url": "user",
        "id": "4"
    }, {
        "name": "测试考试",
        "url": "test",
        "id": "5"
    }];
    $rootScope.imgs = ["1", "2", "3", "4", "5", "6", "7"];
    $scope.prompts = ["java课程", "Swift学习", "C#基础课", "html标签学习", "服务器开发", "正则表达式"];
    $scope.lfArr = [{
        "name": "全部教程",
        "img": "all2.png"
    }, {
        "name": "HTML / CSS",
        "img": "link.png"
    }, {
        "name": "JavaScript",
        "img": "link.png"
    }, {
        "name": "服务端",
        "img": "link.png"
    }, {
        "name": "数据库",
        "img": "link.png"
    }, {
        "name": "移动端",
        "img": "link.png"
    }, {
        "name": "XML 教程",
        "img": "link.png"
    }, {
        "name": "ASP.NET",
        "img": "link.png"
    }, {
        "name": "Web Service",
        "img": "link.png"
    }, {
        "name": "开发工具",
        "img": "link.png"
    }, {
        "name": "网站建设",
        "img": "link.png"
    }];
    $scope.showArr = $scope.lfArr; //展示的标题
    $scope.IsSelected = 0;
    $rootScope.LiSelectedIndex = 0;
    $rootScope.NavDivShowIndex = 0;
    //设置Rgcontent初始数据
    for (var x = 1; x < $scope.showArr.length; x++) {
        var obj = new Object();
        var rand = Math.round(Math.random() * 10);
        obj.name = $scope.showArr[x].name;
        var conts = new Array();
        for (var y = 0; y < rand; y++) {
            let oj = {};
            oj.name = obj.name + y;
            oj.imgName = "r" + y + ".png"
            conts[y] = oj;
        }
        obj.content = conts;
        arrr[x - 1] = obj;
    }
    $rootScope.aArr = arrr;

    //导航栏点击，更改display属性
    $scope.TouchNav = function(navIndex) {
        $rootScope.NavDivShowIndex = navIndex;
        if (this.x.id != "0") {
            $rootScope.aArr = [];
            var rand = Math.round(Math.random() * 10);
            var obj = new Object();
            obj.name = this.x.name;
            var conts = new Array();
            for (var y = 0; y < rand; y++) {
                let oj = {};
                oj.name = obj.name + y;
                oj.imgName = "r" + y + ".png"
                conts[y] = oj;
            }
            obj.content = conts;
            $rootScope.aArr.push(obj);
        } else {
            $rootScope.aArr = arrr;
        }
    }

    //点击左侧内容索引
    $scope.TouchLeft = function(index) {
        $scope.IsSelected = index;
        if (this.x.name != $scope.lfArr[0].name) {
            $rootScope.aArr = [];
            var rand = Math.round(Math.random() * 10);
            var obj = new Object();
            obj.name = this.x.name;
            var conts = new Array();
            for (var y = 0; y < rand; y++) {
                conts[y] = obj.name + y;
            }
            obj.content = conts;
            $rootScope.aArr.push(obj);
        } else {
            $rootScope.aArr = arrr;
        }
    }
});


//路由
app.controller('HomeController', function($scope, $http, $rootScope, $routeParams) {
    var idd = $routeParams.id;
    $rootScope.NavDivShowIndex = idd;
    if (idd != "0") {
        $rootScope.aArr = [];
        var rand = Math.round(Math.random() * 10);
        var obj = new Object();
        obj.name = $rootScope.linames[idd].name;
        var conts = new Array();
        for (var y = 0; y < rand; y++) {
            let oj = {};
            oj.name = obj.name + y;
            oj.imgName = "r" + y + ".png"
            conts[y] = oj;
        }
        obj.content = conts;
        $rootScope.aArr.push(obj);
    } else {
        $rootScope.aArr = arrr;
    }
})
