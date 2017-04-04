(function(){
    var app = angular.module('kukolicious', ['salon-template']);


    app.controller('SalonPhotosController', function($scope){
        $scope.photoTop = [
            { alt: 'Salon1', photo: '../img/salon1.jpg'},
            { alt: 'Salon2', photo: '../img/salon2.jpg'}
        ];

        $scope.photoBottom = [
            { alt: 'Salon3', photo: '../img/salon3.jpg'},
            { alt: 'Salon4', photo: '../img/salon4.jpg'}
        ];
    });

    /*
    app.controller('SalonPhotosController', ['$scope', '$http', function($scope, $http){

        $http.get('../data/photoTop.json').success(function(data){
            $scope.photoTop = data;
        });

        $http.get('../data/photoBottom.json').success(function(data){
            $scope.photoBottom = data;
        });

    }]);
     */

    app.controller('ServicesController', ['$scope', '$http', function($scope, $http){

        $http.get('../data/nailColor.json').success(function(data){
            $scope.nailColor = data;
        });

        $http.get('../data/massage.json').success(function(data){
            $scope.massage = data;
        });

        $http.get('../data/polish.json').success(function(data){
            $scope.polish = data;
        });

    }]);

    app.controller('GalleryController', function($scope){
        $scope.galleryR1 = [
            { alt1: 'leopard nail desig', photo1: '../img/nailDesign15.jpg',
                alt2: '3 nail design', photo2: '../img/nailDesign13.jpg'},
            { alt1: 'water transfer', photo1: '../img/nailDesign11.jpg',
                alt2: 'glitter color nail', photo2: '../img/nailDesign14.jpg'},
            { alt1: 'feather nail design', photo1: '../img/nailDesign7.jpg',
                alt2: '3 color nail', photo2: '../img/nailDesign6.jpg'},
            { alt1: 'symmetric nail design', photo1: '../img/nailDesign5.jpg',
                alt2: '2 color dotted nail', photo2: '../img/nailDesign3.jpg'}
        ];
        $scope.galleryR2 = [
            { alt1: 'glitter color nail', photo1: '../img/nailDesign10.jpg',
                alt2: 'glitter nail design', photo2: '../img/nailDesign12.jpg'},
            { alt1: '3 color nail', photo1: '../img/nailDesign4.jpg',
                alt2: '3 color nail', photo2: '../img/nailDesign1.jpg'},
            { alt1: 'symmetric nail design', photo1: '../img/nailDesign8.jpg',
                alt2: 'symmetric design', photo2: '../img/nailDesign16.jpg'},
            { alt1: 'heart nail design', photo1: '../img/nailDesign9.jpg',
                alt2: '2 color nail', photo2: '../img/nailDesign2.jpg'}
        ];
    });

    /*
    app.controller('GalleryController', ['$scope', '$http', function($scope, $http){

        $http.get('../data/galleryR1.json').success(function(data){
            $scope.galleryR1= data;
        });

        $http.get('../data/galleryR2.json').success(function(data){
            $scope.galleryR2 = data;
        });

    }]);
    */

})();
