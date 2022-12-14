// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands.js';
import './example.css';
import '../../.storybook/preview.css';

import { setGlobalConfig } from '@storybook/testing-react';
// Alternatively you can use CommonJS syntax:
// require('./commands')
import { mount } from 'cypress/react';
import type { PropsWithChildren } from 'react';

// @ts-expect-error import js no type
import * as globalStorybookConfig from '../../.storybook/preview.js';
import { cy, Cypress } from '../../src/test-helpers/test-runner.js';

setGlobalConfig(globalStorybookConfig);

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
function TestBed(props: PropsWithChildren) {
  return (
    <main>
      <h1 className={'sample-bg tw-block tw-font-bold'}>TestBed</h1>
      {props.children}
    </main>
  );
}

Cypress.Commands.add('mount', element => mount(<TestBed>{element}</TestBed>));

// Example use:
// cy.mount(<MyComponent />)
Cypress.Commands.add('getComponentCanvasRoot', () => {
  return cy.get(`div[data-cy-root]`);
});
// Should sync with ./component-index.html
