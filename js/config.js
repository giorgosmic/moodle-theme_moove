define([], function() {
    window.requirejs.config({
        paths: {
            "particles": M.cfg.wwwroot + '/theme/moove/js/particles',
            "threeLib": M.cfg.wwwroot + '/theme/moove/js/threeLib',
            "globe": M.cfg.wwwroot + '/theme/moove/js/vanta.globe',
        },
        shim: {
            'particles': {exports: 'particles'},
            'threeLib': {exports: 'threeLib'},
            'globe': {exports: 'globe'},
        }
    });
});
