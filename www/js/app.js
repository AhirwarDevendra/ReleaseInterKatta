// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function(angular) {
  'use strict';
angular.module('InternKatta', ['ionic','firebase'])

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
    .state('internshiplist',{
      url:'/internshiplist',
      templateUrl:'templates/internshiplist.html',
      controller:'InternshiplistController'
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

.controller('HomeController',['$scope','$location', '$anchorScroll','$timeout' ,function($scope,$location, $anchorScroll,$timeout){

console.log("Controller Called");
    
$scope.myCheck = false;
       

var AppInfo = {
                  "Internship":
                  {
                    "Title": "Why You Need To Do Internship" ,
                    "Description":
                            [
                              {
                                "Line":"Internships enable you take your career plan for a test drive."  
                              },
                              {
                                "Line":"Test-drive your knowledge and skills."  
                              },
                              {
                                "Line":"You’ll gain confidence."
                              },
                              {
                                "Line":"You’ll build motivation and work habits."
                              },
                              {
                                "Line":"Last but Not to Least, You may get paid more when you graduate if you’ve done one or more internships."
                              }
                            ]
                  },
                  "InternKatta":
                  {
                    "Title": "Why You Should Go With InternKatta" ,
                    "Description":
                            [
                              {
                                "Line":"About InternKatta"
                              },
                              {
                                "Line":"InternKatta is a place which helps students to find an internships what they want."  
                              },
                              {
                                "Line":"We provide best internship places with an Easy Access and helps them to explore their Academics Knowledge with best Internships Programs."  
                              },
                              {
                                "Line":""
                              },
                              {
                                "Line":"Our Vision and Mision"
                              },
                              {
                                "Line":"To Give a Better and Better Option of Internship Program for Student with an Easy Access"
                              },
                              
                            ]
                  }
            };
   

                 
var InternKattaInfo = "InternKatta";
var InternshipInfo = "Internship";  

var timer;
    
$scope.showIntern = function()
{
   if(!$scope.myCheck)
    {
      $scope.myCheck = true;
    }
    
    
    $scope.InfoTitle = AppInfo.InternKatta.Title;
    $scope.InfoData = AppInfo.InternKatta.Description;
    console.log($scope.InfoTitle+" "+$scope.InfoData[0].Line);

    $location.hash('xyza');
    $anchorScroll();
}


$scope.showInternship = function()
{
    if(!$scope.myCheck)
    {
        $scope.myCheck = true;    
    }
    
    $scope.InfoTitle = AppInfo.Internship.Title;
    $scope.InfoData = AppInfo.Internship.Description;
    console.log($scope.InfoTitle+" "+$scope.InfoData[0].Line);
    
    $location.hash('xyza');
    $anchorScroll();
}


$scope.closeModel = function()
{

  $scope.myCheck = false; 
    timer = $timeout(function () {
           $location.hash('xyzb');
            $anchorScroll();
        }, 500);
    
  
}
}])


.controller('FindOptionController', ['$scope','$http','$timeout','$state','$ionicModal','$ionicPopover','$ionicSideMenuDelegate',function($scope,$http, $timeout,$state, $ionicModal,$ionicPopover, $ionicSideMenuDelegate) {
  $scope.onPop = function($event) {
    $scope.popover.show($event);
  };
    
    
var timer;
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
    
    $scope.ShowCategory = false;
    $scope.ShowIT = false;
    $scope.ShowMngt = false;
    $scope.ShowMedia = false;
   
    $scope.AreaChange = function()
    {
        //alert($scope.choice.myFunctionalArea); 
        if($scope.choice.myFunctionalArea == "IT and Computers")
        {
            
            
            $scope.ShowCategory = false;
             timer = $timeout(function () {
                 $scope.SelectTitle = $scope.functionalArea[0].Name;
                    console.log($scope.SelectTitle);
                    $scope.ShowCategory = true;
                        }, 400);
            
            /*$scope.ShowIT = true;
            $scope.ShowMngt = false;
            $scope.ShowMedia = false;*/
        }
        else if($scope.choice.myFunctionalArea == "Management")
        {
            
             $scope.ShowCategory = false;
             timer = $timeout(function () {
                 $scope.SelectTitle = $scope.functionalArea[1].Name;
            console.log($scope.SelectTitle);
                    $scope.ShowCategory = true;
                        }, 400);
            /*$scope.ShowIT = false;
            $scope.ShowMngt = true;
            $scope.ShowMedia = false;*/
        }
        else if($scope.choice.myFunctionalArea == "Multimedia")
        {
            
             $scope.ShowCategory = false;
             timer = $timeout(function () {
                 $scope.SelectTitle = $scope.functionalArea[2].Name;
            console.log($scope.SelectTitle);
                    $scope.ShowCategory = true;
                        }, 400);
            /*$scope.ShowIT = false;
            $scope.ShowMngt = false;
            $scope.ShowMedia = true;*/
        }
        else
        {
            $scope.ShowCategory = false;
            $scope.SelectTitle = "";
            /*$scope.ShowIT = false;
            $scope.ShowMngt = false;
            $scope.ShowMedia = false;*/     
        }
        //$scope.ShowArea = !$scope.ShowArea;
    }
    
    $scope.myCategoryCheck = true;
    
    $scope.showCateg = function()
    {
        $scope.myCategoryCheck = !$scope.myCategoryCheck;
    }
    
    $scope.myCategoryCheck1 = true;
    
    $scope.showCateg1 = function()
    {
        $scope.myCategoryCheck1 = !$scope.myCategoryCheck1;
    }
    
    $scope.myCategoryCheck2 = true;
    
    $scope.showCateg2 = function()
    {
        $scope.myCategoryCheck2 = !$scope.myCategoryCheck2;
    }
    
   // alert($scope.SelectArea);
    
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
          
        //alert($scope.choice.myFunctionalArea+" "+$scope.choice.CityName);
          
        var selectedCategory = null;  
        if($scope.choice.myFunctionalArea == "IT and Computers")
        {
            selectedCategory = $scope.choice.ITChoice;
        }
        else if($scope.choice.myFunctionalArea == "Management")  
        {
            selectedCategory = $scope.choice.ManagementChoice;
        }
        else if($scope.choice.myFunctionalArea == "Multimedia")
        {
             selectedCategory = $scope.choice.MultimediaChoice;
        }
        else
        {
            selectedCategory = null
        }
          
        if($scope.choice.CityName == null || $scope.choice.myFunctionalArea == null)
        {
            alert("Please Select Required Field");
        }
        else
        {
            
            
            alert("Success Category "+$scope.choice.myFunctionalArea);
            //$state.go('internshiplist');
        }
          
        /*if($scope.choice.ITChoice == null)
        {
            alert("select Category");
        }
        else
        {
            $state.go('internshiplist');
        }*/
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

.controller('InternshiplistController',['$scope','$ionicSideMenuDelegate','$firebaseArray',function($scope, $ionicSideMenuDelegate,$firebaseArray) {
        console.log("List Controller");
}])
})(window.angular);