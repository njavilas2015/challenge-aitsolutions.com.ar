# Tutorial de instalación del Desafio proupesto
Este tutorial intenta explicar de forma simple y directa a quienes esten interesados en como se procede a implementar la solucion al desafio.

## Mantenedor

![Javier Avila](https://gravatar.com/avatar/35f028267d2351d787342591bf2e6384?size=256)

**Javier Avila**  

- **Correo electrónico:** [njavilas2015@gmail.com](mailto:njavilas2015@gmail.com)
- **GitHub:** [gitlab.com/njavilas2015](https://gitlab.com/njavilas2015)
- **LinkedIn:** [linkedin.com/in/javieravilaredes](https://linkedin.com/in/javieravilaredes)


# Inicio y configuración
Para iniciar el sistema es necesario 
- [x] clonar el repositorio ```git clone https://gitlab.com/njavilas2015/desafio-aitsolutions.com.ar.git```
- [x] iniciar el script entry_point.sh ```bash entry_point.sh```

**Es importante tener en cuenta que se necesita tener docker y docker-compose instalado**

# Panel de Administración
Podremos ingresar al panel de administración ingresando con las credenciales que definimos en el deployment la uri es ```http://<server>:8080/admin/```

```bash
#Default 
DJANGO_SUPERUSER_USERNAME=admin
DJANGO_SUPERUSER_EMAIL=admin@example.com
DJANGO_SUPERUSER_PASSWORD=strongpassword123
```

![alt text](docs/image_0001.png)

Podremos crear instancias desde el panel
![alt text](docs/image_0002.png)

![alt text](docs/image_0003.png)

Asi podremos visualizarlas
![alt text](docs/image_0004.png)

Si ingresamos a ```http://<server>:8080/api/article/``` podremos ver e interactuar con django rest  framework

![alt text](docs/image_0005.png)

## App Multiplataforma
El mismo código esta adaptado para diferentes dispositivos, en la carpeta ```frontend/apps``` podremos visualizar que disponemos 

[App para Android](https://github.com/njavilas2015/challenge-aitsolutions.com.ar/releases/download/pre-release/app-debug.apk)

[App para Windows](https://github.com/njavilas2015/challenge-aitsolutions.com.ar/releases/download/pre-release/desktop-1.0.0-setup.exe)

[App para GNU/linux deb](https://github.com/njavilas2015/challenge-aitsolutions.com.ar/releases/download/pre-release/desktop_1.0.0_amd64.deb)

[App para GNU/linux snap](https://github.com/njavilas2015/challenge-aitsolutions.com.ar/releases/download/pre-release/desktop_1.0.0_amd64.snap)

[App para GNU/linux AppImage](https://github.com/njavilas2015/challenge-aitsolutions.com.ar/releases/download/pre-release/desktop-1.0.0.AppImage)


Si ingresamos a ```http://<server>:8080``` podremos ingresar a nuestra interface generada con react 
![alt text](docs/image_0006.png)

**Version mobile**
![alt text](docs/image_0015.png)

**Version Desktop**
![alt text](docs/image_0024.png)

es importante setear bien el ip de nuestro server para conectarse ya que al tratarse de un desarrollo no tiene asignado un dominio ni una ip estatica 

***Damos click en conectar***

Al establecer una conexión correcta podremos ver el mensaje de estado y nuesta app pasará a mostrarnos los articulos
![alt text](docs/image_0007.png)


**Version mobile**
![alt text](docs/image_0016.png)

**Version Desktop**
![alt text](docs/image_0025.png)


### Visualización de los articulos
![alt text](docs/image_0008.png)

**Version mobile**
![alt text](docs/image_0017.png)

**Version Desktop**
![alt text](docs/image_0026.png)

### Crear articulo 
Podremos crear nuevos productos si hacemos click en el boton crear del header 

![alt text](docs/image_0009.png)

**Version mobile**
![alt text](docs/image_0018.png)

**Version Desktop**
![alt text](docs/image_0029.png)

***Prodremos cancelar o crear el articulo***

### Descarga de articulos
Para descargar la base de datos de los articulos podremos ir a la tab descargar y hacer click en el boton descargar (se pueden agregar mas puntos de control)

![alt text](docs/image_0010.png)

**Version mobile**
![alt text](docs/image_0019.png)

**Version Desktop**
![alt text](docs/image_0027.png)

### Subir documento
Para subir un excel y editar los elementos existentes podremos hacer click en importar 

![alt text](docs/image_0011.png)

**Version mobile**
![alt text](docs/image_0020.png)

**Version Desktop**
![alt text](docs/image_0028.png)

y damos el ok para adjuntarlo 

![alt text](docs/image_0012.png)

**Version mobile**
![alt text](docs/image_0021.png)

**Version Desktop**
![alt text](docs/image_0032.png)


### Eliminación 
Podremos eliminar multiples articulos si hacemos click en el selector check y pulsamos el boton de eliminar ubicado en el margen inferior derecho 

![alt text](docs/image_0013.png)

**Version mobile**
![alt text](docs/image_0022.png)

**Version Desktop**
![alt text](docs/image_0031.png)

### Actualización
Podremos actualizar el articulo si hacemos click en el item

![alt text](docs/image_0014.png)

**Version mobile**
![alt text](docs/image_0023.png)

**Version Desktop**
![alt text](docs/image_0030.png)

