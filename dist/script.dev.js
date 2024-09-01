"use strict";

var storageKey = 'theme-preference';

var getColorPreference = function getColorPreference() {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);else return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

var setPreference = function setPreference() {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

var reflectPreference = function reflectPreference() {
  document.firstElementChild.setAttribute('data-theme', theme.value);
  document.querySelector('.theme-toggle');
};
//# sourceMappingURL=script.dev.js.map
