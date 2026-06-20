# Play Store Release

RealPal is already configured as a Capacitor Android app:

- App name: `RealPal`
- Application ID: `com.realpal.app`
- Target SDK: API 36
- Play upload format: Android App Bundle (`.aab`)

## Build prerequisites

Install Android Studio or the Android command line tools, then install:

- Android SDK Platform 36
- Android SDK Build-Tools
- Android SDK Platform-Tools
- A JDK compatible with Android Gradle Plugin 8.13

Set either `ANDROID_HOME`/`ANDROID_SDK_ROOT`, or create `android/local.properties` with:

```properties
sdk.dir=C:\\Users\\YOUR_USER\\AppData\\Local\\Android\\Sdk
```

## Configure upload signing

Create an upload keystore once:

```powershell
keytool -genkeypair -v -keystore android/upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

Then copy `android/release-signing.example.properties` to `android/release-signing.properties` and enter the real passwords.

CI can avoid files by setting these environment variables instead:

- `REALPAL_UPLOAD_STORE_FILE`
- `REALPAL_UPLOAD_STORE_PASSWORD`
- `REALPAL_UPLOAD_KEY_ALIAS`
- `REALPAL_UPLOAD_KEY_PASSWORD`

For GitHub Actions, add these repository secrets:

- `REALPAL_UPLOAD_KEYSTORE_BASE64`: base64 of `android/upload-keystore.jks`
- `REALPAL_UPLOAD_STORE_PASSWORD`
- `REALPAL_UPLOAD_KEY_ALIAS`
- `REALPAL_UPLOAD_KEY_PASSWORD`
- `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON`: optional Play Console service account JSON for draft internal-track uploads

Create the base64 value on Windows with:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("android/upload-keystore.jks"))
```

## Create the release bundle

```powershell
npm run android:bundle
```

The Play Console upload artifact will be:

```text
android/app/build/outputs/bundle/release/app-release.aab
```

## Upload to Play Console

1. Create or open the app in Play Console using package name `com.realpal.app`.
2. Complete the store listing, screenshots, content rating, target audience, data safety, privacy policy, and testing requirements.
3. Create a production or testing release and upload `app-release.aab`.
4. Run Play pre-review checks, fix any warnings, then submit for review.

The GitHub Actions workflow can also upload to the internal track as a draft when run manually with `upload_to_play` enabled and `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` configured.
