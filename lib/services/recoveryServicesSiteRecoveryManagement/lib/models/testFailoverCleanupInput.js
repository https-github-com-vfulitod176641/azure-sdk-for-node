/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Input definition for test failover cleanup.
 *
 */
class TestFailoverCleanupInput {
  /**
   * Create a TestFailoverCleanupInput.
   * @member {object} properties Test failover cleanup input properties.
   * @member {string} [properties.comments] Test failover cleanup comments.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestFailoverCleanupInput
   *
   * @returns {object} metadata of TestFailoverCleanupInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestFailoverCleanupInput',
      type: {
        name: 'Composite',
        className: 'TestFailoverCleanupInput',
        modelProperties: {
          properties: {
            required: true,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'TestFailoverCleanupInputProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = TestFailoverCleanupInput;