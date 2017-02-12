/**
 * Created by Антонина on 31.01.2017.
 */

angular.module("MyApp").controller("MyAppCtrl", function ($scope, $http) {

    $scope.currentView="home"

    $scope.goToView = function(view){
        $scope.currentView=view
    }

 $scope.key = '';
    $scope.search = function (value) {
        return value.indexOf($scope.key) >= 0;
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
        $scope.categories = response.data;

        }
    $http.post("http://188.166.79.122:8080/exodus/init/addresses", data, config)




    $scope.selectedParentItem;
    $scope.selectedChildItem;
    $scope.selectedGrandChildItem;
    $scope.selectedGrandGrandChildItem;
});
