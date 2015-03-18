(function(){
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
  function UserService($q){
    var users = [
      {
        name: 'Introduction',
        avatar: 'add_box',
        //content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
        content_html: '/src/users/view/introduction.html',
        links : [ { name: 'AngularJS web site', icon: 'angular', url: 'http://www.angularjs.org'} ]
      },
      {
        name: 'Templates',
        avatar: 'svg-2',
        content: 'Compiled at client side, Expressions, Data Binding, it brings us to directives:.',
        content_html: '/src/users/view/templates.html',
        code : { javascript: '/src/users/UserController.js'}
      },
      {
        name: 'Directives',
        avatar: 'svg-3',
        content: "The way we write."
      },
      {
        name: 'Scope',
        avatar: 'svg-4',
        content: 'Where the model is.'
      },
      {
        name: 'Filters',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'Reuse with style',
        avatar: 'svg-6',
        content: "Modules, Services, Dependency Injection."
      },
        {
            name: 'Go deeper',
            avatar: 'svg-6',
            content: "References, slides, courses..."
        }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
