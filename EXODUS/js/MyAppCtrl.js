

/*
angular.module("MyApp").controller("MyAppCtrl", function ($scope, $rootScope, LanguageService,$http) {
*/

/*angular.module("MyApp").filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function(item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});*/



angular.module("MyApp").controller("MyAppCtrl", function ($scope, $rootScope, LanguageService,$http, $timeout, $interval, startsWithFilter, onParentFilter) {
    /*
     $scope.isoCode = "&isc="+$rootScope.language.slice(0,2)
     */
    this.server = "http://188.166.79.122:8080/exodus/";
    this.region = [];
    this.region.selected = [];
    $scope.addressInput = [];


    /* var x = $scope.city.selected
     console.log("???????????")
     console.log(x)*/
    /*if(angular.isDefined($scope.region.selected)) {
     console.log("$scope.region.selected")
     console.log($scope.region.selected)
     }*/
    $scope.currentView = "home";

    $scope.goToView = function (view) {
        $scope.currentView = view;
    }

    $rootScope.language = 'ENG';

    $scope.lang = LanguageService[$rootScope.language];

    $scope.changeLang = function (lang) {
        //console.log("URA");
        $rootScope.language = lang;
        // scope.langDirective = LanguageService[$rootScope.language].lang;
    }
    $scope.$watch(function () {
        initMenuItems();
        return $rootScope.language;
    }, function (newValue, oldValue) {
        var applyFn = function () {
            $scope.lang = LanguageService[$rootScope.language];
        }
        if ($scope.$$phase) {
            applyFn();
        } else {
            $scope.$apply(applyFn);
        }
    }, true);

    $scope.isoCode = "&isc=" + $rootScope.language.slice(0, 2)

    var initMenuItems = function () {
        //console.log("URA!");
        var elem = angular.element(document.querySelector("body"));
        var elemHeader = angular.element(document.querySelector(".elemHeader"));
        var elemNavLeft = angular.element(document.querySelector(".navbarLeft"));
        var elemNavRight = angular.element(document.querySelector(".navbarRight"));
        var elemDivLtrRtl = angular.element(document.querySelector("div.ltrRtl"));
        var elemDivCompanies = angular.element(document.querySelector(".elemDivCompanies"));
        var elemLangUl = angular.element(document.querySelector(".langUl"));
        //alert("!!!" + elem.prop("dir"));
        //console.log("URA!");
        if (elem.prop("dir") == "rtl") {
            //alert("!!" + elem.prop("dir"));
            elemHeader.addClass("my_float_rtl");
            if (elemHeader.hasClass("my_float_ltr")) elemHeader.removeClass("my_float_ltr");
            elemNavLeft.addClass("navbar-right");
            elemNavLeft.addClass("my_float_rtl");
            if (elemNavLeft.hasClass("navbar-left")) elemNavLeft.removeClass("navbar-left");
            if (elemNavLeft.hasClass("my_float_ltr")) elemNavLeft.removeClass("my_float_ltr");
            elemNavRight.addClass("navbar-left");
            if (elemNavRight.hasClass("navbar-right")) elemNavLeft.removeClass("navbar-right");
            elemDivCompanies.addClass("my_float_rtl");
            if (elemDivCompanies.hasClass("my_float_ltr")) elemDivCompanies.removeClass("my_float_ltr");
            elemDivLtrRtl.children().addClass("my_float_rtl");
/*<<<<<<< HEAD
            if(elemDivLtrRtl.children().hasClass("my_float_ltr")) elemDivLtrRtl.children().removeClass("my_float_ltr");
            elemLangUl.addClass("my_float_rtl");
            if(elemLangUl.hasClass("my_float_ltr")) elemLangUl.removeClass("my_float_ltr");
        //     elem.children().children().addClass("my_float_ltr");
        //     if(elem.children().children().hasClass("my_float_rtl")) {
        //         elem.children().children().removeClass("my_float_rtl");
        //     }
=======
            if (elemDivLtrRtl.children().hasClass("my_float_ltr")) elemDivLtrRtl.children().removeClass("my_float_ltr");
            //     elem.children().children().addClass("my_float_ltr");
            //     if(elem.children().children().hasClass("my_float_rtl")) {
            //         elem.children().children().removeClass("my_float_rtl");
            //     }
>>>>>>> master
        } else {
            //alert("!!!!" + elem.prop("dir"));
            elemHeader.addClass("my_float_ltr");
            if (elemHeader.hasClass("my_float_rtl")) elemHeader.removeClass("my_float_rtl");
            elemNavLeft.addClass("navbar-left");
            elemNavLeft.addClass("my_float_ltr");
            if (elemNavLeft.hasClass("navbar-right")) elemNavLeft.removeClass("navbar-right");
            if (elemNavLeft.hasClass("my_float_rtl")) elemNavLeft.removeClass("my_float_rtl");
            elemNavRight.addClass("navbar-right");
            if (elemNavRight.hasClass("navbar-left")) elemNavLeft.removeClass("navbar-left");
            elemDivCompanies.addClass("my_float_ltr");
            if (elemDivCompanies.hasClass("my_float_rtl")) elemDivCompanies.removeClass("my_float_rtl");
            elemDivLtrRtl.children().addClass("my_float_ltr");*/
/*
<<<<<<< HEAD
*/
            if(elemDivLtrRtl.children().hasClass("my_float_rtl")) elemDivLtrRtl.children().removeClass("my_float_rtl");
            elemLangUl.addClass("my_float_ltr");
            if(elemLangUl.hasClass("my_float_rtl")) elemLangUl.removeClass("my_float_rtl");
        //     elem.children().children().addClass("my_float_rtl");
        //     if(elem.children().children().hasClass("my_float_ltr")) {
        //         elem.children().children().removeClass("my_float_ltr");
        //     }
/*
=======
*/
            if (elemDivLtrRtl.children().hasClass("my_float_rtl")) elemDivLtrRtl.children().removeClass("my_float_rtl");
            //     elem.children().children().addClass("my_float_rtl");
            //     if(elem.children().children().hasClass("my_float_ltr")) {
            //         elem.children().children().removeClass("my_float_ltr");
            //     }
/*
>>>>>>> master
*/

        }
    }
    /*

     $scope.key = '';
     $scope.search = function (value) {
     return value.indexOf($scope.key) >= 0;
     }

     */

    ///////////////////////////////////////////////
    // GETTING COMPANIES NAMES LIST INTO FILTER FIELD
    /* $scope.limitTitleSearch = 5000; //this should be initialised to more than the number of entries the dropdown holds
     $scope.checkTitle = function(lettersTyped){
     if(lettersTyped.length > 2){
     $scope.limitTitleSearch = 500;
     }else{
     $scope.limitTitleSearch = 0;
     }
     }*/

    /*$scope.keyUpFunc = function (selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, phonenumber, company) {
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


     /!*if ($scope.regionName.length > 2) {$scope.obj.region = $scope.regionName}
     if ($scope.cityName.length > 1) {$scope.obj.city = $scope.cityName}
     if ($scope.classifierName.length > 1) {$scope.obj.classifier = $scope.classifierName}*!/
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

     /!*  if ($scope.streetName.length > 1) {$scope.obj.street = $scope.streetName}
     if ($scope.phoneNum.length > 1) {$scope.obj.phone = $scope.phoneNum}
     if ($scope.houseNum.length > 1) {$scope.obj.hpuse = $scope.houseNum}*!/

     console.log("Object $scope.obj");
     console.log($scope.obj);
     console.log($scope.companiesRequest)
     }

     }*/
    /*
     var con, reg, cit, str, hou, cmn, phn, cat;
     */
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


    var parseResult = function (response) {

        $scope.items = response.data;
        var companies = $scope.items.companies;

        if (companies.length > 0) {
            $scope.companiesArr = [];

            var l = 0;
            for (var i in companies) {
                var names = companies[i].companyNames;
                var addresses = companies[i].addresses
                var categories = companies[i].categories
                var categoriesList = []
                for (var j in categories) {
                    categoriesList.push({
                        id: categories[j].id,
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
                        web: companies[i].webpage,
                        /*logo: getLogo(companies[i].id)
                         {
                         $http.get("http://188.166.79.122:8080/exodus/company/logo_image/get_by_id?" + "isoCode=" + $rootScope.language.slice(0, 2) +
                         "&companyId" + $scope.companiesArr[l].id).then(success, error)
                         function success(response) {
                         console.log("<<<<<<success>>>>>")
                         }

                         function error(response) {
                         console.log("<<<<<<error>>>>>")
                         }
                         }*/
                    }

                    l++;

                }
            }
        }
        console.log("$scope.companiesArr")
        console.log($scope.companiesArr)
    }


    var collectFromFilters = function (selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, phoneN, selectedCompany) {
        var regionNames = ""
        var cityNames = ""
        var categoryIds = ""
        var companyName = ""
        var phone = ""
        var blds = ""
        var streetNames = ""
        var isoCode = $scope.isoCode
        console.log("isoCode")
        console.log(isoCode)

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
            if (angular.isArray(selectedRegion)) {
                for (var i in selectedRegion) {
                    regionNames += "&reg=" + selectedRegion[i].name
                }
            } else {
                regionNames = "&reg=" + selectedRegion.name;
            }
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
                categoryIds = "&cat=" + selectedCategory.id
            }
        }
        if (angular.isDefined(selectedCompany)) {
            if (angular.isString(selectedCompany)) {
                companyName = "&smn=" + selectedCompany
            } else {
                companyName = "&cmn=" + selectedCompany.name;
            }
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
            phone = "&phn=" + phoneN;
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

        var searchRequest = "con=" + regionNames + cityNames + isoCode + streetNames + blds + companyName + categoryIds + phone
        if (searchRequest[searchRequest.length - 1] == "=") {
            searchRequest = searchRequest.slice(0, -1)
        }
        console.log("$scope.searchRequest")
        console.log(searchRequest)
        console.log("http://188.166.79.122:8080/exodus/search/companies?" + searchRequest)
        return searchRequest
    }

    ///////////////////////////////////////////
    //SEARCHING COMPANIES BY PUSHING SEARCH-BTN

    $scope.getSearchResult = function (selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, phoneN, selectedCompany) {

        var request = /*$scope.*/collectFromFilters(selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, phoneN, selectedCompany);

        $http.get("http://188.166.79.122:8080/exodus/search/companies?" + request).then(getResult);
        /*console.log("foundedByRequest down")
         console.log(foundedByRequest)
         if(selectedRegion != undefined){
         var region
         }*/
        var company = ""
        var address = "";
        var category = "";
        var tel = "";
        if (angular.isDefined(selectedCompany)) {
            company += selectedCompany.name;
        }
        if (phoneN != undefined) {
            tel = phoneN
        }
        if (angular.isDefined(selectedCategory)) {
            if (angular.isArray(selectedCategory)) {
                /*
                 console.log(selectedCategory.length)
                 */
                for (var i in selectedCategory) {
                    if (i == 0) {
                        category += " в категориях: "
                    }
                    category += selectedCategory[i].name
                    if (i != selectedCategory.length - 1) {
                        category += ", "
                    }
                }
            } else {
                category = selectedCategory.name
            }
        }
        if (angular.isDefined(selectedRegion)) {
            console.log("selectedRegion in string")
            console.log(selectedRegion)
            if (angular.isArray(selectedRegion)) {
                if (selectedRegion.length == 1) {
                    address += " в регионе: ";
                } else {
                    address += " в регионах: ";
                }
                for (var i in selectedRegion) {
                    address += selectedRegion[i].name;
                    if (i != selectedRegion.length - 1) {
                        address += ", ";
                    }
                }
            } else {
                address += " регионе " + selectedRegion.name;
            }
        }
        if (angular.isDefined(selectedCity)) {
            if (angular.isArray(selectedCity)) {
                if (selectedCity.length == 1) {
                    address += " в городе: "
                } else {
                    address += " в городах: "
                }
                for (var i in selectedCity) {
                    address += selectedCity[i].name
                    if (i != selectedCity.length - 1) {
                        address += ", "
                    }
                }
            } else {
                address += " в городе " + selectedCity.name;
            }
        }
        if (angular.isDefined(selectedStreet)) {
            address += " ул. "
            if (angular.isArray(selectedStreet)) {
                for (var i in selectedStreet) {
                    address += selectedStreet[i].name
                    if (selectedCity == undefined) {
                        address += " (" + selectedStreet[i].city + ")"
                    }
                    if (i != selectedStreet.length - 1) {
                        address += ", "
                    }
                }
            } else {
                address += selectedStreet.name
            }
        }
        if (angular.isDefined(phoneN)) {
            phone = "&phn=" + phoneN;
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

        /*
         address = "по адресу : "+
         */
        $scope.searchDesc = "Вы искали : " + company + category + address + tel
        console.log($scope.searchDesc)

    }
    function getResult(response) {
        console.log("Entering into getResult")
        parseResult(response)
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!response")
        console.log(response)
        var data = $scope.items;
        var founded = data.foundedByRequest;
        console.log(founded)
        if (founded == true) {
            console.log("founded!!!!!!!!!!")
        }

    }

    ///////////////////////////////////////////////
    // UPLOADING INITIAL 100 COMPANIES
    var data1 = {"isoCode": "en", "fromRecord": "0", "numberOfRecords": "100"}
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    $http.post("http://188.166.79.122:8080/exodus/company/pagination", data1, config)
        .then(parseResult)

    //////////////////////////////////////////////
    //SEND REQUEST BY CLICK ON CATEGORY IN SEARCH RESULT BLOCK COMPANY

    $scope.sendRequestOnCategory = function (cat) {
        console.log("id")
        console.log(cat)
        $scope.getSearchResult(undefined, undefined, undefined, undefined, cat, undefined, undefined)
    }

    ////////////////////////////////////////////////
    //LOADING FILTERS
    var vm = this;

    vm.disabled = undefined;
    vm.searchEnabled = undefined;

    vm.enable = function () {
        vm.disabled = false;
    };

    vm.disable = function () {
        vm.disabled = true;
    };

    vm.enableSearch = function () {
        vm.searchEnabled = true;
    };

    vm.disableSearch = function () {
        vm.searchEnabled = false;
    };

    vm.city = {};
    vm.category = {};
    vm.company = {};
    vm.street = {};

    vm.companiesList = [];

    var data = {"isoCode": "EN"};
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    $http.post("http://188.166.79.122:8080/exodus/init/addresses", data, config)
        .then(fulfilled)

    function fulfilled(response) {

        vm.items = response.data;
        var country = vm.items.addresses[0];
        vm.regions = parseRegions(country);
        vm.cities = parseCities(country);
        vm.streets = parseStreets(country);
        vm.buildings = parseBld(country);

        console.log("country :")
        console.log(country)
        console.log("regions :")
        console.log(vm.regions)
        console.log("cities :")
        console.log(vm.cities)
        console.log("streets :")
        console.log(vm.streets)
        console.log("blds :")
        console.log(vm.buildings)
        /*console.log("companies :")
         console.log(vm.companies)*/
        console.log("categories :")
        console.log(vm.categories)

        function parseRegions(country) {
            var regions = []
            for (var i in country.regions) {
                var region = country.regions[i].region;
                regions.push({"id": "" + i, "name": region});
            }
            return regions;
        }

        function parseCities(country) {
            var cities = []
            var id = 0;
            var regionId = 0;
            for (var i in country.regions) {
                var region = country.regions[i];
                for (var j in region.cities) {
                    var city = region.cities[j];
                    cities.push({"id": "" + id, "name": city.city, "parentId": "" + regionId});
                    id++;
                }
                regionId++;
            }
            return cities;
        }

        function parseStreets(country) {
            var streets = []
            var id = 0;
            var cityId = 0;
            for (var i in country.regions) {
                var region = country.regions[i];
                for (var j in region.cities) {
                    var city = region.cities[j];
                    for (var k in city.streets) {
                        var street = city.streets[k];
                        streets.push({
                            "id": "" + id,
                            "name": street.street,
                            "city": "" + city.city,
                            "parentId": "" + cityId,
                            "grandParentId": "" + i
                        });
                        id++;
                    }
                    cityId++;
                }
            }
            return streets;
        }

        function parseBld(country) {
            var buildings = []
            var id = 0;
            var streetId = 0;
            for (var i in country.regions) {
                var region = country.regions[i];
                for (var j in region.cities) {
                    var city = region.cities[j];
                    for (var k in city.streets) {
                        var street = city.streets[k];
                        for (var l in street.houses) {
                            var bld = street.houses[l]
                            buildings.push({
                                "id": "" + l,
                                "name": bld,
                                "street": "" + street.street,
                                "city": city.city,
                                "parentId": "" + streetId
                            });
                            id++;
                        }
                        streetId++;
                    }
                }
            }
            return buildings;
        }
    }

    $scope.keyUpFunc = function (selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, phonenumber, company) {
        $scope.request = collectFromFilters(selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, phonenumber, company)
    }

    vm.company = {};
    vm.refreshCompany = function (company) {
        if (company.length > 2) {
            /* console.log("request of compNames")
             console.log($scope.request)*/
            return $http.get(
                'http://188.166.79.122:8080/exodus//search/companies_names?' + $scope.request).then(function (response) {
                var result = response.data.companies;
                vm.companies = []
                for (var i in result) {
                    var companyNames = result[i].companyNames
                    for (var j in companyNames) {
                        var company = {
                            id: result[i].id,
                            name: companyNames[j].name
                        }
                        vm.companies.push(company)
                    }
                }
                console.log("vm.companies")
                console.log(vm.companies)
            });
        }
    };
    $scope.checktheParent = function (selectedRegion) {

        if (angular.isArray(selectedRegion)) {
            $scope.selectedRegionsIds = []
            for (var i in selectedRegion) {
                $scope.selectedRegionsIds.push(selectedRegion[i].id)
            }
            console.log("<<<<<<<<<<<<<<<<<<$scope.selectedRegionsIds")
            console.log($scope.selectedRegionsIds)
        }
    }

    $http.post("http://188.166.79.122:8080/exodus/init/categories", data, config)
        .then(fulfilledCategories)

    function fulfilledCategories(response) {
        vm.categories = response.data.categories;

    }

    var body = {};
    /*
     console.log(body)
     */

    /*$scope.models = [
        ["ruCompanyName", "enCompanyName", "frCompanyName", "heCompanyName"],
        ["ruRegion", "enRegion", "frRegion", "heRegion",],
        ["ruCity", "enCity", "frCity", "heCity"]
    ]*/

    $scope.inpAddresses = [{
        ruRegion: "",
        ruCity: "",
        ruStreet: "",
        ruBuilding: "",
        ruOffice: "",
        ruPhone: "",
        ruWorkHours: "",
        ruAdd: "",
        address: ""/*$scope.inpAddresses.ruRegion + ", " + $scope.inpAddresses.ruCity+", "+ $scope.inpAddresses.ruStreet+", "+ $scope.inpAddresses.ruBuilding*/
    }]
    /*if (angular.isDefined($scope.inpAddresses)) {
        if (!$scope.inpAddresses.isEmpty) {
            console.log("$scope.inpAddresses[0]")
            console.log($scope.inpAddresses[0])
        }
    }
*/
    var collectAddress=function(ruRegion){
        if(!angular.isDefined(ruRegion)){
            return ""
            console.log("empty region")
        }
        console.log("Region :" + ruRegion)
        return ruRegion+","
    }
    $scope.addAddr = function() {
        console.log("entering into addAddr")
        $scope.company.offeredAddresses.push(
            {
                email: "",
                workingTime: "",
                longitude: "",
                latitude: "",
                phone: "",
                mainAddress: false,
                addressLocales: {
                    ru: {
                        country: "",
                        region: "",
                        city: "",
                        street: "",
                        house: "",
                        additionalInfo: ""
                    },
                    en: {
                        country: "",
                        region: "",
                        city: "",
                        street: "",
                        house: "",
                        additionalInfo: ""
                    },
                    he: {
                        country: "",
                        region: "",
                        city: "",
                        street: "",
                        house: "",
                        additionalInfo: ""
                    },
                    fr: {
                        country: "",
                        region: "",
                        city: "",
                        street: "",
                        house: "",
                        additionalInfo: ""
                    }
                }
            }

        );
    }
    $scope.image={
        image:[]
    }
    $scope.company = {
        temporalStorageKey: null,
        logoName: null,
        webpage: "",
        offeredAddresses: [
            {
                email: "",
                workingTime: "",
                longitude: "",
                latitude: "",
                phone: "",
                mainAddress: false,
                addressLocales: {
                    ru: {
                        country: "",
                        region: "",
                        city: "",
                        street: "",
                        house: "",
                        additionalInfo: ""
                    },
                    en: {
                        country: "",
                        region: "",
                        city: "",
                        street: "",
                        house: "",
                        additionalInfo: ""
                    },
                    he: {
                        country: "",
                        region: "",
                        city: "",
                        street: "",
                        house: "",
                        additionalInfo: ""
                    },
                    fr: {
                        country: "",
                        region: "",
                        city: "",
                        street: "",
                        house: "",
                        additionalInfo: ""
                    }
                }
            }
        ],
        offeredCompanyName: {
            ru: "",
            en: "",
            fr: "",
            he: ""
        },
        categories: [],
        offeredAdvertisement: {
            ru: {
                advertisementPictureName: "",
                information: ""
            },
            en: {
                advertisementPictureName: "",
                information: ""
            },
            fr: {
                advertisementPictureName: "",
                information: ""
            },
            he: {
                advertisementPictureName: "",
                information: ""
            }
        }
    }

    var saveCompany = {
        "temporalStorageKey": null,
        "logoName": null,
        "webpage": "offeredCompany.com",
        "offeredAddresses": [
            {
                "email": "offeredAddress_1@gmail.com",
                "workingTime": "offeredAddress_1",
                "longitude": 11,
                "latitude": 11,
                "phone": "offeredAddress_1",
                "mainAddress": false,
                "addressLocales": {
                    "ru": {
                        "country": "РР·СЂР°РёР»СЊ",
                        "region": "Р¦РµРЅС‚СЂ",
                        "city": "Р РёС€РѕРЅ",
                        "street": "Р“РµСЂС†РµР»СЊ",
                        "house": "11",
                        "additionalInfo": "РґРѕРї_РёРЅС„Рѕ Р°РґСЂРµСЃ 1"
                    },
                    "en": {
                        "country": "Israel",
                        "region": "Center",
                        "city": "Rishon",
                        "street": "Herzel",
                        "house": "11",
                        "additionalInfo": "additional_info address 1"
                    },
                    "he": {
                        "country": "he_РР·СЂР°РёР»СЊ",
                        "region": "Р¦РµРЅС‚СЂ",
                        "city": "Р РёС€РѕРЅ",
                        "street": "Р“РµСЂС†РµР»СЊ",
                        "house": "11",
                        "additionalInfo": "РґРѕРї_РёРЅС„Рѕ Р°РґСЂРµСЃ 1"
                    },
                    "fr": {
                        "country": "fr_Israel",
                        "region": "Center",
                        "city": "Rishon",
                        "street": "Herzel",
                        "house": "11",
                        "additionalInfo": "additional_info address 1"
                    }
                }
            },
            {
                "email": "offeredAddress_2@gmail.com",
                "workingTime": "offeredAddress_2",
                "longitude": 22,
                "latitude": 22,
                "phone": "offeredAddress_2",
                "mainAddress": false,
                "addressLocales": {
                    "ru": {
                        "country": "РР·СЂР°РёР»СЊ",
                        "region": "РЎРµРІРµСЂ",
                        "city": "РҐР°Р№С„Р°",
                        "street": "Р‘РµРЅ-Р“СѓСЂРёРѕРЅ",
                        "house": "15",
                        "additionalInfo": "РґРѕРї_РёРЅС„Рѕ Р°РґСЂРµСЃ 2"
                    },
                    "en": {
                        "country": "Israel",
                        "region": "North",
                        "city": "Haifa",
                        "street": "Ben-Gurion",
                        "house": "15",
                        "additionalInfo": "additional_info address 2"
                    },
                    "he": {
                        "country": "he_РР·СЂР°РёР»СЊ",
                        "region": "РЎРµРІРµСЂ",
                        "city": "РҐР°Р№С„Р°",
                        "street": "Р‘РµРЅ-Р“СѓСЂРёРѕРЅ",
                        "house": "15",
                        "additionalInfo": "РґРѕРї_РёРЅС„Рѕ Р°РґСЂРµСЃ 2"
                    },
                    "fr": {
                        "country": "fr_Israel",
                        "region": "North",
                        "city": "Haifa",
                        "street": "Ben-Gurion",
                        "house": "15",
                        "additionalInfo": "additional_info address 2"
                    }
                }
            }
        ],
        "offeredCompanyName": {
            "ru": "Р”Р°РЅ Р±СЌ Р”Р°СЂРѕРј",
            "en": "Dan be Darom",
            "fr": "fr_Р”Р°РЅ Р±СЌ Р”Р°СЂРѕРј",
            "he": "he_Dan be Darom"
        },
        "categories": [
            1,
            2
        ],
        "offeredAdvertisement": {
            "ru": {
                "advertisementPictureName": null,
                "information": "ru_inf"
            },
            "en": {
                "advertisementPictureName": null,
                "information": "en_inf"
            },
            "fr": {
                "advertisementPictureName": null,
                "information": "fr_inf"
            },
            "he": {
                "advertisementPictureName": null,
                "information": "he_inf"
            }
        }
    }
    $scope.enabled=true

    $scope.check=function(){
        $scope.enabled=false
    }

    var locales = ['ru', 'en', 'fr', 'he']
    $scope.transliteName = function (text, from, to1, to2, to3) {
        body = {"text": text, "fromLanguage": from, "toLanguages": [to1, to2, to3]}
        sendPostLit(body)
    }
    var sendPostLit = function(body) {
        $http.post("http://188.166.79.122:8080/exodus/service/transliterate", body)
            .then(placeTranslation)
        function placeTranslation(response) {
            console.log("response")
            console.log(response)
            var req = response.config.data.fromLanguage
            console.log("req")
            console.log(req)
            var trLit = response.data.results
            console.log("trLit[he]")
            console.log(trLit["he"])
            if($scope.company.offeredCompanyName.ru==body.text || $scope.company.offeredCompanyName.en==body.text
                || $scope.company.offeredCompanyName.fr==body.text || $scope.company.offeredCompanyName.he==body.text) {
                switch (req) {
                    case "ru":
                        $scope.company.offeredCompanyName.en = trLit["en"];
                        $scope.company.offeredCompanyName.fr = trLit["fr"];
                        $scope.company.offeredCompanyName.he = trLit["he"];
                        break;
                    case "en":
                        $scope.company.offeredCompanyName.ru = trLit["ru"];
                        $scope.company.offeredCompanyName.fr = trLit["fr"];
                        $scope.company.offeredCompanyName.he = trLit["he"];
                        break;
                    case "fr":
                        $scope.company.offeredCompanyName.en = trLit["en"];
                        $scope.company.offeredCompanyName.ru = trLit["ru"];
                        $scope.company.offeredCompanyName.he = trLit["he"];
                        break;
                    case "he":
                        $scope.company.offeredCompanyName.en = trLit["en"];
                        $scope.company.offeredCompanyName.fr = trLit["fr"];
                        $scope.company.offeredCompanyName.ru = trLit["ru"];
                        break;
                }
            }
            /*Object.keys(objDictionary).forEach(function (key) {
                switch(key){
                    case "ru":
                }
                console.log(key)
                console.log(objDictionary[key])
            });*/
        }
    }

    $scope.translateCat=function(text,from,to1,to2,to3){
        var body = {"text": text, "fromLanguage": from, "toLanguages": [to1,to2,to3]}
        sendPost(body)
    }


    var sendPost = function(body) {
        $http.post("http://188.166.79.122:8080/exodus/service/translate", body)
            .then(placeTranslation)
        function placeTranslation(response) {
            console.log("response")
             console.log(response)
            var req = response.config.data.fromLanguage
            /*console.log("req")
             console.log(req)*/
            var objDictionaryCat = response.data.results
            /*console.log("objDictionary[he]")
             console.log(objDictionary["he"])*/
            switch(req){
                case "ru":
                    $scope.enCategory = objDictionaryCat["en"];
                    $scope.frCategory = objDictionaryCat["fr"];
                    $scope.heCategory = objDictionaryCat["he"];
                    break;
                case "en":
                    $scope.ruCategory = objDictionaryCat["ru"];
                    $scope.frCategory = objDictionaryCat["fr"];
                    $scope.heCategory = objDictionaryCat["he"];
                    break;
                case "fr":
                    $scope.enCategory = objDictionaryCat["en"];
                    $scope.ruCategory = objDictionaryCat["ru"];
                    $scope.heCategory = objDictionaryCat["he"];
                    break;
                case "he":
                    $scope.enCategory = objDictionaryCat["en"];
                    $scope.frCategory = objDictionaryCat["fr"];
                    $scope.ruCategory = objDictionaryCat["ru"];
                    break;
            }
            /*Object.keys(objDictionary).forEach(function (key) {
             switch(key){
             case "ru":
             }
             console.log(key)
             console.log(objDictionary[key])
             });*/
        }
    }
    $scope.address=""
    $scope.getAddresses=function(text){
        var body = {"addressString":text,"toLanguages" :['ru','en','fr','he']}
        sendPostAddr(body)
    }
    var sendPostAddr = function(body){
       /* var url ="http://188.166.79.122:8080/exodus/service/locate_by_address_string"
        console.log(body)*/
        $http.post("http://188.166.79.122:8080/exodus/service/locate_by_address_string", body).then(function(response){
            console.log("response")
            console.log(response)
            var addresses = response.data.addresses
            console.log("addresses")
             console.log(addresses.en.addressLocales)
            $scope.company.offeredAddresses[0].addressLocales.ru.country=addresses.ru.addressLocales[0].country
            $scope.company.offeredAddresses[0].addressLocales.ru.region=addresses.ru.addressLocales[0].region
            $scope.company.offeredAddresses[0].addressLocales.ru.city=addresses.ru.addressLocales[0].city
            $scope.company.offeredAddresses[0].addressLocales.ru.street=addresses.ru.addressLocales[0].street
            $scope.company.offeredAddresses[0].addressLocales.ru.house=addresses.ru.addressLocales[0].house

            $scope.company.offeredAddresses[0].addressLocales.en.country=addresses.en.addressLocales[0].country
            $scope.company.offeredAddresses[0].addressLocales.en.region=addresses.en.addressLocales[0].region
            $scope.company.offeredAddresses[0].addressLocales.en.city=addresses.en.addressLocales[0].city
            $scope.company.offeredAddresses[0].addressLocales.en.street=addresses.en.addressLocales[0].street
            $scope.company.offeredAddresses[0].addressLocales.en.house=addresses.en.addressLocales[0].house

            $scope.company.offeredAddresses[0].addressLocales.fr.country=addresses.fr.addressLocales[0].country
            $scope.company.offeredAddresses[0].addressLocales.fr.region=addresses.fr.addressLocales[0].region
            $scope.company.offeredAddresses[0].addressLocales.fr.city=addresses.fr.addressLocales[0].city
            $scope.company.offeredAddresses[0].addressLocales.fr.street=addresses.fr.addressLocales[0].street
            $scope.company.offeredAddresses[0].addressLocales.fr.house=addresses.fr.addressLocales[0].house

            $scope.company.offeredAddresses[0].addressLocales.he.country=addresses.he.addressLocales[0].country
            $scope.company.offeredAddresses[0].addressLocales.he.region=addresses.he.addressLocales[0].region
            $scope.company.offeredAddresses[0].addressLocales.he.city=addresses.he.addressLocales[0].city
            $scope.company.offeredAddresses[0].addressLocales.he.street=addresses.he.addressLocales[0].street
            $scope.company.offeredAddresses[0].addressLocales.he.house=addresses.he.addressLocales[0].house


        })
    }

    $scope.translateInfo=function(text,from,to1,to2,to3){
        var body = {"text": text, "fromLanguage": from, "toLanguages": [to1,to2,to3]}
        sendPostInfo(body)
    }


    var sendPostInfo = function(body) {
        $http.post("http://188.166.79.122:8080/exodus/service/translate", body)
            .then(placeTranslation)
        function placeTranslation(response) {
            var req = response.config.data.fromLanguage
            var objDictionary = response.data.results
            switch(req){
                case "ru":
                    $scope.company.offeredAddresses[0].addressLocales.en.additionalInfo = objDictionary["en"];
                    $scope.company.offeredAddresses[0].addressLocales.fr.additionalInfo = objDictionary["fr"];
                    $scope.company.offeredAddresses[0].addressLocales.he.additionalInfo = objDictionary["he"];
                    break;
                case "en":
                    $scope.company.offeredAddresses[0].addressLocales.ru.additionalInfo = objDictionary["ru"];
                    $scope.company.offeredAddresses[0].addressLocales.fr.additionalInfo = objDictionary["fr"];
                    $scope.company.offeredAddresses[0].addressLocales.he.additionalInfo = objDictionary["he"];
                    break;
                case "fr":
                    $scope.company.offeredAddresses[0].addressLocales.en.additionalInfo = objDictionary["en"];
                    $scope.company.offeredAddresses[0].addressLocales.ru.additionalInfo = objDictionary["ru"];
                    $scope.company.offeredAddresses[0].addressLocales.he.additionalInfo = objDictionary["he"];
                    break;
                case "he":
                    $scope.company.offeredAddresses[0].addressLocales.en.additionalInfo = objDictionaryCat["en"];
                    $scope.company.offeredAddresses[0].addressLocales.fr.dditionalInfo = objDictionaryCat["fr"];
                    $scope.company.offeredAddresses[0].addressLocales.ru.additionalInfo = objDictionaryCat["ru"];
                    break;
            }
        }
    }



   /* $scope.translate = function(model){
        console.log("angular.element(document.querySelector(.compName).attr(ng-model))")
        var elem = angular.element(document.querySelector(".compName"))
        var nameNgModel = elem.attr("ng-model")
        console.log(nameNgModel)
        var partModer=nameNgModel.substring(2)
        var locale = nameNgModel.substr(0,2)
        console.log(locale)
        switch(locale){
            case "ru":
                body = {"text":model,"fromLanguage":"ru","toLanguages":["en","he","fr"]};
                break;
            case "en":
                body = {"text":model,"fromLanguage":"en","toLanguages":["ru","he","fr"]};
                break;
            case "fr":
                body = {"text":model,"fromLanguage":"fr","toLanguages":["ru","he","en"]};
                break;
            case "he":
                body = {"text":model,"fromLanguage":"he","toLanguages":["ru","en","fr"]};
        }
        console.log(body)*/
        /*
        body = {"text":model,"fromLanguage":"ru","toLanguages":["en","he","fr"]};
*/

        /*$http.post("http://188.166.79.122:8080/exodus/service/transliterate", body)
            .then(placeTranslation)
        function placeTranslation(response) {
            var objDictionary = response.data.results
            console.log(objDictionary)
            Object.keys(objDictionary).forEach(function (key) {
                console.log(key)
                console.log(objDictionary[key])
            });
           /!* for(key in objDictionary) {
                console.log()
            }*!/
        }*/


});
