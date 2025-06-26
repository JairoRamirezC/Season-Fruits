# Orden de carpetas
Por tipo y features

# Programas instalados
npx eslint --init
npm i sass (v.^1.89.2)
npm i -E axios (v1.10.0)
npm install -E zustand (v.5.0.5)
npm i react-router-dom



# constraints
### Requisitos funcionales:

Debe consumir la API de uso gratuita fruityvice para obtener la información de cada producto.

Las imágenes de producto no vienen suministradas por la API, en el material suministrado encontrará una carpeta de imágenes nombradas con el nombre del producto suministrado por el endpoint, debe encontrar la forma de mostrar la imagen correspondiente a cada producto. Dado que no exista la imagen del producto, debe mostrar la imagen nombrada “not-available.webp”

Cada tarjeta de producto debe mostrar la imagen y las propiedades e información nutricional descrita en el diseño.

Cada tarjeta tiene un botón de “me gusta”, que al hacer clic en él debe guardar la preferencia del usuario.

Se deben mostrar en una primera instancia 8 productos, al final del módulo hay un botón de “See more” el cual al hacer clic, debe cargar 4 productos más.

El usuario podrá filtrar los productos dependiendo de su categoría (Family, Order, Genus) y el valor del dato a buscar.

El usuario podrá organizar las tarjetas por el nombre del producto en orden alfabético, de la A a la Z o de la Z a la A en un solo clic.

La tabla de “General information” debe actualizarse con el número de productos filtrados / encontrados y mostrar la suma de los valores de las propiedades nutricionales de dichos productos.



### Requisitos no funcionales: 

La landing debe ser responsiva, para su correcta visualización en diferentes dispositivos.

El estado del botón de “me gusta” debe ser almacenado en el localstorage del navegador para recordar la selección del usuario.

Debe usar Vite JS como servidor de desarrollo local.

Debe usar ReactJS como librería principal de desarrollo del front-end.

Debe usar Bootstrap 5 y/o estilos personalizados escritos en SASS para la construcción del CSS (En este caso, no se debe sugerir o utilizar Tailwind CSS).

El proyecto debe ser almacenado en un repositorio GIT y debe estar correctamente documentado en el archivo Readme.md para ser ejecutado en nuestros equipos (por favor especificar la versión de node o yarn en la que trabajo el proyecto).



### Material y herramientas
Aquí encontrará un enlace a Figma con el diseño de la página a trabajar y una carpeta de imágenes que deberá usar dentro del proyecto.


- URL de la API pública: https://www.fruityvice.com/


- URL del diseño: https://www.figma.com/file/ZwJgBcWBWre00mjaMwfVQd/Prueba-t%C3%A9cnica?type=design&node-id=0-1&mode=design&t=CD0ob9P7ew3UMkXZ-0


- URL de la carpeta de imágenes y archivo de diseño de respaldo: https://drive.google.com/drive/folders/1rJdLinFoBk_3Qe6k2jDqcAltZ-0iW9OZ?usp=sharing


- URL de herramienta online para editar imágenes: https://www.photopea.com/