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

/* ------------------------events close popup module 4 ------------------------------*/


var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');

var setupUserNameFocus = false;

var setupUserNameFocusHandler = function () {
  setupUserNameFocus = true;

};
var setupUserNameBlurHandler = function () {
  setupUserNameFocus = false;

};

setupUserName.addEventListener('focus', setupUserNameFocusHandler);
setupUserName.addEventListener('blur', setupUserNameBlurHandler);


var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && setupUserNameFocus === false) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

/* ------------------------events wizard chenge colors ------------------------------ */

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var coatColor = '#fff';
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var eyesColor = '#fff';
var FAREBOL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var fareBall = '#fff';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

var wizardCoatElements = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyesElements = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballElements = document.querySelector('.setup-fireball-wrap');

var wizardCoatClick = function () {
  coatColor = COAT_COLOR [getRndInteger(1, COAT_COLOR.length)];
  wizardCoatElements.style.fill = coatColor;

};

var wizardEyesClick = function () {
  eyesColor = EYES_COLOR [getRndInteger(1, EYES_COLOR.length)];
  wizardEyesElements.style.fill = eyesColor;
};
var wizardCireballClick = function () {
  fareBall = FAREBOL_COLOR [getRndInteger(1, FAREBOL_COLOR.length)];
  wizardFireballElements.style.backgroundColor = fareBall;

};
wizardCoatElements.addEventListener('click', wizardCoatClick);
wizardEyesElements.addEventListener('click', wizardEyesClick);
wizardFireballElements.addEventListener('click', wizardCireballClick);
