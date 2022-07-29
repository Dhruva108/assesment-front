[Repo Assesment Front-end](https://github.com/Dhruva108/assesment-front)

1.
- *Sprint Planning:* Es donde se planea qué se va a llevar a cabo durante el sprint que comienza y se decide la duración
- *Daily meeting:* También conocida como "Reunión de pie"; es una reunión corta donde cada integrante del scrum team cuenta qué hizo, que hará y que difiultades ha tenido.
- *Sprint review:* Es donde se hace estrega de lo hecho en el sprint
- *Spront retro:* Es donde se chequea las "métricas" del sprint en cuanto a calidad de lo entregado, si se cumplieron o no las metas del backlog, etc.

2. Son las herramientas que se usan para maquetar o diseñar la forma en que se va a ver y la forma en que va a fluir un proyecto.
Un ejemplo sería Figma.

3. Las tres sirven para declarar variable:
- *var:* Tiene un scope muy amplio, permite declarar varias variables con el mismo nombre y por lo tanto pueden trater problemas, por lo tanto *nunca* se usa.
- *let:* tiene un scope mucho más reducido, solo funciona dentro del scope en bloque, sirve para declara variable en las cuales puede cambiar su valor. Recibe todo tipo de dato.
Se usa cuando se sabe que el valor de esa variable va a ser variable.
- *const:* Se una varibale que es constante, lo que quiere decir que su valor no va a poder ser cambiado en ningún caso. Su scope es de bloque y es el tipo de variable que se define por defecto, excepto que se sepa que su valor va a cambiar, para lo cual se una *let*

4.
- git switch -c rama1
- git checkout -b rama1
- git branch rama1

5. *git merge:* permite crear un solo commit nacido de la unión (fusión) de una rama de desarrollo con la rama principal.
*git rebase:* permite rebasar los commits de una rama sobre otra ubicándolos por delante de los comits de la rama rebasada

6.
- *PR* Es el pedido que se hace en GitHub una vez un desarrollador ha terminado una funcionalidad; por lo general se usa para que otros desarrolladores chequeen el código escrito y no vaya a existir ningún error al momento de unirlo a la rama principal de desarrollo.
- *pull* Es el comando en git que permite actualizar un repo loca con lo que haya en el repo remoto. Es importante anotar que solo ectualiza de a una rama, así que para actualizar varias ramas, habría que hacerlo en cada una de las ramas locales.

7. Es la representación del DOM de React en donde suceden los estados usados en el código.

8. Por favor hacerle copy/paste al código para ver la solución [aqui <---](https://codepen.io/cristian-makeitreal/pen/NWadqqa?editors=1100)
```.c-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.c-section__title {
  border-top: 10px solid rgb(135, 134, 134);
  background-color: rgb(33, 31, 31);
  color: beige;
  width: 60vw;
  text-align: center;
  padding: 20px 0px 5px;
  margin: 0px;
}

.c-services {
  display: flex;
  justify-content: center;
  width: 65vw;
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
}

.c-services__item {
  list-style-type: none;
  width: 27vw;
  background-color: rgb(213, 215, 215);
  padding: 17px;
  margin: 10px;
}

.c-services__item:hover {
  box-shadow: 0px 3px 7px -2px lightslategray;
  cursor: pointer;
}
