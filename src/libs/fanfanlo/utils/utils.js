const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const laterPageMap = new Map();
export function laterCallSetData(page, data){
  let pageInfo;
  if(laterPageMap.has(page)){
    pageInfo = laterPageMap.get(page);
    for(let key in data){
      pageInfo.data[key] = data[key];
    }
  }else{
    pageInfo = {page:page,data:data};
    laterPageMap.set(page, pageInfo);
    _laterCallSetData(pageInfo);
  }
}

export function _laterCallSetData(pageInfo){
  setTimeout(() => {
    laterPageMap.delete(pageInfo.page);
    pageInfo.page.setData(pageInfo.data);
  }, 1);
}



export function getPageUrlWithParams(page){
  let params = objectToUrlParams(page.options, false);
  const url = `/${page.route}?${params}`;
  return url;
}

export function objectToUrlParams(options, needEncode){
  let p = "";
  for(let k in options){
    if(p.length > 0){
      p += "&"
    }
    p += k + "=" + (needEncode ? encodeURIComponent(options[k]) : options[k]);
  }
  return p;
}

export function objectEncodeUriComponent(inParams, outParams){
  for(let k in inParams){
    outParams[k] = encodeURIComponent(inParams[k]);
  }
  return outParams;
}

export function objectDecodeUriComponent(inParams, outParams){
  for(let k in inParams){
    outParams[k] = decodeURIComponent(inParams[k]);
  }
  return outParams;
}


export function getQuery(url) {
  // const url = decodeURI(location.search); // 获取url中"?"符后的字串(包括问号)
  let query = {};
  if (url.indexOf("?") !== -1) {
      const str = url.substr(1);
      const pairs = str.split("&");
      for(let i = 0; i < pairs.length; i ++) {
           const pair = pairs[i].split("=");
          query[pair[0]] = pair[1];
      }
  }
  return query ;  // 返回对象
}

export function getQueryVariable(name, url) {
  // url = decodeURI(url); // 获取url中"?"符后的字串(包括问号)
  // let query = {};
  if (url.indexOf("?") !== -1) {
      const str = url.slice(url.indexOf("?") + 1);
      const pairs = str.split("&");
      for(let i = 0; i < pairs.length; i ++) {
           const pair = pairs[i].split("=");
           // console.log('pppppp', pair[0]);
           if(pair[0] === name) return  pair[1]; // 返回 参数值
      }
  }
 return null;
}


export function isMobile(mobile){
  return /^1[3456789]\d{9}$/.test(mobile);
}


export function formatDate(date, fmt){

  var o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "h+" : date.getHours(),                   //小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds(),                 //秒
    "q+" : Math.floor((date.getMonth()+3)/3), //季度
    "S"  : date.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt)) {
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}
// exports = {
//   formatTime: formatTime,
//   laterCallSetData:laterCallSetData,
//   getPageUrlWithParams:getPageUrlWithParams,
//   objectToUrlParams:objectToUrlParams,
//   objectDecodeUriComponent:objectDecodeUriComponent,
//   objectEncodeUriComponent:objectEncodeUriComponent,
//   getQueryVariable:getQueryVariable,
//   isMobile:isMobile,
//   formatDate:formatDate,
//   getQuery:getQuery,
// }

export function isWeiXin(){
  var ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf("micromessenger") > -1
}

export function isEmail(s){
  // const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(s);
}