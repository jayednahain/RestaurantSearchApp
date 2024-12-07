## android/build.gradle
Scope: Project-level Gradle file.
- It defines settings and dependencies that are shared across all modules
- Configures the Gradle version and tools to be used for the build.
- Handles the repositories for dependency resolution.
- Often specifies global configuration options.

- #### BuildScript:
- Specifies the Gradle Plugin for Android and other global plugins.


## android/app/build.gradle
- Configures the specific Android module (e.g., the main application module in React Native).
- Defines app-level dependencies, build configurations, and signing configurations.
- Contains settings for building and running the app, such as applicationId, minSdkVersion, targetSdkVersion, and versionCode