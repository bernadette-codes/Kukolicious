(function(){
    var app = angular.module('kukolicious', ['salon-template']);

    app.controller('salonPhotosController', function($scope){
        $scope.photoTop = [
            { alt: 'Salon1', photo: '../img/salon1.jpg'},
            { alt: 'Salon2', photo: '../img/salon2.jpg'}
        ];
        $scope.photoBottom = [
            { alt: 'Salon3', photo: '../img/salon3.jpg'},
            { alt: 'Salon4', photo: '../img/salon4.jpg'}
        ];
    });

    app.controller('servicesController', function($scope){
        $scope.nailColor = [
            {
                type: 'Manicure',
                lists: [
                    ['Basic', '$11'],
                    ['Buff', '$13'],
                    ['French Manicure', '$15'],
                    ['Spa', '$30'],
                    ['Paraffin', '$20'],
                    ['Color Gel', '$35'],
                    ['Kids', '$7'],
                    ['Polish Change', '$7'],
                    ['Soak Off', '$7'],
                    ['Nail Art', '$15 and up']
                ]
            },
            {
                type: 'Pedicure',
                lists: [
                    ['Basic', '$22'],
                    ['Buff', '$25'],
                    ['French Manicure', '$23'],
                    ['Spa', '$55'],
                    ['Paraffin', '$30'],
                    ['Color Gel', '$55'],
                    ['Kids', '$12'],
                    ['Polish Change', '$12'],
                    ['Soak Off', '$15'],
                    ['Nail Art', '$26 and up']
                ]
            }
        ];
        $scope.massage = [
            {
                type: 'Hand Massage',
                lists: [
                    ['5 Minutes', '$10'],
                    ['10 Minutes', '$12'],
                    ['15 Minutes', '$17']
                ]
            },
            {
                type: 'Feet Massage',
                lists: [
                    ['5 Minutes', '$15'],
                    ['10 Minutes', '$17'],
                    ['15 Minutes', '$22']
                ]
            }
        ];
        $scope.polish = [
            {
                type: 'Premium Polishes',
                lists: [
                    ['OPI', '$5'],
                    ['Chanel', '$4'],
                    ['Ciate', '$3'],
                    ['Deborah Lippmann', '$3'],
                    ['Zoya', '$3']
                ]
            }
        ];
    });

    app.controller('galleryController', function($scope){
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

})();
