
import { NativeModules, Platform } from 'react-native';

const { RNApm } = NativeModules;

/** 
  * 登录
  *
  * @param loginId 登录 Id
  */
function login(loginId) {
  RNApm &&
  RNApm.login &&
  RNApm.login(loginId);
}

/**
  * 退出登录
  */
function logout() {
  RNApm &&
  RNApm.logout &&
  RNApm.logout();
 };

 /**
  * 设置关键数据，随崩溃信息上报
  *
  * @param value 关键属性key和value,类型 {}
  */
  function setUserValue(value) {
    RNApm &&
    RNApm.setUserValue &&
    RNApm.setUserValue(value);
  };

  /**
    * 获取已设置的所有的关键属性
    */
  function allUserValues() {
    if(RNApm && RNApm.allUserValues) {
      // try {
      //   return await RNApm.allUserValues();
      // } catch (e) {
        console.log("bbb");
      // }
    } else {
      console.log("Native 未实现allUserValues");
    }
  };

  /**
    * 上报异常信息
    *
    * @param name 异常名称
    * @param content 异常内容
    * @param info 异常扩展信息
    */
   export function reportException(name, content, info) {
     RNApm &&
     RNApm.reportException &&
     RNApm.reportException({name,content,info});
   };

export default {
    login, 
    logout,
    setUserValue,
    allUserValues,
    reportException
};

