(function () {
    'use strict';

    angular.module('users')
        .service('userService', ['$q', UserService]);

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function UserService($q) {
        var users = [
            {
                name: 'Introduction',
                avatar: 'add_box',
                //content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
                content_html: '/src/users/view/introduction.html',
                links: [{name: 'AngularJS web site', icon: 'angular', url: 'http://www.angularjs.org'}]
            },
            {
                name: 'The Concepts',
                avatar: 'add_box',
                content_html: '/src/users/view/concepts.html',
                code: {html: '/src/samples/templateSample.html'}
            },
            {
                name: 'Sample App',
                avatar: 'add_box',
                content: "The way we write.",
                content_html: '/src/users/view/directives.html',
                code: {javascript: '/src/samples/sampleApp.js', html: '/src/samples/sampleApp.html', src: '/src/samples/sampleApp.html'}
            },
            {
                name: 'Scope',
                avatar: 'add_box',
                content: 'Where the model is.'
            },
            {
                name: 'Filters',
                avatar: 'add_box',
                content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
            },
            {
                name: 'Reuse with style',
                avatar: 'add_box',
                content: "Modules, Services, Dependency Injection."
            },
            {
                name: 'Go deeper',
                avatar: 'add_box',
                content: "References, slides, courses..."
            }
        ];

        // Promise-based API
        return {
            loadAllUsers: function () {
                // Simulate async nature of real remote calls
                return $q.when(users);
            }
        };
    }

})();
