giphyApp.controller('SearchController', function ($http) {
    console.log('SearchController started.');
    var vm = this;
    vm.searchResults = [];
    vm.keyword = '';
    vm.randomImage = '';
    
    // Start by implementing these functions in
    // this controller. Once everything is working,
    // try moving randomSearch and keywordSearch
    // into a service.

    // Search for random giphy images
    vm.randomSearch = function() {
        // YOUR CODE HERE
        $http({
            method: 'GET',
            url:'/giphy/random',
            params: {
                
            } //include https://, add ? because it's a query, says these are my params, then api_key=, & for and (&tag=taco)
        }).then(function(response){
            console.log('random search response', response.data); //log data because angular, angular sends response wrapped in data, giphy sends back a property that IS data. Inside data property has things we might want to use.
            vm.randomImage = response.data.data.image_original_url;
            

        })
    }
    vm.randomSearch();

    // Search for giphy images by keyword
    vm.keywordSearch = function(keyword) {
        var keyword = 'friday';
        // YOUR CODE HERE
        $http({
            method: 'GET',
            url:'/giphy/search',
        }).then(function(response){
            console.log('keyword search response', response);
            vm.searchResults = response.data.data;
            
        })
    }
    vm.keywordSearch();
});