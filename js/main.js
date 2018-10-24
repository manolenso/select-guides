/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();


    function initsimple() {

        themeManager.init();

        $("#guides_simple").click(function () {
            csInterface.evalScript('simple()');
        });
    };
    initsimple();

    function initcenter() {

        themeManager.init();

        $("#guides_center").click(function () {
            csInterface.evalScript('center()');
        });
    };
    initcenter();
    function initcrux() {

        themeManager.init();

        $("#crux_center").click(function () {
                csInterface.evalScript('crux()');
        });
    };
    initcrux();


}());
