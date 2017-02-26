

angular.module("MyApp").controller("MyAppCtrl", function ($scope, $rootScope, LanguageService,$http) {

    $scope.currentView="home"
 /*   $scope.selectedRegion;
    $scope.selectedCity
    $scope.selectedStreet;
    $scope.selectedBld;
    $scope.selectedCategory;*/

   /* $scope.companies = [
        {name: "Eged", category: ["transport","bus"], address: "Tel-Aviv, Yaffo", street: "Street of Tel-Aviv", tel:"054-243-64-95", email: "eged@gmail,com", web:"eged.co.il"},
        {name: "Taxishka", category: "transport", address: "Netania", street: "Street of Netania",tel:"054-000-64-95", email: "taxishka@mail,com", web:"taxishka.co.il"},
        {name: "Eged-Center", category: "transport", address: "Jerusalem", street: "Street of Jerusalem",tel:"054-001-64-95", email: "eged@gmail,com", web:"eged.co.il"},
        {name: "Maccabi", category: "medicine", address: "Ашкелон", street: "Street of Ashkelon",tel:"053-240-64-95", email: "macabi@macabi.co.il", web:"macabi.co.il"},
        {name: "Clalit", category: "medicine", address: "Ашкелон", street: "Street of Ashkelon",tel:"053-240-64-00", email: "clalit@clalit.co.il", web:"clalit.co.il"},
        {name:"Leumi", category: "banking", address: "Jerusalem", street: "Street of Jerusalem",tel:"054-241-61-91", email: "leumi@leumi,co.il", web:"leumi.co.il"},
        {name: "Misrad Klita", category: "services", address: "Netania", street: "Street of Netania",tel:"053-290-60-98", email: "klita@gmail,com", web:"klita.co.il"},
        {name: "Cofix", category: "catering", address: "Petah-Tikva", street: "Street of Petakh-Tikva",tel:"054-243-94-12", email: "cofix@cofix,com", web:"cofix.co.il"},

    ]*/

    $scope.goToView = function(view){
        $scope.currentView=view;
    }

    $rootScope.language = 'ENG';

    $scope.lang = LanguageService[$rootScope.language];

    $scope.changeLang = function(lang){
        //console.log("URA");
        $rootScope.language = lang;
        // scope.langDirective = LanguageService[$rootScope.language].lang;
    }
    $scope.$watch(function () {
        return $rootScope.language ;
    },function (newValue, oldValue) {
        var applyFn = function(){
            $scope.lang = LanguageService[$rootScope.language];
            initMenuItems();
        }
        if ($scope.$$phase) {
            applyFn();
        } else {
            $scope.$apply(applyFn);
        }
    }, true);


    var initMenuItems = function () {
        // var elem = angular.element(document.querySelector("body"));
        // if(elem.prop("dir") == "ltr") {
        //
        //     elem.children().children().addClass("my_float_ltr");
        //     if(elem.children().children().hasClass("my_float_rtl")) {
        //         elem.children().children().removeClass("my_float_rtl");
        //     }
        // } else {
        //
        //     elem.children().children().addClass("my_float_rtl");
        //     if(elem.children().children().hasClass("my_float_ltr")) {
        //         elem.children().children().removeClass("my_float_ltr");
        //     }
        //
        // }
    }

 $scope.key = '';
    $scope.search = function (value) {
        return value.indexOf($scope.key) >= 0;
    }


    ///////////////////////////////////////////////
    // GETTING COMPANIES NAMES LIST INTO FILTER FIELD
    $scope.limitTitleSearch = 5000; //this should be initialised to more than the number of entries the dropdown holds
    $scope.checkTitle = function(lettersTyped){
        if(lettersTyped.length > 2){
            $scope.limitTitleSearch = 500;
        }else{
            $scope.limitTitleSearch = 0;
        }
    }

    $scope.keyUpFunc = function (selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, phonenumber, company) {
        var regionName, cityName, categoryId, companyName, streetName, phone, bld;
        if (angular.isDefined(selectedRegion)) {
            regionName = selectedRegion.name;
        }else {regionName=""}
        if (angular.isDefined(selectedCity)) {
            cityName = selectedCity.name;
        }else{cityName=""}
        if (angular.isDefined(selectedCategory)) {
            categoryId = selectedCategory.id;
        }else{categoryId=""}
        if (angular.isDefined(company)) {
            companyName = company;
        }else{companyName=""}
        if (angular.isDefined(selectedStreet)) {
            streetName = selectedStreet.name;
        }else{streetName=""}
        if (angular.isDefined(phonenumber)) {
            phone = phonenumber;
        }else{phone=""}
        if (angular.isDefined(selectedBld)) {
            bld = selectedBld.name;
        }else{bld=""}


        /*if ($scope.regionName.length > 2) {$scope.obj.region = $scope.regionName}
         if ($scope.cityName.length > 1) {$scope.obj.city = $scope.cityName}
         if ($scope.classifierName.length > 1) {$scope.obj.classifier = $scope.classifierName}*/
        if (companyName.length > 2) {
            $scope.obj = {
                company: companyName,
                region: regionName,
                city: cityName,
                categoryId: categoryId,
                street: streetName,
                phone: phone,
                house: bld
            }
            $scope.companiesRequest = "con=&reg=" + regionName + "&cit=" + cityName + "&str=" + streetName + "&hou=" + bld +
                "&cmn=" + company + "&phn=" + phone + "&cat=" + categoryId
            if ($scope.companiesRequest[$scope.companiesRequest.length-1]=="="){
                $scope.companiesRequest.slice(0,-1)
            }
            $http.get("http://188.166.79.122:8080/exodus/search/companies_names?" + $scope.companiesRequest).then(getCompNamesList)
            function getCompNamesList(response) {
                var companiesList = [];
                var companies = response.data.companies;
                for (var i in companies) {
                    var companyNames = companies[i].companyNames
                    for (var j in companyNames) {
                        companiesList.push(companyNames[j].name)
                    }
                }
                console.log("List of companies names: ")
                console.log(companiesList)
            }

            /*  if ($scope.streetName.length > 1) {$scope.obj.street = $scope.streetName}
             if ($scope.phoneNum.length > 1) {$scope.obj.phone = $scope.phoneNum}
             if ($scope.houseNum.length > 1) {$scope.obj.hpuse = $scope.houseNum}*/

                console.log("Object $scope.obj");
                console.log($scope.obj);
            console.log($scope.companiesRequest)
        }

    }
    var con, reg, cit, str, hou, cmn, phn, cat;
/*
    $scope.companiesRequest = ""
*/
    /*$scope.object = {
        con:String,
        reg:String/!*$scope.selectedRegion.name*!/,
        cit:String/!*$scope.selectedCity.name*!/,
        str:String,
        hou: String,
        cmn: "com",
        phn:String,
        cat:String
    }*/
   /* $scope.keyUpFunk = function(selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, company, phonenumber) {
        console.log("Our object :")
        /!*  cmn=$scope.object.cmn
         console.log("cmn="+$scope.object.cmn)*!/
        if (angular.isDefined(company)) {
            cmn = company
        } else {
            cmn = ""
        }
        if (angular.isDefined(selectedCity)) {
            cit = selectedCity.name
        } else {
            cit = ""
        }
        if (angular.isDefined(selectedRegion)) {
            reg = selectedRegion.name
        } else {
            reg = ""
        }
        if (angular.isDefined(selectedStreet)) {
            str = selectedStreet.name
        } else {
            str = ""
        }
        if (angular.isDefined(selectedBld)) {
            hou = selectedBld.name
        } else {
            hou = ""
        }
        if (angular.isDefined(selectedCategory)) {
            cat = selectedCategory.id
        } else {
            cat = ""
        }
        if (angular.isDefined(phonenumber)) {
            phn = phonenumber
        } else {
            phn = ""
        }
        console.log( "con=&reg=" + reg + "&cit=" + cit + "&str=" + str + "&hou=" + hou + "&cmn=" + cmn + "&phn=" + phn + "&cat=" + cat)
        if (cmn.length > 2) {
            $scope.obj = {
                company: cmn,
                region: reg,
                city: cit,
                classifier: cat,
                street: str,
                phone: phn,
                house: hou
            }
            console.log($scope.obj);

            $scope.companiesRequest = "con=&reg=" + reg + "&cit=" + cit + "&str=" + str + "&hou=" + hou + "&cmn=" + cmn + "&phn=" + phn + "&cat=" + cat
            console.log("$scope.companiesRequest :")
            console.log($scope.companiesRequest)

            $http.get("http://188.166.79.122:8080/exodus/search/companies_names?" + $scope.companiesRequest).then(getCompNamesList)
            function getCompNamesList(response) {
                var companiesList = [];
                var companies = response.data.companies;
                for (var i in companies) {
                    var companyNames = companies[i].companyNames
                    for (var j in companyNames) {
                        companiesList.push(companyNames[j].name)
                    }
                }
                console.log("List of companies names: ")
                console.log(companiesList)
            }
        }
    }*/



   ///////////////////////////////////////////
    //SEARCHING COMPANIES BY PUSHING SEARCH-BTN

    $scope.getSearchResult = function(selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, phoneN, selectedCompany) {

        var regionName = ""
        var cityNames = ""
        var categoryIds = ""
        var companyName = ""
        var phone = ""
        var blds = ""
        var streetNames = ""
        var isoCode = "&isc=en"

        /* if ($rootScope.language=="ENG"){
         isoCode="&isc=en"
         }else if($rootScope.language=="RUS"){
         isoCode="&isc=ru"
         }else if($rootScope.language=="FRA"){
         isoCode="&isc=fr"
         }else{
         isoCode="&isc=he"
         }*/

        if (angular.isDefined(selectedRegion)) {
            regionName = "&reg=" + selectedRegion.name;
        }
        if (angular.isDefined(selectedCity)) {
            if (angular.isArray(selectedCity)) {
                for (var i in selectedCity) {
                    cityNames += "&cit=" + selectedCity[i].name
                }
            } else {
                cityNames = "&cit=" + selectedCity.name
            }

        }

        if (angular.isDefined(selectedCategory)) {
            if (angular.isArray(selectedCategory)) {
                for (var i in selectedCategory) {
                    categoryIds += "&cat=" + selectedCategory[i].id
                }
                console.log("array")
                console.log(categoryIds)
            } else {
                cityNames = "&cat=" + selectedCategory.id
            }
        }

        if (angular.isDefined(selectedCompany)) {
            console.log("selected company is defined")
            companyName = "&cmn=" + selectedCompany.name;
        }
        if (angular.isDefined(selectedStreet)) {
            if (angular.isArray(selectedStreet)) {
                for (var i in selectedStreet) {
                    streetNames += "&str=" + selectedStreet[i].name
                }
            } else {
                streetNames = "&str=" + selectedStreet.name
            }
        }
        if (angular.isDefined(phoneN)) {
            console.log("Enter")
            phone = "&phn=" + phoneN;
            console.log("phone")
            console.log(phone)
        }
        if (angular.isDefined(selectedBld)) {
            if (angular.isArray(selectedBld)) {
                for (var i in selectedBld) {
                    blds += "&hou=" + selectedBld[i].name
                }
            } else {
                blds = "&hou=" + selectedBld.name
            }
        }

        $scope.searchRequest = "con=" + regionName + cityNames + isoCode + streetNames + blds + companyName + categoryIds + phone
        if ($scope.searchRequest[$scope.searchRequest.length - 1] == "=") {
            $scope.searchRequest = $scope.searchRequest.slice(0, -1)
        }
        console.log("$scope.searchRequest")
        console.log($scope.searchRequest)
        console.log("http://188.166.79.122:8080/exodus/search/companies?" + $scope.searchRequest)
        $http.get("http://188.166.79.122:8080/exodus/search/companies?" + $scope.searchRequest).then(getResult)

        function getResult(response) {

            $scope.items = response.data;

            var companies = $scope.items.companies;
            if (companies.length > 0) {
                console.log("response for search")
                console.log(companies)
                $scope.companiesArr = [];

                var l = 0;
                for (var i in companies) {
                    var names = companies[i].companyNames;
                    var addresses = companies[i].addresses
                    var categories = companies[i].categories
                    var categoriesList = []
                    for (var j in categories) {
                        categoriesList.push({
                            id:categories[j].id,
                            name: categories[j].categoryLocales[0].name
                        })
                    }
                    for (var m in addresses) {
                        $scope.companiesArr[l] = {
                            id: companies[i].id,
                            name: companies[i].companyNames[0].name,
                            address: addresses[m].addressLocales[0].city + ", " + addresses[m].addressLocales[0].street + ", " + addresses[m].addressLocales[0].house,
                            position: {lat: addresses[m].latitude, lng: addresses[m].longitude},
                            lat: addresses[m].latitude,
                            lng: addresses[m].longitude,
                            categories: categoriesList,
                            tel: addresses[m].phone,
                            email: addresses[m].email,
                            web: companies[i].webpage
                        }
                        console.log("$scope.companiesArr[l]")
                        console.log($scope.companiesArr[l])
                        l++;
                    }
                }
            }
            /*console.log("List search :")
            console.log("$scope.companiesArr of search")
            console.log($scope.companiesArr)*/
    }

        }


    ///////////////////////////////////////////////
    // UPLOADING INITIAL 100 COMPANIES
var data1 = {"isoCode":"en","fromRecord":"0","numberOfRecords":"100"}
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }}

    $http.post("http://188.166.79.122:8080/exodus/company/pagination", data1, config)
        .then(fulfilledInitRes)
    function fulfilledInitRes(response){
        $scope.items = response.data;
        var companies = $scope.items.companies;
        $scope.companiesArr = [];
        var k = 0;
        for(var i in companies){
            var addresses = companies[i].addresses;
            var categories = companies[i].categories
            var categoriesList=[]
            for (var l in categories){
                categoriesList.push({
                    id:categories[l].id,
                    name: categories[l].categoryLocales[0].name
                })
             }
            for( var j in addresses){
                $scope.companiesArr[k]={
                    name: companies[i].companyNames[0].name,
                    id:companies[i].id,
                    web: companies[i].webpage,
                    address:addresses[j].addressLocales[0].city+", "+addresses[j].addressLocales[0].street+", "+addresses[j].addressLocales[0].house,
                    categories: categoriesList,
                    phone: addresses[j].phone,
                    email: addresses[j].email
                }
                k++;
            }

        }
        /*console.log("!!!!!companiesArr:")
        console.log($scope.companiesArr)*/

    }

    //SEND REQUEST BY CLICK ON CATEGORY IN SEARCH RESULT BLOCK COMPANY

    $scope.sendRequestOnCategory = function(cat){
        console.log("id")
        console.log(cat)
        $scope.getSearchResult(undefined, undefined, undefined, undefined, cat, undefined, undefined)
    }


});
