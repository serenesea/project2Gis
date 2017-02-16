

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
        $scope.currentView=view
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

    $scope.getCompList = function(selectedRegion, selectedCity, selectedStreet, selectedBld,selectedCategory, company, phonenumber){
    $http.get("http://188.166.79.122:8080/exodus/search/companies?cmn=comp&cat=1&cat=4&reg=center").then(getSearchResult)
        function getSearchResult(response) {
            $scope.items = response.data;
            var companies = $scope.items.companies;
            $scope.companiesArr = parseCompList(companies)
            function parseCompList(companies){
                var compArr = [];
                for (i in companies){
                    var names = companies[i].companyNames;

                        compArr[i] = {
                            id: companies[i].id,
                            name: companies[i].companyNames[0].name,
                            address: companies[i].addresses[0].city+", "+companies[i].addresses[0].street+", "+companies[i].addresses[0].house,
                            categories: "",
                            tel: "none",
                            email:"none",
                            web:"none"
                        }
                }
                console.log("compArr")
                console.log(compArr)
                return compArr;
                }
        console.log("List search :")
            console.log(response.data.companies)
        }
    }

    ///////////////////////////////////////////////
    // UPLOADING INITIAL 100 COMPANIES
var data1 = {"isoCode":"en","fromRecord":"1","numberOfRecords":"100"}

    $http.post("http://188.166.79.122:8080/exodus/company/pagination", data1, config)
        .then(fulfilledInitRes)
    function fulfilledInitRes(response){
        $scope.items = response.data;
        var companies = $scope.items.companies;
        console.log("!!!companies")
        console.log(companies)
        $scope.companiesArr = [];
        for(var i in companies){
            var addresses = companies[i].addresses;
            var categories = companies[i].categories


            for( var j in addresses){
                var categoriesList=""
                for (var l in categories){
                    var categoryLocales = categories[l].categoryLocales
                    for (var n in categoryLocales){
                        categoriesList=categoriesList+ categoryLocales[n].name+"|"
                    }
                }
                $scope.companiesArr[i]={
/*
                    name: companies[i].companyNames[0].name,
*/
                    id:companies[i].id,
                    web: companies[i].webpage,
                    address:addresses[j].city+", "+addresses[j].street+", "+addresses[j].house,
                    categories: categoriesList,
                    phone: addresses[j].phone
                }
/*
                var name = companies[i].companyNames[0].name;
*/
                var id = companies[i].id;
                var web = companies[i].webpage;
                var addressId = addresses[j].id
                var country = addresses[j].country
                var region = addresses[j].region
                var city = addresses[j].city
                var street = addresses[j].street
                var house = addresses[j].house
                var additionalInfo = addresses[j].additionalInfo
                var email = addresses[j].email
                var workingTime = addresses[j].workingTime
                var longitude = addresses[j].longitude
                var latitude = addresses[j].latitude
                var phone = addresses[j].phone
                var address = city+", "+street+", "+house
            }

        }
        console.log("!!!!!companiesArr:")
        console.log($scope.companiesArr)

    }


    //////////////////////////////////////////////////////////
/*     UPLOADING FILTERS "address"    */

    var data = {"isoCode": "EN"};
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    $http.post("http://188.166.79.122:8080/exodus/init/addresses", data, config)
        .then(fulfilled)

    function fulfilled(response) {

        $scope.items = response.data;
        var country = $scope.items.addresses[0];
        $scope.regions = parseRegions(country);
        $scope.cities = parseCities(country);
        $scope.streets = parseStreets(country);
        $scope.buildings = parseBld(country);

        console.log("country :")
        console.log(country)
        console.log("regions :")
        console.log($scope.regions)
        console.log("cities :")
        console.log($scope.cities)
        console.log("streets :")
        console.log($scope.streets)
        console.log("blds :")
        console.log($scope.buildings)
        console.log("companies :")
        console.log($scope.companies)
        console.log("categories :")
        console.log($scope.categories)
/*
        console.log("category #1 :")
*/
/*
        console.log($scope.categories[0].name)
*/

        function parseRegions(country) {
            var regions = []
            for (var i in country.regions) {
                var region = country.regions[i].region;
                regions.push({"id": "" + i, "name": region});
            }
            return regions;
        }
        function parseCities(country) {
            var cities=[]
            var id =0;
            var regionId = 0;
            for (var i in country.regions) {
                    var region = country.regions[i];
                    for (var j in region.cities) {
                        var city = region.cities[j];
                        cities.push({"id": ""+id, "name": city.city, "regionId":""+regionId});
                        id++;
                    }
                    regionId++;
                }
            return cities;
        }
        function parseStreets(country) {
            var streets=[]
            var id =0;
            var cityId = 0;
            for (var i in country.regions) {
                var region = country.regions[i];
                for (var j in region.cities) {
                    var city = region.cities[j];
                    for (var k in city.streets) {
                        var street = city.streets[k];
                        streets.push({"id": "" + id, "name": street.street, "cityId": "" + cityId});
                        id++;
                    }
                    cityId++;
                }
            }
            return streets;
        }
        function parseBld(country) {
            var buildings=[]
            var id =0;
            var streetId = 0;
            for (var i in country.regions) {
                var region = country.regions[i];
                for (var j in region.cities) {
                    var city = region.cities[j];
                    for (var k in city.streets) {
                        var street = city.streets[k];
                        for (var l in street.houses) {
                            var bld = street.houses[l]
                                buildings.push({"id": "" + l, "name": bld, "streetId": "" + streetId});
                                id++;
                        }
                        streetId++;
                    }
                }
            }
            return buildings;
        }
    }


    $http.post("http://188.166.79.122:8080/exodus/init/categories", data, config)
        .then(fulfilledCategories)

    function fulfilledCategories(response) {
        $scope.categories = response.data.categories;

        }


});
