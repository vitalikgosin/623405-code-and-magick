// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_F_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

var wizards = [];
for (var i = 0; i < WIZARD_NAMES.length; i++) {
  wizards.push([
    {
      name: WIZARD_NAMES [getRndInteger(1, WIZARD_NAMES.length)] + ' ' + WIZARD_F_NAMES [getRndInteger(1, WIZARD_F_NAMES.length)],
      coatColor: COAT_COLOR [getRndInteger(1, COAT_COLOR.length)],
      eyesColor: EYES_COLOR[getRndInteger(1, EYES_COLOR.length)]
    }]);

}


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < 4; j++) {
  fragment.appendChild(renderWizard(wizards[j][0]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
