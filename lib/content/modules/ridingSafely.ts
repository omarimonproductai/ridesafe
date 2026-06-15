import type { Module } from '../types';

export const ridingSafely: Module = {
  slug: 'riding-safely',
  title: { en: 'Riding Safely', es: 'Conducir con seguridad' },
  subtitle: {
    en: 'Our best tips on how to ride and park safely.',
    es: 'Nuestros mejores consejos para conducir y aparcar con seguridad.',
  },
  description: {
    en: 'Safety starts with you. This module covers protective gear, how to behave around others, parking correctly and riding in tricky conditions.',
    es: 'La seguridad empieza por ti. Este módulo trata el equipo de protección, cómo comportarte con los demás, aparcar correctamente y conducir en condiciones difíciles.',
  },
  lessons: [
    {
      title: { en: 'Our best safety tips', es: 'Nuestros mejores consejos de seguridad' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: 'Keep both hands on the handlebars.', es: 'Mantén ambas manos en el manillar.' },
            { en: 'Never use your phone while riding.', es: 'Nunca uses el móvil mientras conduces.' },
            { en: 'Avoid headphones so you can hear traffic.', es: 'Evita los auriculares para poder oír el tráfico.' },
            { en: 'Wear a helmet — it protects your head.', es: 'Lleva casco: protege tu cabeza.' },
            { en: 'Always follow the local traffic rules.', es: 'Respeta siempre las normas de tráfico locales.' },
          ],
        },
      ],
    },
    {
      title: { en: 'Be mindful of others', es: 'Ten en cuenta a los demás' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Share the road and pavement respectfully. Slow down near pedestrians, give space to people with reduced vision or mobility, and park considerately so you never block their path.',
            es: 'Comparte la vía y la acera con respeto. Reduce la velocidad cerca de peatones, deja espacio a personas con visión o movilidad reducida y aparca con consideración para no bloquear su paso.',
          },
        },
      ],
    },
    {
      title: { en: 'Park correctly', es: 'Aparca correctamente' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: 'Use the kickstand and leave the bike upright.', es: 'Usa el caballete y deja la bici en vertical.' },
            { en: "Don't block doorways, ramps or pedestrian paths.", es: 'No bloquees puertas, rampas ni pasos de peatones.' },
            { en: 'Use designated parking zones shown in the app.', es: 'Usa las zonas de aparcamiento que indica la app.' },
            { en: 'Take a photo at the end of the ride to confirm.', es: 'Haz una foto al final del trayecto para confirmar.' },
          ],
        },
      ],
    },
    {
      title: { en: 'Cooltra zones', es: 'Zonas Cooltra' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'The app shows virtual zones that affect your ride: No-Riding zones, Slow zones where speed is limited, No-Parking zones, and Parking zones where you can end your ride.',
            es: 'La app muestra zonas virtuales que afectan a tu trayecto: zonas de prohibido circular, zonas lentas donde se limita la velocidad, zonas de prohibido aparcar y zonas de aparcamiento donde puedes finalizar el trayecto.',
          },
        },
      ],
    },
    {
      title: { en: 'Riding in rain and winter', es: 'Conducir con lluvia y en invierno' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Slow down on wet, icy or gravelly surfaces and brake earlier and more gently. Keep both hands on the handlebars and wear visible or reflective clothing in low light.',
            es: 'Reduce la velocidad en superficies mojadas, heladas o con grava, y frena antes y con más suavidad. Mantén ambas manos en el manillar y lleva ropa visible o reflectante con poca luz.',
          },
        },
      ],
    },
  ],
  quiz: [
    {
      prompt: { en: 'Why is it important to wear a helmet?', es: '¿Por qué es importante llevar casco?' },
      options: [
        { id: 'a', label: { en: 'It makes you ride faster', es: 'Te hace ir más rápido' } },
        { id: 'b', label: { en: 'It reduces the risk of head injury', es: 'Reduce el riesgo de lesiones en la cabeza' } },
        { id: 'c', label: { en: 'It is only for racing', es: 'Solo es para competiciones' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'A helmet protects your head and greatly reduces the risk of serious injury in an accident.',
        es: 'El casco protege tu cabeza y reduce mucho el riesgo de lesiones graves en un accidente.',
      },
    },
    {
      prompt: { en: 'Can you ride two people on a Cooltra eBike?', es: '¿Puedes ir dos personas en una eBike de Cooltra?' },
      options: [
        { id: 'a', label: { en: 'Yes, if both hold on', es: 'Sí, si ambos se sujetan' } },
        { id: 'b', label: { en: 'No, one person only', es: 'No, solo una persona' } },
        { id: 'c', label: { en: 'Yes, if riding slowly', es: 'Sí, si vas despacio' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'eBikes are designed for one rider. Carrying a passenger is dangerous and not allowed.',
        es: 'Las eBikes están diseñadas para un solo conductor. Llevar a un pasajero es peligroso y no está permitido.',
      },
    },
    {
      prompt: { en: 'Where should you park your eBike?', es: '¿Dónde debes aparcar tu eBike?' },
      options: [
        { id: 'a', label: { en: 'In front of a doorway', es: 'Delante de una puerta' } },
        { id: 'b', label: { en: 'In a designated parking zone', es: 'En una zona de aparcamiento autorizada' } },
        { id: 'c', label: { en: 'Anywhere on the pavement', es: 'En cualquier lugar de la acera' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Always end your ride in a designated parking zone and never block access for others.',
        es: 'Termina siempre tu trayecto en una zona de aparcamiento autorizada y nunca bloquees el paso a los demás.',
      },
    },
  ],
};
