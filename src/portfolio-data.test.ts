import { describe, it, test } from 'node:test';
import assert from 'node:assert/strict';

// Core portfolio logic tests: validation, translations completeness, project structure
describe('Portfolio logic and data tests', () => {
  // Test email validation logic
  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  test('validates email formats accurately', () => {
    assert.equal(isValidEmail('mohamedaitbahaoudaoud86@gmail.com'), true);
    assert.equal(isValidEmail('test.user@domain.co'), true);
    assert.equal(isValidEmail('invalid-email'), false);
    assert.equal(isValidEmail('missing@tld'), false);
    assert.equal(isValidEmail(' @domain.com'), false);
  });

  // Test language dictionary consistency (every key present in EN must be present in FR)
  const translationsEN = {
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_education: 'Education',
    nav_contact: 'Contact',
    hero_title: "Master's Degree in Artificial Intelligence & Applications",
    hero_badge: 'Available for Opportunities',
    contact_success: 'Thank you! Your message has been sent successfully.',
  };

  const translationsFR = {
    nav_about: 'À propos',
    nav_skills: 'Compétences',
    nav_projects: 'Projets',
    nav_education: 'Formation',
    nav_contact: 'Contact',
    hero_title: "Master en Intelligence Artificielle & Applications",
    hero_badge: "Disponible pour de nouvelles opportunités",
    contact_success: 'Merci ! Votre message a été envoyé avec succès.',
  };

  test('English and French translation keys are in parity', () => {
    const enKeys = Object.keys(translationsEN).sort();
    const frKeys = Object.keys(translationsFR).sort();
    assert.deepEqual(enKeys, frKeys);
  });

  // Test project filter logic
  const projects = [
    { id: 1, title: 'Transformer Architecture from Scratch', category: 'transformers' },
    { id: 2, title: 'Student Performance Classification Using PSO', category: 'ml' },
    { id: 3, title: 'Large Language Models with Nanochat', category: 'transformers' },
    { id: 4, title: 'Enterprise Document RAG System', category: 'rag' },
  ];

  const filterProjects = (category: string) => {
    if (category === 'all') return projects;
    return projects.filter(p => p.category === category);
  };

  test('filters projects correctly by category', () => {
    assert.equal(filterProjects('all').length, 4);
    assert.equal(filterProjects('transformers').length, 2);
    assert.equal(filterProjects('ml').length, 1);
    assert.equal(filterProjects('rag').length, 1);
  });
});
