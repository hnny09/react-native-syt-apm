
import { NativeModules, Platform } from 'react-native';

const { RNApm } = NativeModules;

export const printIOSLog = (message:string) => {
    if (Platform.OS === "ios") {
      RNApm.printIOSLog(message);
    }
}

export default {
    printIOSLog, 
};

