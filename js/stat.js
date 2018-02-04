'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 15;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var COLOUMN_WIDTH = 50;
var BAR_WIDTH = 30;
var barheight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '15px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP * 2);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {

    var customColor = 'rgba(2,14,133,' + Math.random() + ')';

    ctx.fillStyle = '#000';
    ctx.font = '14px arial';
    ctx.fillText(names[i], CLOUD_X + COLOUMN_WIDTH + (GAP + BAR_WIDTH * 3) * i, CLOUD_Y + GAP + 220);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = customColor;
    }
    ctx.fillRect(CLOUD_X + COLOUMN_WIDTH + (GAP + BAR_WIDTH * 3) * i, CLOUD_Y + GAP + 200, BAR_WIDTH, ((barheight * times[i]) / maxTime) * -1);
  }
};
console.log('test');
