/**
 * Created by tanvirsaini32 on 26/05/2016.
 */
var app=angular.module('app',[]);
app.directive('passCheck',function()
{
   return{
       restrict:'A',
       link:function(scope,elem,attr)
       {
           var c=attr.passCheck;
           console.log("c",c);
           scope.v=c;
          /* if(c.length<7)
           {
               alert("weak password");
           }
           else {
               alert("strong password");
           }*/
       }

   };

});
app.controller('ctrl',['$scope',function($scope)
{
    $scope.check=function()
    {
        $scope.c=$scope.v;
        if($scope.c.length<8)
        {
            console.log("weak");
        }
        else {
            console.log("strong");
        }
    }
}]);