        app.controller('menuCtrl', function($scope, $mdDialog, $timeout) {
            var self = this;
            self.hidden = false;
            self.isOpen = false;
            self.hover = false;
            // On opening, add a delayed property which shows tooltips after the speed dial has opened
            // so that they have the proper position; if closing, immediately hide the tooltips
            $scope.$watch('menu.isOpen', function(isOpen) {
                if (isOpen) {
                    $timeout(function() {
                        $scope.tooltipVisible = self.isOpen;
                    }, 600);
                } else {
                    $scope.tooltipVisible = self.isOpen;
                }
            });
            self.items = [
                { name: "Dashboard", link: "/#/main", icon: "view-dashboard", direction: "right" },
                { name: "About Us", link: "/#/about", icon: "worker", direction: "right" },
                { name: "Logout", link: "/logout", icon: "logout", direction: "right" }
            ];
            self.openDialog = function($event, item) {
                // Show the dialog
                $mdDialog.show({
                    clickOutsideToClose: true,
                    controller: function($mdDialog) {
                        // Save the clicked item
                        this.item = item;
                        // Setup some handlers
                        this.close = function() {
                            $mdDialog.cancel();
                        };
                        this.submit = function() {
                            $mdDialog.hide();
                        };
                    },
                    controllerAs: 'dialog',
                    // templateUrl: 'dialog.html',
                    targetEvent: $event
                });
            }
        });