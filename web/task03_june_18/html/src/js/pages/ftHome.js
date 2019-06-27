var ftHome = {
    init: function () {
        console.log("<ftHome> => INIT!");
        //ftHome.galleryInit();
        $(window).on('resize', ftHome.onResize);
        ftHome.onResize();
    },

    onResize: function (e) {
        // do your fucking resizing
        console.log("Browser size: " + window.innerWidth + "x" + window.innerHeight);
    },

    galleryInit: function () {
        //console.log("INIT GALLERY");

    },
}