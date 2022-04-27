const report = require('../src/report');

describe('Report', () => {
  it('counts one green when there is one green result', () => {
    expect(report('green')).toBe('Green: 1');
  });

  it('counts one green when there is two green result ', () => {
    expect(report('green,green')).toBe('Green: 2')
  });

  it('can remove spaces so as to still count the correct amount of greens', () => {
    expect(report('green, green')).toBe('Green: 2')
  });
});