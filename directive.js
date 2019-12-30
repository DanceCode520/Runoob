app.directive('lunbo', ['$timeout', "$rootScope", function($timeout, $rootScope) {
	return {
		restrict: 'EA',
		 templateUrl: "circleImage.html",
		link: function(scope, element, attr) {
			var step = -1;
			var time = null;
			var stepFun = function() 
			{
				step++;
				if (step>=$rootScope.imgs.length){step=0;}
				$rootScope.LiSelectedIndex = step;
				time = $timeout(function() {
					stepFun() // console.log("循环====");
				}, 2000);
			};

			stepFun();
			//鼠标点击及悬停事件
			scope.clickEvent = function(number,ev) 
			{
				step = number;
				$rootScope.LiSelectedIndex=step;
			};
			//鼠标移除动画重新开始
			scope.start = function() {
				$timeout.cancel(time);
				stepFun();
			}

			//鼠标移入、移出到div
			scope.divMouseOutIn = function() {
				$timeout.cancel(time);
			}

			//左右切换按钮
			scope.clickLeftRightBut = function(ifLf) 
			{
				if (ifLf) 
				{
					step--;
					if (step < 0) {step = $rootScope.imgs.length-1;}
					$rootScope.LiSelectedIndex=step;
				} 
				else 
				{
					step++;
					if(step>=$rootScope.imgs.length){step=0;}
					$rootScope.LiSelectedIndex=step;
				}
			}
		}
	}
}]);