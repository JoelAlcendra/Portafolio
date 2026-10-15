import test from 'node:test';
import assert from 'node:assert/strict';

import { 
  PERSONAL_INFO, 
  SKILLS_DATA, 
  PROJECTS_DATA, 
  WORK_EXPERIENCE, 
  EDUCATION_DATA, 
  TERMINAL_COMMANDS_HELP 
} from '../data/portfolioData.ts';

test('Personal info has complete and accurate data for Joel David Alcendra Carballo', () => {
  assert.equal(PERSONAL_INFO.fullName, 'Joel David Alcendra Carballo');
  assert.equal(PERSONAL_INFO.location, 'Barranquilla, Colombia');
  assert.match(PERSONAL_INFO.currentSemester, /8/);
  assert.equal(PERSONAL_INFO.englishLevel, 'B2 (Intermedio Alto)');
  assert.ok(PERSONAL_INFO.heroTagline.includes('ENGINEERED TO CREATE'));
});

test('Skills data contains required categories and no empty descriptions', () => {
  assert.ok(SKILLS_DATA.length >= 10);
  
  const categories = new Set(SKILLS_DATA.map(s => s.category));
  assert.ok(categories.has('frontend'));
  assert.ok(categories.has('backend'));
  assert.ok(categories.has('database'));
  assert.ok(categories.has('tools'));
  assert.ok(categories.has('specialized'));

  // Ensure no skill has empty text
  for (const skill of SKILLS_DATA) {
    assert.ok(skill.name.length > 0);
    assert.ok(skill.description.length > 0);
    assert.ok(['applied', 'deepening', 'studied'].includes(skill.level));
  }
});

test('Projects data includes FoodMatch and WebMiel with honest statuses', () => {
  assert.equal(PROJECTS_DATA.length, 2);

  const ids = PROJECTS_DATA.map(p => p.id);
  assert.ok(ids.includes('foodmatch'));
  assert.ok(ids.includes('webmiel'));

  for (const project of PROJECTS_DATA) {
    assert.ok(project.title);
    assert.ok(project.problem, `Project ${project.id} must have a problem description`);
    assert.ok(project.solution, `Project ${project.id} must have a solution description`);
    assert.ok(project.technologies.length > 0);
    assert.ok(project.statusLabel);
    // Ensure pending repos do not have fake broken external URLs
    if (project.isRepoPending) {
      assert.equal(project.repoUrl, '#');
    }
  }
});

test('Work Experience reflects Hinduja Global Solutions (HGS) and transferable competencies', () => {
  assert.ok(WORK_EXPERIENCE.length > 0);
  const hgs = WORK_EXPERIENCE[0];
  assert.match(hgs.company, /Hinduja Global Solutions/);
  assert.match(hgs.role, /Chat Agent Representative/);
  assert.match(hgs.period, /2025/);
  assert.ok(hgs.transferableSkills.length >= 4);
});

test('Education reflects Universidad Libre 8° semestre and Bachiller Técnico', () => {
  assert.ok(EDUCATION_DATA.length >= 2);
  const unilibre = EDUCATION_DATA.find(e => e.id === 'unilibre-systems');
  assert.ok(unilibre);
  assert.match(unilibre.institution, /Universidad Libre/);
  assert.match(unilibre.details, /8° Semestre|ciencias de la computación/i);

  const bachiller = EDUCATION_DATA.find(e => e.id === 'jesus-maestro-tech');
  assert.ok(bachiller);
  assert.match(bachiller.institution, /Jesús Maestro/i);
});

test('Terminal commands help list covers all essential developer commands', () => {
  const commands = TERMINAL_COMMANDS_HELP.map(c => c.cmd);
  assert.ok(commands.includes('help'));
  assert.ok(commands.includes('about'));
  assert.ok(commands.includes('skills'));
  assert.ok(commands.includes('projects'));
  assert.ok(commands.includes('status'));
  assert.ok(commands.includes('cv'));
  assert.ok(commands.includes('contact'));
  assert.ok(commands.includes('clear'));
});
