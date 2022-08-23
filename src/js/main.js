import modals from './modules/modals.js';
import sliders from './modules/sliders';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  sliders('.feedback-slider-item','horicantal', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical')


  modals();
  forms();


});
