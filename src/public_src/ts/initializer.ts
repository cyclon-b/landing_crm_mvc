import Alpine from 'alpinejs';

export const alpineInit = (window: any): void => {
    window.Alpine = Alpine;
    Alpine.start();
}


alpineInit(window);

