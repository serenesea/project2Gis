
///////////////////////////////////////////////////////////////
document.write('<script type="text/javascript" src="jsonData.js"></script>')

var districts = [];
districts=parseAreas(jsonData);

function parseAreas(jsonData) {
    for (var i in jsonData) {
        var country = jsonData[i];

        console.log("country : ")
        console.log(country)
        for (var j in country.areas) {
            var area = country.areas[j];
            /*var flag = false;
            for (var k in districts){
                if (districts[k].name == area.name) {
                    flag = true;
                }
            }
            if (flag == false){*/
                districts.push({"id": ""+j, "name": area.name});
          /*  }*/
        }
    }
    return districts;
}
////////////////////////////////////////////////////////////////
var cities = [];
cities = parseCities(jsonData);

function parseCities(jsonData) {
    var id =0;
    var areaId = 0;
    for (var i in jsonData) {
        var country = jsonData[i];
        for (var j in country.areas) {
            var area = country.areas[j];
            for (var m in area.cities) {
                var city = area.cities[m];
               /* var flag = false;
                for (var k in cities){
                    if (cities[k].name == city.name) {
                        flag = true;
                    }
                }
                if (flag == false){*/
                    cities.push({"id": ""+id, "name": city.name, "areaId":""+areaId});
                id++;
               /* }*/
            }
            areaId++;
        }
    }
    return cities;
}
////////////////////////////////////////////////////////////////////
var streets = [];
streets = parseStreets(jsonData);

function parseStreets(jsonData) {
    var id = 0;
    var cityId = 0;
    for (var i in jsonData) {
        var country = jsonData[i];
        for (var j in country.areas) {
            var area = country.areas[j];
            for (var m in area.cities) {
                var city = area.cities[m];
                for (var l in city.streets) {
                    var street = city.streets[l];
                    /*var flag = false;
                     for (var k in streets){
                     if (streets[k].name == street.name) {
                     flag = true;
                     }
                     }
                     if (flag == false){*/
                     streets.push({"id":""+id, "name": street.name, "cityId":""+cityId});
                    id++;
                     // }
                }
                cityId++;
            }
        }
    }
    return streets;
}
/////////////////////////////////////////////////////////
var buildings = [];
buildings = parseBld(jsonData);

function parseBld(jsonData) {
    var id = 0;
    var streetId = 0;
    for (var i in jsonData) {
        var country = jsonData[i];
        for (var j in country.areas) {
            var area = country.areas[j];
            for (var m in area.cities) {
                var city = area.cities[m];
                for (var l in city.streets) {
                    var street = city.streets[l];
                    for (var n in street.addresses) {
                        var bld = street.addresses[n];
                        buildings.push({"id": "" + id, "name": bld, "streetId": "" + streetId});
                        id++;
                    }
                    streetId++
                }
            }
        }
    }
    return buildings;
}