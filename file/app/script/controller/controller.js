/**
 * Created by tanvirsaini32 on 26/05/2016.
 */
/*app.controller('ctrl',['$scope',function($scope)
{
 $scope.fileupload=function()
 {console.log("i am in controller");
     console.log("scope is",$scope);
     /!*var f=$scope.myfile;*!/
     $scope.f=$scope.myfile;
      $scope.kb="kb";
     /!*console.log("file is",f.size);
     console.dir(f);*!/
 };
}]);*/
app.controller('ctrl', function ($scope,userfactory) {
    $scope.fileupload = function () {
        var file=$scope.myfile;
        console.log("before promise");
        var promise = userfactory.authenticateUser(file);
        promise.then(function (data) {
                if (data=="sucess")
                {
                    alert("sucessfully");

               }

                else if (data == "invalid") {
                    alert("invalid userid or password");
                }
                else {
                    alert("fail");
                }
            }, function (err) {
                alert("error", err);
            }
        );
    }
});
app.directive('fileModel',['$parse',function($parse) {
  return{
      restrict: 'A',
      link:function(scope,element,attrs)
      {
          var parsedata=$parse(attrs.fileModel);
          console.log("before function");
          var modelfunc=parsedata.assign;
          element.bind('change',function()
          {
              scope.$apply(function()
              {
                console.log("call function");
                  modelfunc(scope,element[0].files[0]);
                  console.log("after call function");
              });
          });
      }
    /*return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
*/

    };
}]);