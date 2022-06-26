# DEVELOPER SETUP

## Node & JDK
We recommend installing Node via [Chocolatey](https://chocolatey.org), a popular package manager for Windows.

It is recommended to use an LTS version of Node. If you want to be able to switch between different versions, you might want to install Node via nvm-windows, a Node version manager for Windows.

React Native also requires Java SE Development Kit (JDK), which can be installed using Chocolatey as well.

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

                choco install -y nodejs-lts openjdk11

If you have already installed Node on your system, make sure it is Node 14 or newer. If you already have a JDK on your system, make sure it is version 11 or newer.

## Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

### 1. Install Android Studio

Download and install [Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`
- If you are not already using Hyper-V: `Performance (Intel ® HAXM)` ([See here for AMD or Hyper-V](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))
Then, click "Next" to install all of these components.

If the checkboxes are grayed out, you will have a chance to install these components later on.
Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the `Android 11 (R)` SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".


The SDK Manager can also be found within the Android Studio "Preferences" dialog, under **Appearance & Behavior → System Settings → Android SDK**.
Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 11 (R) entry, then make sure the following items are checked:

- `Android SDK Platform 30`
- `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that `30.0.2` is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

### 3. Configure the ANDROID_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

Open the **Windows Control Panel**.
Click on **User Accounts**, then click **User Accounts** again
Click on **Change my environment variables**
Click on **New...** to create a new `ANDROID_HOME` user variable that points to the path to your Android SDK


The SDK is installed, by default, at the following location:

                %LOCALAPPDATA%\Android\Sdk

You can find the actual location of the SDK in the Android Studio "Settings" dialog, under **Appearance & Behavior → System Settings → Android SDK**.

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

1. Open powershell
2. Copy and paste **Get-ChildItem -Path Env:\\** into powershell
3. Verify `ANDROID_HOME` has been added

### 4. Add platform-tools to Path

1. Open the **Windows Control Panel**.
2. Click on **User Accounts**, then click **User Accounts** again
3. Click on **Change my environment variables**
4. Select the **Path** variable.
5. Click **Edit**.
6. Click **New** and add the path to platform-tools to the list.

The default location for this folder is:

                %LOCALAPPDATA%\Android\Sdk\platform-tools

# Running Paws React App

## Step 1: Start Metro

To start Metro, run npx react-native start inside your `pawsReactApp` project folder:

        cd pawsReactApp
        npx react-native start

## Step 2: Start your application
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

                npx react-native run-android

If everything is set up correctly, you should see your new app running in your Android emulator shortly.


