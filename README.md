# Stateful App Joshua

Este readme.md contiene los hechos, descripción y evidencia del proyecto.

## Hechos

1.- Una app web por default es stateless.\
2.- Todos aquellos eventos que el usuario no comienza, se consideran efectos secundarios.\
3.- Para controlar dichos eventos secundarios se utiliza useEffect.\
4.- Algunas maneras de persistir información son: bases de datos y localStorage.\
5.- Para transformar cualquier tipo de valor en JS a strings, se utiliza JSON.stringify() y para regresar de string al tipo de valor original, se utiliza JSON.parse()\

## Descripción
Hay un input en el que se pide ingresar un nombre. Este nombre será guardado en localStorage y mostrado incluso si se recarga la página hasta que este sea cambiado por uno nuevo.


## Funcionamiento
### La página se muestra en su estado inicial\
![image](https://user-images.githubusercontent.com/36935788/137595373-c6fd5d0d-be20-4e72-96f5-3d5ed63540fd.png)\

### Se ingresa el usuario
