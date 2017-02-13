

angular.module("MyApp").controller("MyAppCtrl", function ($scope, $rootScope, LanguageService,$http) {

    $scope.currentView="home"
 /*   $scope.selectedRegion;
    $scope.selectedCity
    $scope.selectedStreet;
    $scope.selectedBld;
    $scope.selectedCategory;*/


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
    var con, reg, cit, str, hou, cmn, phn, cat;
    $scope.companiesRequest = ""
    $scope.object = {
        con:String,
        reg:String/*$scope.selectedRegion.name*/,
        cit:String/*$scope.selectedCity.name*/,
        str:String,
        hou: String,
        cmn: "com",
        phn:String,
        cat:String
    }

    $scope.getObject = function(selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, phonenumber){
        console.log("Our object :")
        cmn=$scope.object.cmn
        console.log("cmn="+$scope.object.cmn)
        if(angular.isDefined(selectedCity)){
            cit = selectedCity.name
        }else{
            cit=""
        }
        if(angular.isDefined(selectedRegion)){
            reg=selectedRegion.name
        }else{
            reg=""
        }
        if(angular.isDefined(selectedStreet)){
            str=selectedStreet.name
        }else{
            str=""
        }
        if(angular.isDefined(selectedBld)){
            hou=selectedBld.name
        }else{
            hou=""
        }
        if(angular.isDefined(selectedCategory)){
            cat=selectedCategory.id
        }else{
            cat=""
        }
        if(angular.isDefined(phonenumber)){
            phn=phonenumber
        }else{
            phn=""
        }
        $scope.companiesRequest = "con=&reg="+reg+"&cit="+cit+"&str="+str+"&hou="+hou+"&cmn="+cmn+"&phn="+phn+"&cat="+cat
        console.log("$scope.companiesRequest :")
        console.log($scope.companiesRequest)

        $http.get("http://188.166.79.122:8080/exodus/search/companies_names?"+$scope.companiesRequest).then(fulfilled)
        function fulfilled(response) {
            console.log(response.data);

        }
    }

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
        console.log("category #1 :")
        console.log($scope.categories[0].name)

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
/*
    $http.post("http://188.166.79.122:8080/exodus/init/addresses", data, config)
*/





});
