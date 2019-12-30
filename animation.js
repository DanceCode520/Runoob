app.animation('.fade-in', function() {
	return {
		enter: function(element, done) {
			var step = 0;
			var time = null; //计时器
			var animationFunc = function() {
				step += 20;
				if (step > 100) {
					done();
					clearInterval(time);
				} else {
					element.css("opacity", step / 100);
				}
			};
			element.css("opacity", 0);
			time = setInterval(animationFunc, 50);
			console.log("enter=============");
		},
		leave: function(element, done) {
			var step = 100;
			var time = null;
			var animationFun = function() {
				step -= 20;
				if (step < 0) {
					done();
					clearInterval(time);
				} else {
					element.css("opacity", step / 100)
				}
			};
			element.css("opacity", 1);
			time = setInterval(animationFun, 40);
			console.log("leave=============");
		}
	}
})
