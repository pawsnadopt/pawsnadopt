# DEVELOPER SETUP

## Install Dependencies

### Node & Watchman
We recommend installing Node and Watchman using Homebrew. Run the following commands in a Terminal after installing `Homebrew`:

                brew install node
                brew install watchman

If you have already installed Node on your system, make sure it is Node 14 or newer.

`Watchman` is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

## iOS

### Xcode
The easiest way to install Xcode is via the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 10 or newer.

#### Installing an iOS Simulator in Xcode
To install a simulator, open **Xcode > Preferences...** and select the **Components** tab. Select a simulator with the corresponding version of iOS you wish to use.

### CocoaPods
                sudo gem install cocoapods
            
## Android

### Java Development Kit
                brew tap homebrew/cask-versions
                brew install --cask zulu11
    
### Android development environment
Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

### 1. Install Android Studio
Download and install [Android Studio](https://developer.android.com/studio/index.html).

While on the installation wizard, make sure the boxes next to all of the following items are checked.

- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`
  
### 2. Install Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the `Android 11 (R)` SDK in particular.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager"

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under **Appearance & Behavior → System Settings → Android SDK**.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 11 (R) entry, then make sure the following items are checked:

- `Android SDK Platform 30`
- `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image` or (for Apple M1 Silicon) `Google APIs ARM 64 v8a System Image`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that `30.0.2` is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

### 3. Configure the ANDROID_SDK_ROOT environment variable
Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using `zsh` then `~/.zprofile` or `~/.zshrc`) config file:

                export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
                export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
                export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

`.bash_profile` is specific to `bash`. If you're using another shell, you will need to edit the appropriate shell-specific config file.

Type source `$HOME/.bash_profile` for bash or source `$HOME/.zprofile` to load the config into your current shell. Verify that ANDROID_SDK_ROOT has been set by running `echo $ANDROID_SDK_ROOT` and the appropriate directories have been added to your path by running `echo $PATH`.


# Running the Paws React App

## iOS

### Start Metro
`react-native-start` starts the Metro Bundler. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript.

                cd pawsReactApp
                npx react-native-start

### Start your application
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

                npx react-native run-ios

You should see the app running in your simulator.


## Android

### Set up your virtual device

If you use Android Studio to open `./pawsReactApp/android`, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio.

Android Studio AVD Manager

If you have recently installed Android Studio, you will likely need to create a new AVD. Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the **R** API Level 30 image.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

### Start Metro
`react-native-start` starts the Metro Bundler. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript.

                cd pawsReactApp
                npx react-native-start

### Start your application
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

                npx react-native run-android

You should see the app running in your simulator.