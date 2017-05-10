/**
 * Created by Administrator on 2017/3/29.
 */
app.config(function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise("/Administration");
    $stateProvider
        .state("Administration",{
            url:"/Administration",
            templateUrl:"iii.html",
            controller:"Administration",
            data:{
                title:"首页商品"
            }
        })
        .state("checkWork",{
            url:"/checkWork",
            templateUrl:"checkWork.html",
            controller:"checkWork",
            data:{
                title:"考勤记录"
            }
        })
        .state("orderForm",{
            url:"/orderForm",
            templateUrl:"orderForm.html",
            controller:"orderForm",
            data:{
                title:"订单管理"
            },
            params:{
                "cit":""
            }

        })
        //收货地址
        .state("orderForm_into",{
            url:"/orderForm_into",
            templateUrl:"address.html",
            controller:"orderForm_into"
        })
        .state("publish",{
            url:"/publish",
            templateUrl:"publish.html",
            controller:"publish",
            data:{
                title:"发布商品"
            }
        })
        .state("center",{
            url:"/center",
            templateUrl:"center.html",
            controller:"center",
            data:{
                title:"营销中心"
            }
        })
        .state("manger",{
            url:"/manger",
            templateUrl:"manger.html",
            controller:"manger",
            data:{
                title:"商品管理"
            }
        })
            //二级路由
            .state("manger.manger",{
                url:"/manger",
                templateUrl:"manger/manger.html"
            })
            .state("manger.dingdan_manger",{
                url:"/dingdan_manger",
                templateUrl:"manger/dingdan_manger.html"
            })
            .state("manger.publish",{
                url:"/publish",
                templateUrl:"manger/publish.html"
            })

        .state("details",{
            url:"/details",
            templateUrl:"details.html",
            controller:"details",
            data:{
                title:"商品详情"
            }/*,
            //懒加载样式每个写一个样式   在首页就不需要链接
            resolve:{
                loadPlugin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        {
                            files:['css/details.css']
                        }
                    ])
                }
            }*/
        })



        .state("dingdan_manger",{
            url:"/dingdan_manger",
            templateUrl:"dingdan_manger.html",
            controller:"dingdan_manger",
            data:{
                title:"商品管理"
            }
        })

            //二级路由

            .state("dingdan_manger.dingdan_manger",{
                url:"/dingdan_manger",
                templateUrl:"dingdan_manger/dingdan_manger_index.html"
            })
            .state("dingdan_manger.center",{
                url:"/center",
                templateUrl:"dingdan_manger/center.html"
            })
            .state("dingdan_manger.details",{
                url:"/details",
                templateUrl:"dingdan_manger/details.html"
            })
            .state("dingdan_manger.publish",{
                url:"/publish",
                templateUrl:"dingdan_manger/publish.html"
            })
            .state("dingdan_manger.orderForm",{
                url:"/orderForm",
                templateUrl:"dingdan_manger/orderForm.html"
            })
            .state("index",{
                url:"/index",
                templateUrl:"index.html",
                controller:"index",
                data:{
                    title:"店铺设置"
                }
            })

})