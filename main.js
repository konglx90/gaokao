/**
 * Created by kong90 on 16-6-26.
 */
requirejs.config({
    paths: {
        json: 'bower_components/requirejs-json/json',
        text: 'bower_components/requirejs-text/text'
    }

});

define("jquery", [], function () {
    return window.jQuery;
});

requirejs(['jquery', 'src/app'],
function ($, app) {
    app.draw();
});