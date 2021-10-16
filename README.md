# Stateful App Joshua

Este readme.md contiene los hechos, descripción y evidencia del proyecto.

## Hechos

1.- Una app web por default es stateless.\
2.- Todos aquellos eventos que el usuario no comienza, se consideran efectos secundarios.\
3.- Para controlar dichos eventos secundarios se utiliza useEffect.\
4.- Algunas maneras de persistir información son: bases de datos y localStorage.\
5.- Para transformar cualquier tipo de valor en JS a strings, se utiliza JSON.stringify() y para regresar de string al tipo de valor original, se utiliza JSON.parse()

## Descripción
Hay un input en el que se pide ingresar un nombre. Este nombre será guardado en localStorage y mostrado incluso si se recarga la página hasta que este sea cambiado por uno nuevo.


## Funcionamiento
### La página se muestra en su estado inicial
![image](https://user-images.githubusercontent.com/36935788/137595909-eece9329-18ee-4ca5-8de5-e3707a2879fe.png)

### Se ingresa el usuario
![image](https://user-images.githubusercontent.com/36935788/137595919-e17df94c-b03e-407c-ae52-a34c51a747fe.png)

### Verificamos que se haya guardado el nombre en localStorage
![image](https://user-images.githubusercontent.com/36935788/137595943-b1f0f77e-bd0c-4c67-91dd-6b328829800d.png)

### Regargamos la página y veremos el mismo nombre!!!
![image](https://user-images.githubusercontent.com/36935788/137595969-59c540ed-1571-491c-a7dd-7b12ea6b4392.png)

### El nombre solo cambiara hasta que se ingrese uno nuevo
Por el momento seguira en localStorage puede anexarse al código algún metodo para removerlo con:
##### `localStorage.removeItem('miNombre');`
![image](https://user-images.githubusercontent.com/36935788/137596025-73de65be-1c04-4c0c-a41a-6f6a73fdac74.png)
