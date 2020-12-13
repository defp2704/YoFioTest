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

## Desiciones tecnicas

Se utilizaron dependencias extenerns a react native para hacer las busqueda de los archivos local
si bien se puede implementar desde android nativo creando un puente pero el tiempo no fue el suficiente
para lograrlo desde la parte nativa sin la nececidad de ultilizar dependencias.

Tambien se utilizo redux como provider de una tienda con la necesidad de acceder a datos permitiendo 
tener un mejor flujo de datos y tener facil a acceso a estos.

## Casos complejos

Si duda alguna la parte mas compleja fue recorer todas las carpetas dentro del dispostivo movil con
la finalidad de obtener los archivos localmente esto se resolvio con ayuda de una dependencia y creando
una busqueda recursiva la cual recoriera cada directory para arrojar las rutas de los archivos finales a mostrar.
