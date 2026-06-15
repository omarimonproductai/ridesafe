import type { Module } from '../types';

export const trafficRules: Module = {
  slug: 'traffic-rules',
  title: { en: 'Traffic Rules', es: 'Normas de tráfico' },
  subtitle: {
    en: 'Learn the law and what applies to eBike riders.',
    es: 'Aprende la ley y lo que se aplica a los conductores de eBike.',
  },
  description: {
    en: 'Laws keep all road users safe. This module covers who can ride, where to ride, riding under the influence and key traffic signs. Rules can vary by country.',
    es: 'Las leyes mantienen seguros a todos los usuarios de la vía. Este módulo trata quién puede conducir, dónde conducir, conducir bajo los efectos del alcohol y las señales de tráfico clave. Las normas pueden variar según el país.',
  },
  localisedByCountry: true,
  lessons: [
    {
      title: { en: 'Who can ride?', es: '¿Quién puede conducir?' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Minimum age and licence requirements depend on your country. In most Cooltra markets you must be at least 16 years old. No driving licence is generally required for an eBike. Check the rule shown for your selected country.',
            es: 'La edad mínima y los requisitos de licencia dependen de tu país. En la mayoría de mercados de Cooltra debes tener al menos 16 años. Por lo general no se necesita carné de conducir para una eBike. Consulta la norma que se muestra para tu país.',
          },
        },
      ],
    },
    {
      title: { en: 'Where to ride', es: 'Dónde conducir' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: 'Ride on the right-hand side of the road.', es: 'Circula por el lado derecho de la vía.' },
            { en: 'Use bike lanes where they are available.', es: 'Usa los carriles bici donde estén disponibles.' },
            { en: 'Do not ride on pavements or pedestrian areas.', es: 'No circules por aceras ni zonas peatonales.' },
            { en: 'Avoid fast roads where eBikes are not allowed.', es: 'Evita las vías rápidas donde no se permiten eBikes.' },
          ],
        },
      ],
    },
    {
      title: { en: 'One rider, and never under the influence', es: 'Un solo conductor y nunca bajo los efectos' },
      blocks: [
        {
          type: 'paragraph',
          text: {
            en: 'Only one person may ride at a time. Riding under the influence of alcohol or drugs is illegal — the same limits as driving a car apply, and you risk fines or losing your licence.',
            es: 'Solo puede conducir una persona a la vez. Conducir bajo los efectos del alcohol o las drogas es ilegal: se aplican los mismos límites que al conducir un coche, y te arriesgas a multas o a perder el carné.',
          },
        },
      ],
    },
    {
      title: { en: 'Key traffic signs', es: 'Señales de tráfico clave' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: 'Stop sign: come to a complete stop, even if the street looks empty.', es: 'Señal de stop: detente por completo, aunque la calle parezca vacía.' },
            { en: 'No-entry and no-bikes signs: do not enter.', es: 'Señales de prohibido el paso y prohibido bicis: no entres.' },
            { en: 'Give way: let other traffic pass first.', es: 'Ceda el paso: deja pasar primero al resto del tráfico.' },
            { en: 'A red traffic light means stop until it turns green.', es: 'Un semáforo en rojo significa detenerse hasta que se ponga verde.' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      prompt: { en: 'What does a red traffic light mean?', es: '¿Qué significa un semáforo en rojo?' },
      options: [
        { id: 'a', label: { en: 'Stop until green', es: 'Detente hasta que se ponga verde' } },
        { id: 'b', label: { en: 'Slow down', es: 'Reduce la velocidad' } },
        { id: 'c', label: { en: 'Stop only if there is traffic', es: 'Detente solo si hay tráfico' } },
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'A red light always means stop and wait until it turns green, regardless of traffic.',
        es: 'Un semáforo en rojo siempre significa detenerse y esperar a que se ponga verde, haya o no tráfico.',
      },
    },
    {
      prompt: { en: 'Where should you ride your eBike?', es: '¿Dónde debes conducir tu eBike?' },
      options: [
        { id: 'a', label: { en: 'On the pavement', es: 'Por la acera' } },
        { id: 'b', label: { en: 'In a bike lane or on the road', es: 'Por el carril bici o la calzada' } },
        { id: 'c', label: { en: 'In pedestrian zones', es: 'Por zonas peatonales' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Ride in bike lanes where available, otherwise on the road. Pavements are for pedestrians.',
        es: 'Circula por el carril bici donde lo haya; si no, por la calzada. Las aceras son para los peatones.',
      },
    },
    {
      prompt: { en: 'If you see a stop sign and the street is empty, should you stop?', es: 'Si ves una señal de stop y la calle está vacía, ¿debes parar?' },
      options: [
        { id: 'a', label: { en: 'No, just slow down', es: 'No, solo reducir la velocidad' } },
        { id: 'b', label: { en: 'Yes, a complete stop is required', es: 'Sí, hay que detenerse por completo' } },
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'A stop sign always requires a complete stop, even when the street looks empty.',
        es: 'Una señal de stop siempre obliga a detenerse por completo, aunque la calle parezca vacía.',
      },
    },
  ],
};
