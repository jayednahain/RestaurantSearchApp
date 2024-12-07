# Problems :
### navigation set up
- for "react-native-gesture-handler": "^2.21.2",
- update cmake on android sdk
- down grade
    - "react-native-safe-area-context": "^4.14.0",
    - "react-native-screens": "^2.10.1",
    - "react-native-svg": "^12.1.0",


- android/build.gradle
```gradle
buildscript {
    ext {
       
        // this version updated
        cmakeVersion = "3.22.1" 
    }
}

```

- android/app/build.gradle
 - add
```gradle

android {

     externalNativeBuild {
        cmake {
            version rootProject.ext.cmakeVersion
        }
    }
}

```
