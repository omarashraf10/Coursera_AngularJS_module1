( function () {
'use strict';

angular.module("LunchCheck",[])

.controller('LunchCheckController',LunchController);

LunchController.$inject= ["$scope"];

function LunchController($scope){
$scope.list="";
$scope.Number_Of_Items=0;
$scope.message="";

$scope.Calculate= function (){
$scope.Number_Of_Items=CalculateList($scope.list);
$scope.message=ProduceMessage($scope.Number_Of_Items);
}

function CalculateList(list){
var items=list.split(',');
var number_items=items.length;
for(var i=0;i<items.length;i++)
{
  if(items[i]=="")
    number_items-=1;
}
return number_items ;
}

function ProduceMessage(n){
if(n>3)
return "Too much!";
else if(0<n)
return "Enjoy!";
else
return "Please enter data first";

}
};

})();
