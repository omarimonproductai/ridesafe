import type { Module } from '../types';

export const realWorldScenarios: Module = {
  slug: 'real-world-scenarios',
  title: { en: 'Real-World Scenarios', es: 'Situaciones reales' },
  description: {
    en: 'Awareness of your surroundings keeps you safe. This module covers lane positioning, signalling, overtaking, right of way, pedestrian crossings and large vehicles.',
    es: 'Estar atento a tu entorno te mantiene seguro. Este módulo trata el posicionamiento en el carril, las señales, los adelantamientos, la prioridad, los pasos de peatones y los vehículos grandes.',
  },
  lessons: [
    {
      title: { en: 'Lane positioning', es: 'Posición en el carril' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Ride in a predictable line within your lane and keep a safe distance from parked cars to avoid opening doors. On unmarked roads, stay to the right but far enough out to be seen.',
            es: 'Circula en una línea previsible dentro de tu carril y mantén una distancia segura de los coches aparcados para evitar puertas que se abren. En vías sin marcas, mantente a la derecha pero lo bastante separado para que te vean.',
          },
        },
      ],
    },
    {
      title: { en: 'When to signal', es: 'Cuándo señalizar' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: 'Before turning left or right.', es: 'Antes de girar a la izquierda o a la derecha.' },
            { en: 'Before changing lanes.', es: 'Antes de cambiar de carril.' },
            { en: 'Before overtaking or pulling over.', es: 'Antes de adelantar o detenerte a un lado.' },
            { en: 'Before leaving a roundabout.', es: 'Antes de salir de una rotonda.' },
          ],
        },
      ],
    },
    {
      title: { en: 'Overtaking safely', es: 'Adelantar con seguridad' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Overtake on the left (in right-hand traffic). Signal first, check the opposite lane is clear, and only pass when you have enough space and visibility.',
            es: 'Adelanta por la izquierda (en circulación por la derecha). Señaliza primero, comprueba que el carril contrario esté libre y adelanta solo cuando tengas espacio y visibilidad suficientes.',
          },
        },
      ],
    },
    {
      title: { en: 'Right of way at intersections', es: 'Prioridad en las intersecciones' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Unless signs or signals say otherwise, give way to traffic coming from your right. Make eye contact with drivers and never assume they have seen you.',
            es: 'Salvo que las señales indiquen lo contrario, cede el paso al tráfico que viene por tu derecha. Haz contacto visual con los conductores y nunca des por hecho que te han visto.',
          },
        },
      ],
    },
    {
      title: { en: 'Pedestrian crossings and buses', es: 'Pasos de peatones y autobuses' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Pedestrians always have priority at crossings — slow down, stop and, where required, dismount and walk across. Give way to buses pulling out from their stops.',
            es: 'Los peatones tienen siempre prioridad en los pasos: reduce la velocidad, detente y, donde sea obligatorio, baja y cruza andando. Cede el paso a los autobuses que salen de sus paradas.',
          },
        },
      ],
    },
  ],
  quiz: [
    {
      prompt: {
        en: 'You approach a pedestrian crossing with people waiting. What do you do?',
        es: 'Te acercas a un paso de peatones con gente esperando. ¿Qué haces?',
      },
      options: [
        { id: 'a', label: { en: 'Ride through quickly', es: 'Pasar rápido' } },
        { id: 'b', label: { en: 'Stop and give way', es: 'Detenerte y ceder el paso' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Pedestrians have priority. Stop and let them cross safely before you continue.',
        es: 'Los peatones tienen prioridad. Detente y déjalos cruzar con seguridad antes de continuar.',
      },
    },
    {
      prompt: {
        en: 'When overtaking, which side do you pass on (right-hand traffic)?',
        es: 'Al adelantar, ¿por qué lado pasas (circulación por la derecha)?',
      },
      options: [
        { id: 'a', label: { en: 'Right', es: 'Por la derecha' } },
        { id: 'b', label: { en: 'Left', es: 'Por la izquierda' } },
        { id: 'c', label: { en: 'Either side', es: 'Por cualquier lado' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'In right-hand traffic you overtake on the left, after signalling and checking it is clear.',
        es: 'En circulación por la derecha se adelanta por la izquierda, tras señalizar y comprobar que está despejado.',
      },
    },
    {
      prompt: {
        en: 'A car is approaching as you need to cross. How should you cross?',
        es: 'Se acerca un coche y necesitas cruzar. ¿Cómo deberías cruzar?',
      },
      options: [
        { id: 'a', label: { en: 'Speed up to cross first', es: 'Acelerar para cruzar primero' } },
        { id: 'b', label: { en: 'Slow down and make sure the car stops', es: 'Reducir y asegurarte de que el coche se detiene' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Never assume a car will stop. Slow down, make eye contact and cross only when it is safe.',
        es: 'Nunca des por hecho que un coche se detendrá. Reduce, haz contacto visual y cruza solo cuando sea seguro.',
      },
    },
  ],
};
