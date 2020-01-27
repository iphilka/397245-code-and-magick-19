'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

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

var setBlueSaturation = function () {
  return Math.round(Math.random() * 100);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 30);
  ctx.fillText('Список результатов: ', CLOUD_X + 20, CLOUD_Y + FONT_GAP + 30);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barRelativHt = (BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), BAR_WIDTH + (50 + BAR_WIDTH) * i + CLOUD_X, 70 + CLOUD_Y + BAR_HEIGHT - barRelativHt);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + setBlueSaturation() + '%,50%)';
    }
    ctx.fillRect(BAR_WIDTH + (50 + BAR_WIDTH) * i + CLOUD_X, 80 + CLOUD_Y + BAR_HEIGHT - barRelativHt, BAR_WIDTH, barRelativHt);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], BAR_WIDTH + (50 + BAR_WIDTH) * i + CLOUD_X, 100 + CLOUD_Y + BAR_HEIGHT);
  }
};
