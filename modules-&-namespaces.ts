//Para poder modular el código que está en un archivo, lo hacemos separando el código en name-spaces.
/*
Para eso lo que tenemos que hacer es:
    *Separamos la clase/variable/interfaz/funcion en otro archivo, creamos la clase namespaces App{ y adentro colocamos lo que separamos del archivo principal y a la clase/variable/interfaz/funcion le colocamos un export adelante }.
    *En el archivo principal (de donde sacamos la clase/variable/interfaz/funcion) escribimos lo siguiente:

        ///<reference path="nombre-del-archivo-a-importar" />


Usado ES modules:

    import { clase/interfaz/funcion } from 'ruta';
*/