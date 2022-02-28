
#import "RNApm.h"

@implementation RNApm

RCT_EXPORT_MODULE(react-native-apm)

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(printIOSLog:(NSString *)message) {
    NSLog(@"%@", message);
}


@end
  
