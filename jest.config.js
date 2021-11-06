const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/web',
    '<rootDir>/apps/api',
    '<rootDir>/libs/ui/angular',
    '<rootDir>/libs/dto',
    '<rootDir>/libs/settings',
  ],
};
