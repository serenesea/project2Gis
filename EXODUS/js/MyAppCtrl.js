

angular.module("MyApp").controller("MyAppCtrl", function ($scope, $rootScope, LanguageService,$http) {

    $scope.currentView="home";
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
        initMenuItems();
        return $rootScope.language ;
    },function (newValue, oldValue) {
        var applyFn = function(){
            $scope.lang = LanguageService[$rootScope.language];
        }
        if ($scope.$$phase) {
            applyFn();
        } else {
            $scope.$apply(applyFn);
        }
    }, true);


    var initMenuItems = function () {
        //console.log("URA!");
        var elem = angular.element(document.querySelector("body"));
        var elemHeader = angular.element(document.querySelector(".elemHeader"));
        var elemNavLeft = angular.element(document.querySelector(".navbarLeft"));
        var elemNavRight = angular.element(document.querySelector(".navbarRight"));
        var elemDivLtrRtl = angular.element(document.querySelector("div.ltrRtl"));
        var elemDivCompanies = angular.element(document.querySelector(".elemDivCompanies"));
        //alert("!!!" + elem.prop("dir"));
        //console.log("URA!");
        if(elem.prop("dir") == "rtl") {
            //alert("!!" + elem.prop("dir"));
            elemHeader.addClass("my_float_rtl");
            if(elemHeader.hasClass("my_float_ltr")) elemHeader.removeClass("my_float_ltr");
            elemNavLeft.addClass("navbar-right");
            elemNavLeft.addClass("my_float_rtl");
            if(elemNavLeft.hasClass("navbar-left")) elemNavLeft.removeClass("navbar-left");
            if(elemNavLeft.hasClass("my_float_ltr")) elemNavLeft.removeClass("my_float_ltr");
            elemNavRight.addClass("navbar-left");
            if(elemNavRight.hasClass("navbar-right")) elemNavLeft.removeClass("navbar-right");
            elemDivCompanies.addClass("my_float_rtl");
            if(elemDivCompanies.hasClass("my_float_ltr")) elemDivCompanies.removeClass("my_float_ltr");
            elemDivLtrRtl.children().addClass("my_float_rtl");
            if(elemDivLtrRtl.children().hasClass("my_float_ltr")) elemDivLtrRtl.children().removeClass("my_float_ltr");
        //     elem.children().children().addClass("my_float_ltr");
        //     if(elem.children().children().hasClass("my_float_rtl")) {
        //         elem.children().children().removeClass("my_float_rtl");
        //     }
        } else {
            //alert("!!!!" + elem.prop("dir"));
            elemHeader.addClass("my_float_ltr");
            if(elemHeader.hasClass("my_float_rtl")) elemHeader.removeClass("my_float_rtl");
            elemNavLeft.addClass("navbar-left");
            elemNavLeft.addClass("my_float_ltr");
            if(elemNavLeft.hasClass("navbar-right")) elemNavLeft.removeClass("navbar-right");
            if(elemNavLeft.hasClass("my_float_rtl")) elemNavLeft.removeClass("my_float_rtl");
            elemNavRight.addClass("navbar-right");
            if(elemNavRight.hasClass("navbar-left")) elemNavLeft.removeClass("navbar-left");
            elemDivCompanies.addClass("my_float_ltr");
            if(elemDivCompanies.hasClass("my_float_rtl")) elemDivCompanies.removeClass("my_float_rtl");
            elemDivLtrRtl.children().addClass("my_float_ltr");
            if(elemDivLtrRtl.children().hasClass("my_float_rtl")) elemDivLtrRtl.children().removeClass("my_float_rtl");
        //     elem.children().children().addClass("my_float_rtl");
        //     if(elem.children().children().hasClass("my_float_ltr")) {
        //         elem.children().children().removeClass("my_float_ltr");
        //     }

        }
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

    $scope.getObject = function(selectedRegion, selectedCity, selectedStreet, selectedBld, selectedCategory, company, phonenumber){
        //console.log("Our object :")
      /*  cmn=$scope.object.cmn
        console.log("cmn="+$scope.object.cmn)*/
        if(angular.isDefined(company)){
           /* if(company.toString().length>=3){
                console.log("Request is sent")
            }*/
            cmn = company
        }else{
            cmn=""
        }
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
        //console.log("$scope.companiesRequest :")
        //console.log($scope.companiesRequest)

        $http.get("http://188.166.79.122:8080/exodus/search/companies_names?"+$scope.companiesRequest).then(getCompNamesList)
        function getCompNamesList(response) {
            var companiesList = [];
            var companies = response.data.companies;
            for (var i in companies) {
                var companyNames = companies[i].companyNames
                for(var j in companyNames){
                    companiesList.push(companyNames[j].name)
                }
            }
        //    console.log("List of companies names: ")
        //    console.log(companiesList)
        }
    }


    $scope.getCompList = function(selectedRegion, selectedCity, selectedStreet, selectedBld,selectedCategory, company, phonenumber){
    $http.get("http://188.166.79.122:8080/exodus/search/companies?cmn=comp&cat=1&cat=4&reg=center").then(getSearchResult)
        function getSearchResult(response) {
            $scope.items = response.data;
            var companies = $scope.items.companies;
            $scope.companiesArr = parseCompList(companies);
            function parseCompList(companies){
                var compArr = [];
                for (var i in companies){
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
        //        console.log("compArr");
        //        console.log(compArr);
                return compArr;
                }
        //console.log("List search :");
        //    console.log(response.data.companies)
        }
    }

var data1 = {"isoCode":"en","fromRecord":"1","numberOfRecords":"100"}

    $http.post("http://188.166.79.122:8080/exodus/company/pagination", data1, config)
        .then(fulfilledInitRes)
    function fulfilledInitRes(response){
        $scope.items = response.data;
        var companies = $scope.items.companies
        $scope.companiesArr = [];
        for(var i in companies){
            var addresses = companies[i].addresses;
            var categories = companies[i].categories


            for( var j in addresses){
                var categoriesList=","
                for (var l in categories){
                    var categoryLocales = categories[l].categoryLocales
                    for (var n in categoryLocales){
                        categoriesList=categoriesList+ categoryLocales[n].name
                    }
                }
                $scope.companiesArr[i]={
                    name: companies[i].companyNames[0].name,
                    id:companies[i].id,
                    web: companies[i].webpage,
                    address:addresses[j].city+", "+addresses[j].street+", "+addresses[j].house,
                    categories: categoriesList,
                    phone: addresses[j].phone
                }
                var name = companies[i].companyNames[0].name;
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
        //console.log("!!!!!companiesArr:");
        //console.log($scope.companiesArr);

    }
    var data = {"isoCode": "EN"};
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    $http.post("http://188.166.79.122:8080/exodus/init/addresses", data, config)
        .then(fulfilled);

    function fulfilled(response) {

        $scope.items = response.data;
        var country = $scope.items.addresses[0];
        $scope.regions = parseRegions(country);
        $scope.cities = parseCities(country);
        $scope.streets = parseStreets(country);
        $scope.buildings = parseBld(country);

        // console.log("country :");
        // console.log(country);
        // console.log("regions :");
        // console.log($scope.regions);
        // console.log("cities :");
        // console.log($scope.cities);
        // console.log("streets :");
        // console.log($scope.streets);
        // console.log("blds :");
        // console.log($scope.buildings);
        // console.log("companies :");
        // console.log($scope.companies);
        // console.log("categories :");
        // console.log($scope.categories);
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
