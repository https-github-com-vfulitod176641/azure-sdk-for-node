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
 * A stored credential that can be used by a job to connect to target
 * databases.
 *
 * @extends models['ProxyResource']
 */
class JobCredential extends models['ProxyResource'] {
  /**
   * Create a JobCredential.
   * @member {string} username The credential user name.
   * @member {string} password The credential password.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobCredential
   *
   * @returns {object} metadata of JobCredential
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobCredential',
      type: {
        name: 'Composite',
        className: 'JobCredential',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          username: {
            required: true,
            serializedName: 'properties.username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: true,
            serializedName: 'properties.password',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobCredential;