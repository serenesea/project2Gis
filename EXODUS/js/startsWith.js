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
        };
    });