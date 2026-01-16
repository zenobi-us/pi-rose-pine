import { describe, it, expect } from 'vitest';
import themes from './index';

describe('pi-rose-pine', () => {
  it('should export themes object', () => {
    expect(themes).toBeDefined();
    expect(themes.themes).toBeDefined();
  });

  it('should have exactly 3 theme variants', () => {
    expect(themes.themes).toHaveLength(3);
  });

  it('should include Rose Pine Dawn theme', () => {
    const dawn = themes.themes.find((t) => t.name === 'rose-pine-dawn');
    expect(dawn).toBeDefined();
    expect(dawn?.name).toBe('rose-pine-dawn');
  });

  it('should include Rose Pine Main theme', () => {
    const main = themes.themes.find((t) => t.name === 'rose-pine');
    expect(main).toBeDefined();
    expect(main?.name).toBe('rose-pine');
  });

  it('should include Rose Pine Moon theme', () => {
    const moon = themes.themes.find((t) => t.name === 'rose-pine-moon');
    expect(moon).toBeDefined();
    expect(moon?.name).toBe('rose-pine-moon');
  });

  it('all themes should have required properties', () => {
    themes.themes.forEach((theme) => {
      expect(theme).toHaveProperty('name');
      expect(theme).toHaveProperty('colors');
      expect(theme).toHaveProperty('vars');
      expect(theme).toHaveProperty('export');
    });
  });
});
