'use strict';

/*
var app = angular.module('demo', ['ngSanitize', 'ui.select']);
*/

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs an AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform an OR.
 */
/*angular.module("MyApp")
    .filter('propsFilter', function() {
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
})*/

angular.module("MyApp").controller('UiSelectCtrl', function ($scope, $http, $timeout, $interval, startsWithFilter) {
  /*var vm = this;

  vm.disabled = undefined;
  vm.searchEnabled = undefined;

  // vm.setInputFocus = function (){
  //   $scope.$broadcast('UiSelectDemo1');
  // };

  vm.enable = function() {
    vm.disabled = false;
  };

  vm.disable = function() {
    vm.disabled = true;
  };

  vm.enableSearch = function() {
    vm.searchEnabled = true;
  };

  vm.disableSearch = function() {
    vm.searchEnabled = false;
  };

  /!*vm.clear = function() {
    vm.person.selected = undefined;
    vm.address.selected = undefined;
    vm.city.selected = undefined;
    vm.company=undefined;
  };*!/

  // vm.someGroupFn = function (item){
  //
  //   if (item.name[0] >= 'A' && item.name[0] <= 'M')
  //       return 'From A - M';
  //
  //   if (item.name[0] >= 'N' && item.name[0] <= 'Z')
  //       return 'From N - Z';
  //
  // };

  /!*vm.firstLetterGroupFn = function (item){
      return item.name[0];
  };*!/

  // vm.reverseOrderFilterFn = function(groups) {
  //   return groups.reverse();
  // };

  /!*vm.personAsync = {selected : "wladimir@email.com"};
  vm.peopleAsync = [];*!/

  /!*$timeout(function(){
   vm.peopleAsync = [
        { name: 'Ashdod',      region: 'South',      streets: ['Eli-Cohen','Bar Kokhba']},
        { name: 'Tel-aviv',    region: 'Center',    streets: ['Herzel']},
        { name: 'Yaffo',    region: 'Center',    streets: ['Herzel']},
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicole@email.com',    age: 43, country: 'Colombia' }
      ];
  },3000);

  vm.counter = 0;
  vm.onSelectCallback = function (item, model){
    vm.counter++;
    vm.eventResult = {item: item, model: model};
  };
*!/
 /!* vm.removed = function (item, model) {
    vm.lastRemoved = {
        item: item,
        model: model
    };
  };*!/

  /!*vm.tagTransform = function (newTag) {
    var item = {
        name: newTag,
        email: newTag.toLowerCase()+'@email.com',
        age: 'unknown',
        country: 'unknown'
    };

    return item;
  };
*!/
 /!* vm.peopleObj = {
    '1' : { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
    '2' : { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
    '3' : { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    '4' : { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
    '5' : { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
    '6' : { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
    '7' : { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
    '8' : { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
    '9' : { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
    '10' : { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
  };

  vm.person = {};

  vm.person.selectedValue = vm.peopleObj[3];
  vm.person.selectedSingle = 'Samantha';
  vm.person.selectedSingleKey = '5';
  // To run the demos with a preselected person object, uncomment the line below.
  //vm.person.selected = vm.person.selectedValue;

  vm.people = [
    { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
    { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
    { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
    { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
    { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
    { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
    { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
  ];*!/

 /!* vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

  vm.singleDemo = {};
  vm.singleDemo.color = '';
  vm.multipleDemo = {};
  vm.multipleDemo.colors = ['Blue','Red'];
  vm.multipleDemo.colors2 = ['Blue','Red'];
  vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
  vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
  vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
  vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
  vm.multipleDemo.removeSelectIsFalse = [vm.people[2], vm.people[0]];

  vm.appendToBodyDemo = {
    remainingToggleTime: 0,
    present: true,
    startToggleTimer: function() {
      var scope = vm.appendToBodyDemo;
      var promise = $interval(function() {
        if (scope.remainingTime < 1000) {
          $interval.cancel(promise);
          scope.present = !scope.present;
          scope.remainingTime = 0;
        } else {
          scope.remainingTime -= 1000;
        }
      }, 1000);
      scope.remainingTime = 3000;
    }
  };*!/
/!*
  vm.address = {};
  vm.refreshAddresses = function(address) {
    var params = {address: address, sensor: false};
    return $http.get(
      'http://maps.googleapis.com/maps/api/geocode/json',
      {params: params}
    ).then(function(response) {
      vm.addresses = response.data.results;
    });
  };
  *!/
    vm.company = {};
    vm.refreshCompany = function(company) {
        if (company.length > 2){
            return $http.get(
                'http://188.166.79.122:8080/exodus//search/companies_names?cmn=comp&isc=en&reg=center&cit=tel-aviv'
            ).then(function (response) {
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

  /!*vm.addPerson = function(item, model){
    if(item.hasOwnProperty('isTag')) {
      delete item.isTag;
      vm.people.push(item);
    }
  }*!/

  vm.city = {};
  vm.category = {};
  vm.company = {};
  vm.street = {};

    vm.companiesList = [];

   /!* vm.refreshCompNames = function(input) {
        console.log("vm.companiesList")
        if(angular.isUndefined(input) || input == null) return [];
        if(input.length < 2) return [];
        vm.companiesList = vm.people;
        console.log("vm.companiesList")
        console.log(vm.companiesList)
        return vm.companiesList;
    }*!/

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
    console.log("companies :")
    console.log(vm.companies)
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
            streets.push({"id": "" + id, "name": street.street, "city": ""+city.city,"cityId": "" + cityId, "regionId":""+i});
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
    vm.categories = response.data.categories;

  }
*/


});
