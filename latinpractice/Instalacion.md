---
layout: full
title: "Instalación de la OSS-CAD-SUITE"
---
## Windows
Para instalar la OSS-CAD-SUITE, se debe seguir los siguientes pasos:
- Descargar el archivo de instalación desde el siguiente enlace: [OSS-CAD-SUITE](https://github.com/YosysHQ/oss-cad-suite-build/releases)
- Descomprimir el archivo en la carpeta deseada.
- Ejecutar el archivo `oss-cad-suite.exe` para iniciar la instalación.
- Seguir las instrucciones del instalador.
- Ejecutar el archivo `oss-cad-suite.bat` para iniciar la OSS-CAD-SUITE.

## Linux
Para instalar la OSS-CAD-SUITE, se debe seguir los siguientes pasos:
- Descargar el archivo de instalación desde el siguiente enlace: [OSS-CAD-SUITE](https://github.com/YosysHQ/oss-cad-suite-build/releases), usando el comando `wget`
- Descomprimir el archivo en la carpeta deseada. Usando el comando `tar -xvf`
- Exportar la variable de entorno `PATH` para poder ejecutar la OSS-CAD-SUITE desde cualquier ubicación. Usando el comando `export PATH="<extracted_location>/oss-cad-suite/bin:$PATH"`
  
**Para cada consola hay que exportar la variable de entorno o agregarla al archivo ~/.profile o ~/.bashrc.**
