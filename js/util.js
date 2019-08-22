const util = {
  /**
   * 객체인가?
   * @param obj
   * @returns {boolean}
   */
  isObject(obj){
    return obj !== null && obj.constructor === Object;
  },
  /**
   * 함수 인가?
   * @param func
   */
  isFunction(func){
    return typeof func === "function";
  },
  /**
   * 연산가능한 숫자인가?
   * @param num
   * @returns {boolean}
   */
  isNumber(num){
    return !isNaN( num ) && typeof num === "number";
  },
  /**
   * 문자열인가?
   * @param str
   * @returns {boolean}
   */
  isString(str){
    return typeof str === "string";
  },
  isBoolean(value){
    return typeof value === "boolean";
  },
  isNull(value){
    return value === null;
  },
  isUndefined(value){
    return value === undefined;
  },
  /**
   * 배열인가?
   * @param arr
   * @returns {arg is Array<any>}
   */
  isArray(arr){
    return Array.isArray( arr );
  },
  /**
   * property가 있는 객체인가?
   * @param obj
   * @returns {boolean}
   */
  isHasOwnProp(obj){
    if ( util.isObject( obj ) ){
      for ( let key in obj ) {
        if ( obj.hasOwnProperty( key ) ){
          return true;
        }
      }
    }
    return false;
  },
  /**
   * 빈 문자열이 아닌가?
   * @param str
   * @returns {*|boolean}
   */
  isNotEmptyString(str){
    return util.isString( str ) && !!str;
  },
  /**
   * 요소가 있는 배열인가?
   * @param arr
   * @returns {arg is Array<any> | boolean}
   */
  isNotEmptyArray(arr){
    return Array.isArray( arr ) && !!arr.length;
  },
  /**
   * null , undefined 가 아닌값이 있는가?
   * @param value
   * @returns {boolean}
   */
  isExist(value){
    return value !== null && value !== undefined;
  },
};

module.exports = util;
