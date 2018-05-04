(function () {
    'use strict';

    angular.module('courseViewer').component('author', {
        bindings: {
            authorId: '<'
        },
        controllerAs: 'vm',
        controller: function (authorService) {
            var vm = this;

            vm.author = null;

            vm.$onInit = function () {
                if (vm.authorId) {
                    authorService.getAuthor(vm.authorId).then(function (author) {
                        vm.author = author;
                    });
                }
            }
        },
        templateUrl: 'app/author/author.component.html'
    });
})();
