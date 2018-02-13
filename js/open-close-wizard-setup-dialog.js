/* ------------------------events open close popup module 4 ------------------------------*/
'use strict';
(function () {

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
})();
