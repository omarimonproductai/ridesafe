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
  title: {
    en: 'Core course',
    es: 'Curso básico',
    it: 'Corso base',
    nl: 'Basiscursus',
    fr: 'Cours de base',
    ca: 'Curs bàsic',
    pt: 'Curso básico',
  },
  description: {
    en: 'The core course is divided into four modules. Finish them all to get a free ride at the end!',
    es: '¡El curso básico está dividido en cuatro módulos. Complétalos todos para conseguir un trayecto gratis al final!',
    it: 'Il corso base è diviso in quattro moduli. Completali tutti per ottenere una corsa gratuita alla fine!',
    nl: 'De basiscursus is verdeeld in vier modules. Rond ze allemaal af en krijg aan het einde een gratis rit!',
    fr: 'Le cours de base est divisé en quatre modules. Terminez-les tous pour obtenir un trajet gratuit à la fin !',
    ca: 'El curs bàsic està dividit en quatre mòduls. Completa\'ls tots per aconseguir un trajecte gratuït al final!',
    pt: 'O curso básico está dividido em quatro módulos. Conclui todos para conseguires uma viagem grátis no final!',
  },
  reward: {
    en: 'Reward: 30 free minutes',
    es: 'Recompensa: 30 minutos gratis',
    it: 'Ricompensa: 30 minuti gratis',
    nl: 'Beloning: 30 gratis minuten',
    fr: 'Récompense : 30 minutes gratuites',
    ca: 'Recompensa: 30 minuts gratis',
    pt: 'Recompensa: 30 minutos grátis',
  },
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
