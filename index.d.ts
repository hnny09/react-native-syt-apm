declare type PropertiesType = string | number | boolean | Array<string>;

declare type PropertiesObjectType = { [key: string]: PropertiesType }
declare module 'react-native-apm'{

   /** 
    * 登录
    *
    * @param loginId 登录 Id
    */
    export function login(loginId: string): void;

    /**
     * 退出登录
     */
    export function logout(): void;

    /**
     * 设置关键数据，随崩溃信息上报
     *
     * @param value 关键属性key和value
     */
    export function setUserValue(value: PropertiesObjectType): void;

    /**
     * 获取已设置的所有的关键属性
     */
    export function allUserValues() : Promise<PropertiesObjectType>;

    /**
     * 上报异常信息
     *
     * @param name 异常名称
     * @param content 异常内容
     * @param info 异常扩展信息
     */
    export function reportException(name: string, content: string, info: PropertiesObjectType): void;
}