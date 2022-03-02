
#import "RNApm.h"

@implementation RNApm

RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

/** 
 * 登录
 *
 * @param loginId 登录 Id
 */
RCT_EXPORT_METHOD(login:(NSString *)loginId) {
    NSLog(@"login:%@", loginId);
}

/**
 * 退出登录
 */
RCT_EXPORT_METHOD(logout) {
    NSLog(@"logout:logout");
}

/**
 * 设置关键数据，随崩溃信息上报
 *
 * @param value 关键属性key和value
 */
 RCT_EXPORT_METHOD(setUserValue:(NSDictionary *)value) {
    NSLog(@"setUserValue:%@", value);
}

/**
 * 获取已设置的所有的关键属性
 */
RCT_REMAP_METHOD(allUserValues,
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
                    NSLog(@"allUserValues:2222");
                    resolve(@{@"key":@"vallue"});
}

/**
 * 上报异常信息
 *
 * @param info 异常信息
 */
RCT_EXPORT_METHOD(reportException:(NSDictionary *)info){
    NSLog(@"reportException: info=%@", info);
}


@end
  
