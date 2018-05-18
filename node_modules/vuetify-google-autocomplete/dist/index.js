'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

var _VuetifyGoogleAutocomplete = require('./VuetifyGoogleAutocomplete');

var _VuetifyGoogleAutocomplete2 = _interopRequireDefault(_VuetifyGoogleAutocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prevent window from being accessed within non-browser context.
if (typeof window !== 'undefined') {
  window.vgaMapState = {
    initMap: false
  };

  window.initVGAMaps = function () {
    window.vgaMapState.initMap = true;
  };
}

_VuetifyGoogleAutocomplete2.default.install = function (Vue, options) {
  if (options.apiKey) {
    (0, _helper2.default)(options.apiKey, options.version);
  }

  Vue.component(_VuetifyGoogleAutocomplete2.default.name, _VuetifyGoogleAutocomplete2.default);
};

exports.default = _VuetifyGoogleAutocomplete2.default;