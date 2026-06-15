import type { Course, Module } from './types';
import { ebikeBasics } from './modules/ebikeBasics';
import { ridingSafely } from './modules/ridingSafely';
import { trafficRules } from './modules/trafficRules';
import { realWorldScenarios } from './modules/realWorldScenarios';

/**
 * Content access layer.
 *
 * Components and pages consume content ONLY through these functions, never by
 * importing module files directly. Today the source is hardcoded TypeScript;
 * swapping it for a headless CMS later means changing only this file.
 */

const course: Course = {
  id: 'core',
  title: { en: 'Core course', es: 'Curso básico' },
  description: {
    en: 'The core course is divided into four modules. Finish them all to get a free ride at the end!',
    es: '¡El curso básico está dividido en cuatro módulos. Complétalos todos para conseguir un trayecto gratis al final!',
  },
  reward: { en: 'Reward: 30 free minutes', es: 'Recompensa: 30 minutos gratis' },
  modules: [ebikeBasics, ridingSafely, trafficRules, realWorldScenarios],
};

export function getCourse(): Course {
  return course;
}

export function getModules(): Module[] {
  return course.modules;
}

export function getModule(slug: string): Module | undefined {
  return course.modules.find((m) => m.slug === slug);
}

export function getModuleSlugs(): string[] {
  return course.modules.map((m) => m.slug);
}
