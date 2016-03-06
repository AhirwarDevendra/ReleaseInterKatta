// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('InternKatta', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

  $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'templates/home.html',
      controller:"HomeController"
    })
    .state('find',{
      url:'/find',
      templateUrl:'templates/findOption.html',
      controller:'FindOptionController'
    })

    $urlRouterProvider.otherwise("/home");
}])

.controller('NavCtrl', ['$scope','$ionicSideMenuDelegate',function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
  $scope.exitapp = function () {  
    //document.addEventListener("backbutton",onBackKeyDown,false);
    //function onBackKeyDown(){
      //alert('fsd');
      //ionic.Platform.exitApp();
        navigator.notification.confirm(
          'Exit Internkatta ?'
        , function(button) {
              if (button == 2) {
                  navigator.app.exitApp();
              } 
          }
        , 'Exit'
        , 'No,Yes'
        );  
      //}
  };
}])

.controller('HomeController',['$scope',function($scope){

  console.log("Controller Called");
}])


.controller('FindOptionController', ['$scope','$http','$timeout','$state','$ionicModal','$ionicPopover','$ionicSideMenuDelegate',function($scope,$http, $timeout,$state, $ionicModal,$ionicPopover, $ionicSideMenuDelegate) {
  $scope.onPop = function($event) {
    $scope.popover.show($event);
  };
    
    
    $scope.city = [
                    {
                        "ID":"1",
                        "Name":"Mumbai"
                    },
                    {
                        "ID":"2",
                        "Name":"Pune"
                    }
                  ];
    
    $scope.functionalArea = [
                                {
                                    "ID":"1",
                                    "Name":"IT and Computers"
                                },
                                {
                                    "ID":"2",
                                    "Name":"Management"
                                },
                                {
                                    "ID":"3",
                                    "Name":"Multimedia"
                                }
                            ];
    
    $scope.Category = {
                    "ITCategory" : 
                    [
                          {
                            "ID":"1",
                            "Name":"Php Developer"
                          },
                          {
                            "ID":"2",
                            "Name":"Java Developer"
                          }
                          ,
                          {
                            "ID":"3",
                            "Name":"C/C++ Developer"
                          },
                          {
                            "ID":"4",
                            "Name":"Dot Net Developer"
                          },
                          {
                            "ID":"5",
                            "Name":"UI/UX Developer"
                          },
                          {
                            "ID":"6",
                            "Name":"Content Management"
                          },
                          {
                            "ID":"7",
                            "Name":"Software Testing"
                          },
                          {
                            "ID":"8",
                            "Name":"Digital Marketing"
                          },
                          {
                            "ID":"9",
                            "Name":"IOS Developer"
                          },
                          {
                            "ID":"10",
                            "Name":"Android Developer"
                          },
                          {
                            "ID":"11",
                            "Name":"Database Developer"
                          },
                          {
                            "ID":"12",
                            "Name":"Web Developer"
                          }
                    ],               
                    "ManagementCategory" :
                    [
                          {
                            "ID":"1",
                            "Name":"Finance"
                          },
                          {
                            "ID":"2",
                            "Name":"Marketing"
                          },
                          {
                            "ID":"3",
                            "Name":"Sales"
                          },
                          {
                            "ID":"4",
                            "Name":"Operation"
                          },
                          {
                            "ID":"5",
                            "Name":"HR"
                          },
                          {
                            "ID":"6",
                            "Name":"Banking"
                          }
                    ],        
                    "MultimediaCategory" :
                    [
                          {
                            "ID":"1",
                            "Name":"Graphic Designer"
                          },
                          {
                            "ID":"2",
                            "Name":"Animation Maker"
                          },
                          {
                            "ID":"3",
                            "Name":"Photography"
                          },
                          {
                            "ID":"4",
                            "Name":"Video Making/Editing"
                          },
                          {
                            "ID":"5",
                            "Name":"Adobe Photoshop/CoralDraw/Illustrator"
                          }
                        ]
                    };
                

    
    
    var show = false;
    $scope.toggleCategory = function()
    {
       show = !show;       
    }
    
    $scope.isCategoryShown = function()
    {        
        return show;
    }
    
    
    
 /* $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };
    */
    $scope.choice = {};
        $scope.frm = {};

      $scope.findInternss = function($param){
          
        alert($scope.choice.ITChoice+" "+$scope.choice.myFunctionalArea+" "+$scope.choice.CityName);
          //alert("Btn Clicked " + document.getElementById("InternCity").value+" "+document.getElementById("InternArea").value);
          
    /*
        var optionsCSV = '';
        $scope.category.forEach(function(option) {

          if (option.value) {

            // If this is not the first item
            if (optionsCSV) {
              optionsCSV += ','
            }
            optionsCSV += option.Category_Name;
          }

        })
        // Save the csv to your db (replace alert with your code)
        alert($param.CityName+' '+$param.FunctionalArea+' '+optionsCSV);
        
        window.localStorage['InternshipOptionCity'] = $param.CityName;
        {
            alert("Please Select Inputs For the Result");
        }
        else
        {

            $state.go('internshiplist');
        }
        
        */
            
      }
}])
