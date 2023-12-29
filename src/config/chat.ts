import type { Chat } from "@/type";


function getRandomDate() {
  const start = new Date(2022, 0, 1).getTime();
  const end = new Date().getTime();
  return new Date(start + Math.random() * (end - start)).toISOString();
}

export const mockChats: Chat[] = [
  {
    id: 1,
    messages: [
      { from: 'user', content: 'Hola, ¿cómo puedo ayudarte?', timestamp: getRandomDate() },
      { from: 'customer', content: 'Quisiera más información sobre el producto.', timestamp: getRandomDate() },
      { from: 'user', content: 'Claro, ¿qué información necesita?', timestamp: getRandomDate() },
      { from: 'customer', content: 'Me gustaría saber el precio y las especificaciones.', timestamp: getRandomDate() }
    ]
  },
  {
    id: 2,
    messages: [
      { from: 'user', content: 'Buenos días, ¿en qué puedo servirle?', timestamp: getRandomDate() },
      { from: 'customer', content: 'Estoy buscando información de precios.', timestamp: getRandomDate() },
      { from: 'user', content: 'Por supuesto, ¿de qué producto?', timestamp: getRandomDate() },
      { from: 'customer', content: 'Del último modelo de smartphone que tienen.', timestamp: getRandomDate() }
    ]
  },
  {
    id: 3,
    messages: [
      { from: 'user', content: 'Hola, ¿qué tal?', timestamp: getRandomDate() },
      { from: 'customer', content: 'Quiero hacer una reclamación.', timestamp: getRandomDate() },
      { from: 'user', content: 'Entiendo, ¿me podría decir cuál es el problema?', timestamp: getRandomDate() },
      { from: 'customer', content: 'El producto que recibí no es lo que esperaba.', timestamp: getRandomDate() }
    ]
  },
  {
    id: 4,
    messages: [
      { from: 'user', content: '¿Cómo puedo asistirte hoy?', timestamp: getRandomDate() },
      { from: 'customer', content: 'Necesito ayuda con mi pedido.', timestamp: getRandomDate() },
      { from: 'user', content: 'Dime, ¿qué sucede con tu pedido?', timestamp: getRandomDate() },
      { from: 'customer', content: 'El seguimiento muestra que está estancado en aduanas.', timestamp: getRandomDate() }
    ]
  },
  {
    id: 5,
    messages: [
      { from: 'user', content: 'Gracias por contactarnos, ¿cómo puedo ayudarte?', timestamp: getRandomDate() },
      { from: 'customer', content: 'Tengo un problema con mi cuenta.', timestamp: getRandomDate() },
      { from: 'user', content: 'Vamos a solucionarlo, ¿puedes darme más detalles?', timestamp: getRandomDate() },
      { from: 'customer', content: 'No puedo iniciar sesión, parece que mi contraseña no funciona.', timestamp: getRandomDate() }
    ]
  }
];

