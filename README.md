# Test YoFioApp

prueba para yo fio

## Descargar dependeciaas

npm install o npm i

## Compilaar 

npx react-native run-android

## Generar APK

Ingresar a la carpeta root del proyecto y correr los siguientes comandos

- react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
- cd android
- ./gradlew assembleDebug

Tu APK generar se encuenta en la sigueinte directorio dentro yourProject/android/app/build/outputs/apk/debug/app-debug.apk




