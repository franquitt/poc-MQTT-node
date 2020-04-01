let mqtt = require('mqtt')

//en esta implementacion hay user-pass
//podria no haber
let client  = mqtt.connect('mqtt://mqtt-server', {
	username: "eicas",
	password: "eicaseicas"
});

//flag para enviar una sola vez el payload
let payloadEnviado = false;

//lo mismo que lo original excepto que le agregamos el log 
function publicar(topic, message){
	console.log("<-- (" + topic + ") " + message);
	client.publish(topic, message);
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

//nos devuelve un entero
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//apenas se conecte nos suscribimos a los topics presence y pruebaPayload
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      publicar('presence', 'Hola MQTT desde cliente!');
    }
  });

  client.subscribe('pruebaPayload', function (err) {
    if (!err) {
     publicar('pruebaPayload', JSON.stringify({
      	status: "suscripto!"
      }));
    }
  });

})

//bajo cualquier mensaje se ejecuta esta funcion
client.on('message', function (topic, message) {
  message = message.toString();
  try {
    message =  JSON.stringify(JSON.parse(message), null, 4);
  }catch(e) {
    //no era un string JSON
  }
  
  console.log("--> (" + topic + ") " + message);

  if(!payloadEnviado){
  	publicar('pruebaPayload', JSON.stringify({
  		sensor: getRandom(1,10),
  		valor: getRandomFloat(20, 32),
  		fecha: new Date()
  	}));
  	payloadEnviado=true;
  }

})