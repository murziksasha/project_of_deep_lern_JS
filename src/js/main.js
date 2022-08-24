import modals from './modules/modals.js';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import { checkEngTextInputs } from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyle';
import calc from './modules/calc';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  sliders('.feedback-slider-item', 'horicantal', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');

  modals();
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  checkEngTextInputs('[name="email"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
  
});
