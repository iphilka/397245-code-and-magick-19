'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var arrayRandomElement = function (arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
};

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = arrayRandomElement(WIZARD_NAMES) + ' ' + arrayRandomElement(WIZARD_SURNAMES);
  wizardElement.querySelector('.wizard-coat').style.fill = arrayRandomElement(COATS_COLOR);
  wizardElement.querySelector('.wizard-eyes').style.fill = arrayRandomElement(EYES_COLOR);

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
