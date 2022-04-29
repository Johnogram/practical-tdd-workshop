import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'practical-tdd-workshop',
  frameworkVersion: '3',
  package: {
    individually: true,
    patterns: [
      '!api/**',
      '!mock/**',
      '!serverless/**',
    ]
  },
  plugins: [
    "serverless-plugin-common-excludes",
    "serverless-plugin-include-dependencies",
    "serverless-plugin-typescript",
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
  },
  functions: {
    step01: {
      handler: 'serverless/01/index.handler',
      package: {
        patterns: ['serverless/01/**'],
      },
    },
    step02: {
      handler: 'serverless/02/index.handler',
      package: {
        patterns: ['serverless/02/**'],
      },
    }
  }
};

module.exports = serverlessConfiguration;
