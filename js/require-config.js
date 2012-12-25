/**
 * Copyright 2012 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
require.config({
    // Initialize the application with the main application file
    deps: ['main'],

    paths: {
        // jQuery
        jquery:                      'vendor/jquery-1.8.3',
        jqueryui:                    'vendor/jquery-ui-1.8.23.custom.min',
        jqueryValidationEngine:      'vendor/jquery.validationEngine-2.5.2',
        jqueryValidationEngineRules: 'vendor/jquery.validationEngine-en-2.5.2',

        // Underscore
        underscore:                  'vendor/underscore-1.4.3',

        // Backbone
        backbone:                    'vendor/backbone-0.9.9',

        // Templating
        handlebars:                  'vendor/handlebars-1.0.rc.1',

        // Base64 encoding for authentication headers
        base64encode:                'vendor/base64_encode',
        utf8encode:                  'vendor/utf8_encode',

        // Formatting and parsing of dates and numbers,
        // similar to SimpleDateFormat and NumberFormat APIs
        jqueryformat:                'vendor/jquery.format-1.2',

        // Date library
        moment:                      'vendor/moment-1.6.2',

        // jQuery Alerts (http://www.codeproject.com/Articles/295236/jQuery-UI-Alerts-Dialog-using-ThemeRollers)
        jqueryalerts:                'vendor/jquery.alerts',

        // Charting
        highcharts:                  'vendor/highcharts-2.3.3'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        base64encode: ['utf8encode'],

        handlebars: {
            exports: 'Handlebars'
        },

        jqueryformat: ['jquery'],

        jqueryui: ['jquery'],

        jqueryValidationEngine: {
            deps: ['jquery'],
            exports: '$.validationEngine'
        },

        jqueryValidationEngineRules: ['jqueryValidationEngine'],

        underscore: {
            exports: '_'
        }
    }
});