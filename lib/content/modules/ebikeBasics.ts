import type { Module } from '../types';

export const ebikeBasics: Module = {
  slug: 'ebike-basics',
  title: { en: 'eBike Basics', es: 'Lo básico de la eBike' },
  description: {
    en: 'New to electric bikes? This module walks you through how a Cooltra eBike works, how to get started, and how to ride and stop safely.',
    es: '¿Nuevo en las bicicletas eléctricas? Este módulo te explica cómo funciona una eBike de Cooltra, cómo empezar y cómo conducir y frenar de forma segura.',
  },
  lessons: [
    {
      title: { en: 'Your Cooltra eBike', es: 'Tu eBike de Cooltra' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'An electric bike is a regular bicycle with an integrated electric motor that gives you a boost when you pedal. The motor assists your pedalling up to 25 km/h — perfect for getting around the city without breaking a sweat.',
            es: 'Una bicicleta eléctrica es una bicicleta normal con un motor eléctrico integrado que te da un empujón cuando pedaleas. El motor te asiste hasta los 25 km/h, perfecto para moverte por la ciudad sin sudar.',
          },
        },
      ],
    },
    {
      title: { en: 'How pedal assist works', es: 'Cómo funciona la asistencia al pedaleo' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Start pedalling and the motor activates automatically. The motor cuts out at 25 km/h so you are always in control. Use the handlebar display to switch between assist levels.',
            es: 'Empieza a pedalear y el motor se activa automáticamente. El motor se corta a 25 km/h para que siempre tengas el control. Usa la pantalla del manillar para cambiar entre niveles de asistencia.',
          },
        },
      ],
    },
    {
      title: { en: 'Stopping safely', es: 'Frenar de forma segura' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Your Cooltra eBike has brake levers on both handlebars. Always squeeze both at the same time, gently and progressively. Allow extra stopping distance at higher speeds.',
            es: 'Tu eBike de Cooltra tiene manetas de freno en ambos lados del manillar. Aprieta siempre las dos a la vez, con suavidad y de forma progresiva. Deja más distancia de frenado a velocidades altas.',
          },
        },
      ],
    },
    {
      title: { en: 'Before every ride', es: 'Antes de cada trayecto' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: 'Check that the brakes feel firm.', es: 'Comprueba que los frenos respondan con firmeza.' },
            { en: 'Confirm the battery has enough charge.', es: 'Confirma que la batería tenga carga suficiente.' },
            { en: 'Adjust the saddle height to your comfort.', es: 'Ajusta la altura del sillín a tu comodidad.' },
            { en: 'Look for any visible damage and report it in the app.', es: 'Revisa si hay daños visibles y repórtalos en la app.' },
          ],
        },
      ],
    },
    {
      title: { en: 'Parking your eBike', es: 'Aparcar tu eBike' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Always end your ride in an authorised parking area. Use the kickstand to park upright. Take a photo in the app to confirm the bike is parked correctly. Never block ramps, doorways, or pedestrian paths.',
            es: 'Termina siempre tu trayecto en una zona de aparcamiento autorizada. Usa el caballete para aparcar en posición vertical. Haz una foto en la app para confirmar que la bici está bien aparcada. Nunca bloquees rampas, puertas ni pasos de peatones.',
          },
        },
      ],
    },
  ],
  quiz: [
    {
      prompt: {
        en: 'At what speed does the electric motor stop assisting?',
        es: '¿A qué velocidad deja de asistir el motor eléctrico?',
      },
      options: [
        { id: 'a', label: { en: '15 km/h', es: '15 km/h' } },
        { id: 'b', label: { en: '25 km/h', es: '25 km/h' } },
        { id: 'c', label: { en: '35 km/h', es: '35 km/h' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'The motor assists you up to 25 km/h and then cuts out, so you stay in control.',
        es: 'El motor te asiste hasta los 25 km/h y luego se corta, para que mantengas el control.',
      },
    },
    {
      prompt: {
        en: 'Where are the brake levers on a Cooltra eBike?',
        es: '¿Dónde están las manetas de freno en una eBike de Cooltra?',
      },
      options: [
        { id: 'a', label: { en: 'Front wheel only', es: 'Solo la rueda delantera' } },
        { id: 'b', label: { en: 'Both handlebars', es: 'En ambos lados del manillar' } },
        { id: 'c', label: { en: 'Rear wheel only', es: 'Solo la rueda trasera' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'There is a lever on each side of the handlebar. Squeeze both at the same time to brake safely.',
        es: 'Hay una maneta a cada lado del manillar. Aprieta las dos a la vez para frenar con seguridad.',
      },
    },
    {
      prompt: {
        en: 'What should you do before every ride?',
        es: '¿Qué deberías hacer antes de cada trayecto?',
      },
      options: [
        { id: 'a', label: { en: 'Just start riding', es: 'Simplemente empezar a conducir' } },
        { id: 'b', label: { en: 'Do a basic safety check', es: 'Hacer una comprobación básica de seguridad' } },
        { id: 'c', label: { en: 'Check the weather app', es: 'Mirar la app del tiempo' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'A quick check of brakes, battery and saddle keeps you safe before you set off.',
        es: 'Una comprobación rápida de frenos, batería y sillín te mantiene seguro antes de salir.',
      },
    },
  ],
};
