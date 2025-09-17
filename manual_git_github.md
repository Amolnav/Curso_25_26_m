# Manual Configurar github por SSH

## Requisitos previos

Se requerirá una cuenta de github y del uso de git bash para todo el proceso

## Comprobacion de claves

Para comprobar si se tiene una clave SSH en el equipo, habrá que ir a la terminal y ejecutar:

```bash
ls -al ~/.ssh
```

## Generacion de claves

En caso de no tener clave, generar una clave mediante el comando:

```bash
ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"
```

Posteriormente se podrá comprobar la clave mediante el comando:

```bash
cat ~/.ssh/id_ed25519.pub
```
## Instalacion de la clave en Github

En el apartado de SSH and GPG keys de settings añadir la clave publica previamente generada.

## Añadir la clave al agente SSH

Para añadir la clave al agente SSH sera necesario ejecutar los siguientes comandos:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```
![imagen añadir clave ssh](/img/key.png)

## Comprobacion de conexión

Para comprobar la conexión a github habrá que ejecutar el comando:

```bash
ssh -T git@github.com
```

El resultado deberá ser el siguiente:

```bash
Hi tu_usuario! You've successfully authenticated, but GitHub does not provide shell access.
```

#### Made by: Alex Molina