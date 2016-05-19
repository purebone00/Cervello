$(document).ready(function(){
	var ColorEnum = {
            fillColor: {
                1: '#F44336',
                2: '#E91E63',
                3: '#9C27B0',
                4: '#673AB7',
                5: '#3F51B5',
                6: '#2196F3',
                7: '#03A9F4',
                8: '#00BCD4',
                9: '#009688',
                10: '#4CAF50',
                11: '#74D108',
                12: '#CDDC39',
                13: '#FFEB3B',
                14: '#FFC107',
                15: '#FF9800',
                16: '#FF5722'
            }
    };

    var counter = 1;

			<!-- Constructor for our ball object -->

	function Ball(r, p, v) {
		this.radius = r;
		this.point = p;
		this.vector = v;
		this.maxVec = 15;
		this.numSegment = Math.floor(r / 3 + 2);
		this.boundOffset = [];
		this.boundOffsetBuff = [];
		this.sidePoints = [];
		if(counter > 16){
		    counter = 1;
		}

		this.path = new Path({
			fillColor: ColorEnum.fillColor[counter++],
			blendMode: 'screen'
		});

		for (var i = 0; i < this.numSegment; i ++) {
			this.boundOffset.push(this.radius);
			this.boundOffsetBuff.push(this.radius);
			this.path.add(new Point());
			this.sidePoints.push(new Point({
				angle: 360 / this.numSegment * i,
				length: 1
			}));
		}
	}

	Ball.prototype = {
		iterate: function() {
			this.checkBorders();
			if (this.vector.length > this.maxVec)
				this.vector.length = this.maxVec;
			this.point += this.vector;
			this.updateShape();
		},

		checkBorders: function() {
			var size = view.size;
			if (this.point.x < 0)
				this.vector.angle = -this.vector.angle + 180;
			if (this.point.x > size.width)
				this.vector.angle = -this.vector.angle + 180;
			if (this.point.y < 0)
				this.vector.angle = -this.vector.angle;
			if (this.point.y > size.height)
				this.vector.angle = -this.vector.angle;
		},

		updateShape: function() {
			var segments = this.path.segments;
			for (var i = 0; i < this.numSegment; i ++)
				segments[i].point = this.getSidePoint(i);
				this.path.smooth();
			for (var i = 0; i < this.numSegment; i ++) {
				if (this.boundOffset[i] < this.radius / 4)
					this.boundOffset[i] = this.radius / 4;
				var next = (i + 1) % this.numSegment;
				var prev = (i > 0) ? i - 1 : this.numSegment - 1;
				var offset = this.boundOffset[i];
				offset += (this.radius - offset) / 15;
				offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3;
				this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
			}
		},

		react: function(b) {
			var dist = this.point.getDistance(b.point);
			if (dist < this.radius + b.radius && dist != 0) {
				var overlap = this.radius + b.radius - dist;
				var direc = (this.point - b.point).normalize(overlap * 0.015);
				this.vector += direc;
				b.vector -= direc;
					this.calcBounds(b);
				b.calcBounds(this);
				this.updateBounds();
				b.updateBounds();
			}
		},

		getBoundOffset: function(b) {
			var diff = this.point - b;
			var angle = (diff.angle + 180) % 360;
			return this.boundOffset[Math.floor(angle / 360 * this.boundOffset.length)];
		},

		calcBounds: function(b) {
			for (var i = 0; i < this.numSegment; i ++) {
				var tp = this.getSidePoint(i);
				var bLen = b.getBoundOffset(tp);
				var td = tp.getDistance(b.point);
				if (td < bLen) {
					this.boundOffsetBuff[i] -= (bLen  - td) / 2;
				}
			}
		},

		getSidePoint: function(index) {
			return this.point + this.sidePoints[index] * this.boundOffset[index];
		},

		updateBounds: function() {
			for (var i = 0; i < this.numSegment; i ++)
				this.boundOffset[i] = this.boundOffsetBuff[i];
		}
	};



	var balls = [];
  var numBalls = 5;
  var curBalls = 5;
  var maxBalls = 16;

  function createBall(givenPos) {
    var radius = 30;
      var vector = new Point({
        angle: 360 * Math.random(),
        length: Math.random() * 10
      });
      return new Ball(radius, givenPos, vector);
  }

  function onMouseDown(event) {
    if (curBalls < maxBalls) {
      curBalls++;
      balls.push(createBall(event.point));
    }
  }


  for (var i = 0; i < numBalls; i++) {
    var position = Point.random() * view.size;
    balls.push(createBall(position));
  }

  function onFrame() {
    for (var i = 0; i < balls.length - 1; i++) {
      for (var j = i + 1; j < balls.length; j++) {
        balls[i].react(balls[j]);
      }
    }
    for (var i = 0, l = balls.length; i < l; i++) {
      balls[i].iterate();
    }
  }



});
