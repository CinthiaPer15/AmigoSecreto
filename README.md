# AmigoSecreto

Proyecto "Amigo Secreto" Alura Latam, Oracle Next Education

"Amigo Secreto" es una aplicación web sencilla, desarrollada en JavaScript que permite agregar nombres de amigos a una lista y seleccionar aleatoriamente a un ganador. Es ideal para juegos de "Amigo Secreto" o sorteos sencillos.

Caracteristicas/Función
* Permite agregar nombres a una lista
* Muestra la lista de amigos ingresados
* Realiza un sorteo aleatorio para seleccionar a un ganador


Tecnologías Utilizadas
* HTML: Para la estructura de ña interfaz del usuario
* CSS: Para los estilos visuales
* JavaScript: Para la funcionalidad y la lógica del sorteo

Instalación y uso

1. Descarga o clona este repositorio
2. Abre el archivo index.html en el navegador web
3. Ingresa nombres en el campo de entreada y presionar "Agregar Amigo".
4. Una vez agregados los nombres, presionar "Sortear" para elegir un ganador aleatorio.

Código Principal
-El funcionamineto del programa se basa en tres funciones principales

agregarAmigo()
* Obtiene el nombre ingresado en el campo de texto
* Verificar que el campo no esté vacío
* Agregar el nombre a la lista de amigos
* Actualizar la lista visible en la interfaz

actualizarLista()
* Limpia la lista en pantalla
* Itera sobre el array -amigos- y crea el elemento de lista (<li>) por cada nombre asignado
* Muestra la lista actualizada en la interfaz

sortearAmigo()
* Genera un ínidce aleatorio dentro del array -amigos-
* Muestra el nombre seleccionado como ganador en la interfaz

Mejoras futuras
-Algunas mejoras que se podrían implementar:
* Permitir eliminar nombres de la lista
* Evitar nombres duplicados

Autor
* Cinthia Pérez