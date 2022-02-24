
# react-native-apm

## Getting started

`$ npm install react-native-apm --save`

### Mostly automatic installation

`$ react-native link react-native-apm`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-apm` and add `RNApm.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNApm.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.syt.apm.RNApmPackage;` to the imports at the top of the file
  - Add `new RNApmPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-apm'
  	project(':react-native-apm').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-apm/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-apm')
  	```


## Usage
```javascript
import RNApm from 'react-native-apm';

// TODO: What to do with the module?
RNApm;
```
  