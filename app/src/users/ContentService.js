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
            },
            {
                name: 'Sample App',
                avatar: 'add_box',
                content: "Here we have a simple app, let's take a look at it's code.",
                content_html: '/src/users/view/sampleApp.html',
                code: {javascript: '/src/samples/sampleApp.js', html: '/src/samples/sampleApp.html', css: '/src/samples/sampleApp.css', src: '/src/samples/sampleApp.html'}
            },
            {
                name: 'Reuse with Style',
                avatar: 'add_box',
                content: 'Controllers, Factories, Services, Modules, Dependency Injection'
            },
            {
                name: 'The server data',
                avatar: 'add_box',
                content: "So, how to get Server Data ?."
            },
            {
                name: 'The App anatomy',
                avatar: 'add_box',
                content: "Bootstrapping, Configuring and Routing"
            },
            {
                name: 'Test',
                avatar: 'add_box',
                content: "Testing is easy with Angular"
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
