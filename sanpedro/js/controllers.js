app.controller('imagesCtrl',function($scope){
    
    $scope.principal_url_image='';
    $scope.images=[{url:'img/image0.jpg'},{url:'img/image1.jpeg'},{url:'img/image2.jpeg'},{url:'img/image3.jpeg'},{url:'img/image4.jpeg'}];
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