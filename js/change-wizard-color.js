/* ------------------------events wizard change colors ------------------------------ */
'use strict';
(function () {


  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var coatColor = '#fff';
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var eyesColor = '#fff';
  var FAREBOL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var fareBall = '#fff';
  window.globalCoatColors = COAT_COLOR;
  window.globalEyesColor = COAT_COLOR;

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
})();
