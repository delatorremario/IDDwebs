app.controller('imagesCtrl',function($scope,$http){
    
    //text load
    $scope.url='';
    
    $http.get('js/text.json').success(function(data) {
        $scope.text = data;
        //$scope.url="https://www.youtube.com/embed/znEXgFuplrc?rel=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1";

    });



    $scope.principal_url_image='';
    $scope.images=[{url:'img/image0.jpg'},{url:'img/image1.jpg'},{url:'img/image2.jpg'},{url:'img/image3.jpg'},{url:'img/image4.jpg'}];
    $scope.principal_url_image=$scope.images[0].url;

    $scope.images_footers=_.rest($scope.images);

    $scope.selectImg=function(url){
        var oldurl=$scope.principal_url_image;
        $scope.principal_url_image=url;

        _.map($scope.images_footers, function(obj){
            if(obj.url==url) {
                obj.url=oldurl; // Or replace the whole obj
            }
        });
   }
})