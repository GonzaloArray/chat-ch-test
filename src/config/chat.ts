import type { Chat } from "@/type";


export const mockChats: Chat[] = [
  {
    id: 1,
    messages: [
      { from: 'user', content: 'Hola, ¿cómo puedo ayudarte?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'Quisiera más información sobre el producto.', timestamp: new Date().toISOString() },
      { from: 'user', content: 'Claro, ¿qué información necesita?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'Me gustaría saber el precio y las especificaciones.', timestamp: new Date().toISOString() }
    ]
  },
  {
    id: 2,
    messages: [
      { from: 'user', content: 'Buenos días, ¿en qué puedo servirle?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'Estoy buscando información de precios.', timestamp: new Date().toISOString() },
      { from: 'user', content: 'Por supuesto, ¿de qué producto?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'Del último modelo de smartphone que tienen.', timestamp: new Date().toISOString() }
    ]
  },
  {
    id: 3,
    messages: [
      { from: 'user', content: 'Hola, ¿qué tal?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'Quiero hacer una reclamación.', timestamp: new Date().toISOString() },
      { from: 'user', content: 'Entiendo, ¿me podría decir cuál es el problema?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'El producto que recibí no es lo que esperaba.', timestamp: new Date().toISOString() }
    ]
  },
  {
    id: 4,
    messages: [
      { from: 'user', content: '¿Cómo puedo asistirte hoy?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'Necesito ayuda con mi pedido.', timestamp: new Date().toISOString() },
      { from: 'user', content: 'Dime, ¿qué sucede con tu pedido?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'El seguimiento muestra que está estancado en aduanas.', timestamp: new Date().toISOString() }
    ]
  },
  {
    id: 5,
    messages: [
      { from: 'user', content: 'Gracias por contactarnos, ¿cómo puedo ayudarte?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'Tengo un problema con mi cuenta.', timestamp: new Date().toISOString() },
      { from: 'user', content: 'Vamos a solucionarlo, ¿puedes darme más detalles?', timestamp: new Date().toISOString() },
      { from: 'customer', content: 'No puedo iniciar sesión, parece que mi contraseña no funciona.', timestamp: new Date().toISOString() }
    ]
  }
];

