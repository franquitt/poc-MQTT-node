# MQTT
En este repositorio se generó un broker MQTT con el software **Mosquitto** y dos clientes *subscriptores* y *publicadores* con la libreria MQTT para node. El objetivo del repo es demostrar a grandes razgos el patron de diseño con el que se usa MQTT y su implementación.
Al levantar el compose, los dos clientes se conectan al broker y publican el hecho que se suscribieron. Cuando un cliente recibe por primera vez un mensaje(cualquiera sea), publica informacion de un sensor con datos aleatorios.

## Tecnologías:
- NodeJS
- Mosquitto Broker

## Despliegue
Esta pensado para correrse en 3 contenedores docker, uno para el broker y dos para los clientes.
- Un **Broker** que actua como servidor y comunica a los clientes entre sí.
- Dos **clientes** que se subscribiran y publicaran en dos *topics*.

Para iniciarlos basta con correr en el directorio raiz:

    sudo docker-compose up

Los *topics* son el tema al que se refiere un mensaje. Podria ser un mensaje que nos llegó a nuestro perfil con el topic "private_message" o la actualizacion del valor de un sensor con el *topic* "sensor_refresh".


## Uso
Este repo no esta pensado para interactuar cuando este funcionando, solo para demostrar el funcionamiento via logs de terminal. Sin embargo el broker puede ser reutilizado ya que bindea los puertos necesarios al localhost anfitrion.

## Referencias
- [**Mosquitto Broker**](https://mosquitto.org/)
- [**Mosquitto Broker Docker**](https://hub.docker.com/_/eclipse-mosquitto)
- [**MQTT Client Node**](https://www.npmjs.com/package/mqtt)
