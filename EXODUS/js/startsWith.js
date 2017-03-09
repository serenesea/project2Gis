/**
 * Created by Антонина on 2/20/2017.
 */
angular.module('MyApp')

    .filter('startsWith', function() {
        return function(array, search) {
            if(!angular.isUndefined(array) && !angular.isUndefined(search)) {
                var matches = [];
                for (var i = 0; i < array.length; i++) {
                    if (array[i].name.toLowerCase().indexOf(search.toLowerCase()) === 0 &&
                        search.length < array[i].name.length) {
                        matches.push(array[i]);
                    }
                }
            }else{
                matches=array
            }
            return matches;
        }
    })
angular.module('MyApp')
    .filter('onParent', function() {

        return function (items, filters){
            /*console.log("items, filters")
            console.log(items,filters)*/

            var matches = [];

            if(!angular.isUndefined(items) && !angular.isUndefined(filters) && filters.length>0) {
                /*console.log("all is defined")*/
                var filterId=[];
                filters.forEach(function (filter) {
                    filterId.push(filter.id)
                });
                /*console.log("filterId")
                console.log(filterId)*/

                items.forEach(function (item) {
                    if (filterId.indexOf(item.parentId) != -1) {
                        matches.push(item);
                    }
                })
            }else {
                matches = items;
            }
            /*console.log("matches")
            console.log(matches)*/
            return matches;
        }
    });
