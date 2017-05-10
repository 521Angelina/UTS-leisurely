/**
 * Created by Administrator on 2017/3/28.
 */
function pageTitle() {
    return{
        link:function (scope,el) {
            //console.log(scope)
            scope.$on("$stateChangeSuccess",function (e,d) {
                el.text(d.data.title)
            })
        }
    }
}
function addClick(){
    return{
        link:function(scope,element,attr){
            //console.log(element)
            var a=$(element).html();
           // console.log(a)
            a++
            $(element).on('click',function(){
                $(this).html(a++);
                var ao=$(this).html();
                $(".count").html(ao*ao)
            })
        }
    }
}
function imgClick(){
    return{
        restrict : 'ECAM',
        compile:function(tElement,tAttrs,transclude){
            return{
                pre:function preLink(scope,iElement,iAttrs,controller){
                    //console.log('customTags preLink..')
                },
                // 2.1.2表示在所有子元素指令都连接之后才运行
                post:function postLink(scope,iElement,iAttrs,controller) {
                    iElement.on('click', function () {
                        //需要用 $apply触发一次 脏检查
                        scope.$apply(function () {
                            $(".meng").show()
                        });
                    })
                }
            }

        }
    }
}
function mengImgClick(){
    return{
        restrict : 'ECAM',
        compile:function(tElement,tAttrs,transclude){
            return{
                pre:function preLink(scope,iElement,iAttrs,controller){
                    //console.log('customTags preLink..')
                },
                // 2.1.2表示在所有子元素指令都连接之后才运行
                post:function postLink(scope,iElement,iAttrs,controller) {
                    iElement.on('click',function(){
                        scope.$apply(function () {
                           //alert(1)
                            $(".meng").hide()
                            console.log(iElement)
                            /*var th=$(this).text;
                            console.log(th)*/
                            $(".add").html(iElement)
                        })
                    })
                }
            }
        }
    }
}
angular.module("myapp")
        .directive("pageTitle",pageTitle)
        .directive("addClick",addClick)
        .directive("imgClick",imgClick)
        .directive("mengImgClick",mengImgClick)