# ReboundModulo4Sesion8

Rebound Módulo 4 Sesión 8

CUE: APIS
REBOUND EXERCISE: MINISTERIO MEDIOAMBIENTAL
Para resolver este ejercicio, anteriormente debe haber revisado la lectura y los videos del CUE: Apis.
EJERCICIO:
El Ministerio Medioambiental de Chile desea renovar su portal web, para lograr que los usuarios puedan 
analizar la calidad del aire en su localidad. El equipo de diseñadores desea llegar al siguiente resultado en 
su vista: 
En cuanto a su funcionalidad, cuando un usuario ingresa a la comuna que desea buscar, el resultado debe 
mostrar la siguiente información, directamente desde la API del Ministerio, que es la siguiente: 
https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/
Los resultados deben mostrar primero el nombre de la comuna. Segundo, el nombre de la región. Tercero, 
la concentración de la contaminación. Y cuarto, el estatus de la calidad del aire.
Para el desarrollo de esta vista debes crear un plugin que formatea el texto ingresado en la búsqueda, 
transformando el nombre ingresado con letras minúsculas, a un nombre con letras mayúsculas en cada 
palabra del nombre (esto será de gran ayuda al momento de buscar en la API).
Otra funcionalidad que debe cumplir esta vista es que al momento de hacer clic en la barra de búsqueda, 
se debe limpiar el contenido ingresado y el resultado.
