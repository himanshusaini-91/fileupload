/*app.factory('userfactory', function ($http,$q) {
    console.log("helooofactory");
    var authenticateUser=function(file){
        console.log("helooo function");

        var defered = $q.defer();
        var fd = new FormData();
        fd.append('file',file);


        $http.post("/file",fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(data){
            console.log("response");
            defered.resolve(data);
            console.log("Login DONE----> "+data);
        }) .error(function(er){
            console.log("Error is ",er);
            //scope.offers = er;
            defered.reject(er);

        });

        return  defered.promise;
    }
    return {"authenticateUser":authenticateUser};
});*/
app.service('userfactory', function ($http,$q) {
    console.log("helooofactory");
    this.authenticateUser=function(file){
        console.log("helooo function",file);

        var defered = $q.defer();
        var fd = new FormData();
         fd.append("file",file);
        /*for(key in file)
        fd.append(key,file[key])*/;
        $http.post("/file",fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(data){
            console.log("response");
            defered.resolve(data);
            console.log("Login DONE----> "+data);
        }) .error(function(er){
            console.log("Error is ",er);
            //scope.offers = er;
            defered.reject(er);

        });

        return  defered.promise;
    }

});