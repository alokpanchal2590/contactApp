// directives
        myApp.directive('contact', function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'src/view/contact.html'
            }
            })