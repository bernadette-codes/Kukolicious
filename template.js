(function(){
    var app = angular.module('salon-template', []);

    app.directive('salonPhotos', function(){
        return {
            template:
            '<div class="thumbnail">' +
                '<img ng-src="{{salonPhotos.photo}}" alt="{{salonPhotos.alt}}" class="img-responsive">' +
            '</div>'
        };
    });

    app.directive('servicesList', function(){
        return {
            template:
            '<table class="table table-striped">' +
                '<thead>' +
                    '<tr>' +
                        '<th>{{service.type}}</th>' +
                        '<th>Price</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr ng-repeat="list in service.lists">' +
                        '<td>{{list[0]}}</td>' +
                        '<td>{{list[1]}}</td>' +
                    '</tr>' +
                '</tbody>' +
            '</table>'
        };
    });

    app.directive('servicesDivider', function(){
        return {
            template: '<img src="img/divider.jpg" alt="divider" height="40" class="servicesdivider">'
        };
    });

    app.directive('galleryPhotos', function(){
        return {
            template:
            '<div class="tile">' +
                '<div class="carousel slide" data-ride="carousel">' +
                '<!-- Wrapper for slides -->' +
                    '<div class="carousel-inner">' +
                        '<div class="item active">' +
                            '<img ng-src="{{gallery.photo1}}" alt="{{gallery.alt1}}" class="img-responsive"/>' +
                        '</div>' +
                        '<div class="item">' +
                            '<img ng-src="{{gallery.photo2}}" alt="{{gallery.alt2}}" class="img-responsive"/>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        };
    });

})();
