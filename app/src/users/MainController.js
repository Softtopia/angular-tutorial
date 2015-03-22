(function () {

    angular
        .module('users')
        .controller('UserController', [
            'userService', '$mdSidenav', '$mdBottomSheet', '$mdToast', '$log', '$q',
            UserController
        ]);



    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function UserController(userService, $mdSidenav, $mdBottomSheet, $mdToast, $log, $q) {
        var self = this;

        var CODE_INDEX = 2;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.toggleList = toggleUsersList;
        self.share = share;
        self.next = next;
        self.previous = previous;
        self.showTheCode = showTheCode;


        self.data = {
            selectedIndex: 0
        };

        // Load all registered users

        userService
            .loadAllUsers()
            .then(function (users) {
                self.users = [].concat(users);
                self.selected = users[0];
            });

        // *********************************
        // Internal methods
        // *********************************

        function next() {
            self.data.selectedIndex = Math.min(self.data.selectedIndex + 1, 2);
        };

        function previous() {
            self.data.selectedIndex = Math.max(self.data.selectedIndex - 1, 0);
        };

        /**
         * First hide the bottomsheet IF visible, then
         * hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function () {
                $mdSidenav('left').toggle();
            });
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectUser(user) {
            showSimpleToast(user.name);
            self.selected = angular.isNumber(user) ? $scope.users[user] : user;
            self.toggleList();
        }

        function showSimpleToast(content) {
            $mdToast.show(
                $mdToast.simple()
                    .content(content)
                    .position('top right')
                    .hideDelay(3000)
            );
        }


        function showTheCode() {
            selectUser(self.users[CODE_INDEX]);
        }
        /**
         * Show the bottom sheet
         */
        function share($event) {
            var user = self.selected;

            $mdBottomSheet.show({
                parent: angular.element(document.getElementById('content')),
                templateUrl: '/src/users/view/contactSheet.html',
                controller: ['$mdBottomSheet', UserSheetController],
                controllerAs: "vm",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && $log.debug(clickedItem.name + ' clicked!');
            });

            /**
             * Bottom Sheet controller for the Avatar Actions
             */
            function UserSheetController($mdBottomSheet) {
                this.user = user;
                this.items = [
                    {name: 'Phone', icon: 'angular'},
                    {name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg'},
                    {name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg'},
                    {name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg'}
                ];
                this.performAction = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }

    }

})();
