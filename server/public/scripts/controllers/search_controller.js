giphyApp.controller('SearchController', function ($http) {
    console.log('SearchController started.');
    var vm = this;
    vm.searchResults = [];
    vm.keyword = '';
    
    // Start by implementing these functions in
    // this controller. Once everything is working,
    // try moving randomSearch and keywordSearch
    // into a service.

    // Search for random giphy images
    vm.randomSearch = function() {
        // YOUR CODE HERE
    }

    // Search for giphy images by keyword
    vm.keywordSearch = function(keyword) {
        // YOUR CODE HERE
    }

});