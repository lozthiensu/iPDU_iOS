angular.module('pduNewsApp')
.run(function ($rootScope, $cordovaSQLite, localStorageService, $cordovaStatusbar, $timeout) {

    $rootScope.cssModalHeaderSetting = "modal-header-setting";
    $rootScope.cssModeModalHeader = "modal-header";
    $rootScope.cssModeModalCat = "modal-header-theloai";
    $rootScope.cssModalContent = "xem_baiviet_bogoc_modal";
    $rootScope.cssFooterButton = "status_buttons";
    $rootScope.cssModeHeader = "menu_header";
    $rootScope.cssListThread = "list_baiviet";
    $rootScope.cssModeFooter = "menu_footer";
    $rootScope.cssModalCat = "modal-content-theloai";
    $rootScope.cssModal = "modal-content";
    $rootScope.cssTab = "slide";
    $rootScope.cssMenuOther = "list_menu";
    $rootScope.cssListThreadQldt = "list_baiviet_qldt";
    $rootScope.cssScrollInfo = "scroller_info";
    $rootScope.cssTitleList = "title_desk";
    $rootScope.cssLinkMenu = "link_menu";
    $rootScope.settingData = []; //Contain data setting
    $rootScope.listIDSaved = []; //Contain list id thread saved
    $rootScope.dataSave = []; //Contain data thread read from SQLite
    $rootScope.saveLogin = []; //Contain login info 
    $rootScope.SavedSession = []; //Contain index tab
    $rootScope.doSangMay = 0;


    //When device ready, do it
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {

        //Open database and process 
        //$cordovaSQLite.execute($rootScope.db, "DROP TABLE IF EXISTS sqlSave");
        //localStorageService.clearAll();


        $cordovaStatusbar.overlaysWebView(true); 


        $rootScope.khoiTao = function(){ 
            $rootScope.db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });
            $cordovaSQLite.execute($rootScope.db, "CREATE TABLE IF NOT EXISTS sqlSave(baiviet_id text PRIMARY KEY, baiviet_title text, baiviet_date text, baiviet_author text, baiviet_content text, baiviet_img text, baiviet_thumb text)");
        };
        $rootScope.khoiTao();
        
        
        window.brightness = cordova.require("cordova.plugin.Brightness.Brightness");
        brightness.getBrightness(win, fail);
        function win(status) {
            n = parseFloat(status);
            x = Math.round(n * 1000) / 1000;
            $rootScope.slider.value = Math.floor(x * 100);
        }
        function fail(status) {
            alert('Error: ' + status);
        }
        
        
    }

})
.config(function (localStorageServiceProvider) {
    //Set prefix for localstorage
    localStorageServiceProvider.setPrefix('settingRead');
});