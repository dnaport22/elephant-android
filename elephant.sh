#!/bin/bash
build() {
	echo "Building APK"
	echo "============"
	cordova build --release android
	echo "============"
	echo "Signing APK"
	echo "============"
	jarsigner -verbose -sigalg SHA1withRSA\
	 -digestalg SHA1 -keystore\
	  Archive/keys/my-release-key.keystore\
	  platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
	echo "============"
	echo "Optimising APK"
	echo "============"
	zipalign -v 4\
	platforms/android/build/outputs/apk/android-release-unsigned.apk\
	Archive/elephant'_'`date +%s`.apk
	echo "============"
	echo "Build is successfully created. Find it here, Archive/elephant'_'`date +%s`.apk"
}

run() {
	echo "Running app..."
	ionic run android
}

$1 $2