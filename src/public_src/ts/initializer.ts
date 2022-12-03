import Alpine from 'alpinejs';
import { feedBackForm } from './formHandler';

export const alpineInit = (window: any): void => {
  window.Alpine = Alpine;
  window.feedBackForm = feedBackForm;
  Alpine.start();
};

alpineInit(window);
