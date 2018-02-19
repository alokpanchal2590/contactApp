

// controllers
myApp.controller('navCtrl', function ($scope) {
            $scope.nav = {
                navItems: ['home', 'add'],
                selectedIndex: 0,
                navClick: function ($index) {
                $scope.nav.selectedIndex = $index;
                }
            };
            })

            .controller('homeCtrl', function ($scope, ContactService){
            $scope.contacts = ContactService.getContacts();

            $scope.removeContact = function (item) {
                var index = $scope.contacts.indexOf(item);
                $scope.contacts.splice(index, 1);
                $scope.removed = 'Contact successfully removed.';
            };

            })

            .controller('contactInfoCtrl', function ($scope, $routeParams){
            var index = $routeParams.contact_index;
            $scope.currentContact = $scope.contacts[index];
            })

            .controller('addContactCtrl', function ($scope, $location) {
            //needed to show the correct button on the contact form
            $scope.path = $location.path();

            $scope.addContact = function () {
                var contact = $scope.currentContact;
                contact.id = $scope.contacts.length;
                $scope.contacts.push(contact);
            };

            })

            .controller('editContactCtrl', function ($scope, $routeParams){
            $scope.index = $routeParams.contact_index;
            $scope.currentContact = $scope.contacts[$scope.index];
            })