/**
 * Created by Administrator on 2017/3/30.
 */
/**
 * Created by Administrator on 2017-03-29.
 */
function apiService($http) {
    //首先把apiService注入到控制器里面
    //封装get后面的参数 ?name=list && age=18
    function getJsonUrl(params) {
        var str = '', arr = []
        for (i in params) {
            str = i + "=" + params[i]
            arr.push(str)
        }
        return '?' + arr.join('&')
    }
    //封装fetch方法
    function fetch(url, methods, data) {
        data = data || {};
        methods = methods.toUpperCase();
        if (methods == 'GET') {
            var params = getJsonUrl(data)
            return $http.get(url + params)
        } else {
            return $http.post(url, data)
        }
    }
    //首页
    this.administration = function (url, methods, data) {
        return fetch(url, methods, data)
    }
    //签到打卡
    this.checkwork = function (url, methods, data) {
        return fetch(url, methods, data)
    }
    //订单管理
    this.orderform = function (url, methods, data) {
        return fetch(url, methods,data)
    }
     //发布商品
    this.Publish = function (url, methods, data) {
        return fetch(url, methods, data)
    }
//购物中心
    this.Center = function (url, methods, data) {
        return fetch(url, methods, data)
    }
//商品管理
    this.Glass = function (url, methods, data) {
        return fetch(url, methods, data)
    }
//商品详情
    this.Details = function (url, methods, data) {
        return fetch(url, methods, data)
    }
//商品描述
    this.dingdanManger = function (url, methods, data) {
        return fetch(url, methods, data)
    }
}
//封装一个服务
angular.module('myapp')
    .service('apiService',apiService)