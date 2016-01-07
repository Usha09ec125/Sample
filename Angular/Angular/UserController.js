angular.module('myApp.UserController', [])
.controller('userController', function ($scope) {
    $scope.userslist = [
    { UserId: 1, Email: "u.t.wadhwani@gmail.com", FirstName: "Usha", LastName: "Wadhwani", Mobile1: "7818861386", Mobile2: "", isActive: true },
    { UserId: 2, Email: "mruga@gmail.com", FirstName: "Mruga", LastName: "Dave", Mobile1: "7818865386", Mobile2: "", isActive: true },
    { UserId: 3, Email: "hitali@gmail.com", FirstName: "Hitali", LastName: "Gandhi", Mobile1: "7819861386", Mobile2: "", isActive: false },
    { UserId: 4, Email: "riddhi@gmail.com", FirstName: "Riddhi", LastName: "Thakker", Mobile1: "7818861346", Mobile2: "", isActive: true },
    { UserId: 5, Email: "bharat@gmail.com", FirstName: "Bharat", LastName: "Thakor", Mobile1: "7818861387", Mobile2: "", isActive: true },
    ]    
    $scope.ShowList = true;

    $scope.CancelUserSave = function () {
        $scope.ShowList = true;
    }

    $scope.SaveUser = function () {        
        var userList = $scope.userslist;
        var currentUser = $scope.currentUser;
        userList = userList.concat(currentUser);
        $scope.userslist = userList;
        alert("User save successfully");
        $scope.ShowList = true;
    }

    $scope.GetUserById = function (userId) {
        if (userId == 0) {
            $scope.currentUser = {
                UserId: 0,
                Email: "",
                FirstName: "",
                LastName: "",
                Mobile1: "",
                Mobile2: "",
                isActive: false
            };
        } else {
            for (i in $scope.userslist) {
                if ($scope.userslist[i].UserId == userId) {
                    $scope.currentUser = {
                        UserId: $scope.userslist[i].UserId,
                        Email: $scope.userslist[i].Email,
                        FirstName: $scope.userslist[i].FirstName,
                        LastName: $scope.userslist[i].LastName,
                        Mobile1: $scope.userslist[i].Mobile1,
                        Mobile2: $scope.userslist[i].Mobile2,
                        isActive: $scope.userslist[i].isActive
                    };
                }
            }
        }
        $scope.ShowList = false;
    }

    $scope.delete = function (userId) {
        for (i in $scope.userslist) {
            if ($scope.userslist[i].UserId == userId) {
                var userList = $scope.userslist;
                userList.splice(i, 1);                
                $scope.userslist = userList;
                alert("User deleted successfully");
                break;
            }
        }
    }
})
