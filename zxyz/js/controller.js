/***Created by Administrator on 2017/3/23.*/
function myCtrl(){}
function Administration($http,$scope,apiService){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });
    apiService.administration('json/Administration.json','get',{"id":2})
        .then(function(response){
            $scope.Administration=response.data
        })
}
function checkWork($http,$scope,apiService){
    apiService.checkwork('json/checkWork.json','get',{"id":2})
        .then(function(response){
            $scope.Administration=response.data
        })
    //changeNormal()
    $scope.change=function($event){
        $scope.f="异常";
        $scope.t="正常";
        //console.log($event.target)  //获取整个span  需要在点击事件中加$event
        if(this.i.name=="异常"){
            this.i.name= $scope.t;
            $(event.target).removeClass("re")
        }else{
            this.i.name= $scope.f;
            $(event.target).addClass("re")
        }
    }
}
/*function changeNormal(){
     return{
         link:function(scope,element,attr){
             console.log(element)
             scope.name="正常"
             /!*scope.f="正常"
             scope.t="异常"*!/
             $(element).on('click',function(){
                 if(scope.name=="正常"){
                     scope.name="异常"
                 }else{
                     scope.name="正常"
                 }
            })
        }
    }
 }*/
function orderForm($http,$scope,$state,$stateParams,apiService){
    apiService.orderform('json/orderForm.json','get',{"id":2})
        .then(function(response){
            $scope.Administration=response.data
        })
    $scope.adr="北京市"
    if($stateParams.cit){
        $scope.adr=$stateParams.cit
    }
}
function orderForm_into($http,$scope,$state){
    $scope.city=CITIES;
    $scope.back=function(val){
        $state.go("orderForm",{
            "cit":val
        });
        /*$scope.name=val;
         console.log($scope.name)*/
    }
}
function publish($http,$scope,apiService){
    $(".sp").on("click",function () {
        $(this).next("img").remove();
    })
   /* $(".add").on("click",function () {
        $(this).next("i").html("没有图片了");
    })*/
    apiService.Publish('json/publish.json','get',{"id":2})
        .then(function(response){
            $scope.Administration=response.data
        })
}
function center($http,$scope,apiService){
    apiService.Center('json/center.json','get',{"id":2})
        .then(function(response){
            $scope.top=response.data.huo;
            $scope.bottom=response.data.ying;
        })
}
function manger($http,$scope,apiService){
    apiService.Glass('json/glass.json','get',{"id":2})
        .then(function(response){
            $scope.glass=response.data;
        })
}
function details($http,$scope,$state,apiService){
    apiService.Details('json/details.json','get',{"id":2})
        .then(function(response){
            $scope.glass=response.data;
        })
}
function dingdan_manger($http,$scope,apiService){
    apiService.dingdanManger('json/dingdan_manger.json','get',{"id":2})
        .then(function(response){
            $scope.dingdan_manger=response.data
        })
}
function index($http,$scope){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });
}

angular.module('myapp')
        .controller("myCtrl",myCtrl)
        .controller("Administration",Administration)
        .controller("checkWork",checkWork)
        .controller("orderForm",orderForm)
            .controller("orderForm_into",orderForm_into)
        .controller("publish",publish)
        .controller("center",center)
        .controller("manger",manger)
        .controller("details",details)
        .controller("dingdan_manger",dingdan_manger)
        .controller("index",index)
       // .directive("changeNormal",changeNormal)
