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

/**
 * The List operation response, that contains the Mongo databases and their
 * properties.
 */
class MongoDatabaseListResult extends Array {
  /**
   * Create a MongoDatabaseListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MongoDatabaseListResult
   *
   * @returns {object} metadata of MongoDatabaseListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MongoDatabaseListResult',
      type: {
        name: 'Composite',
        className: 'MongoDatabaseListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MongoDatabaseElementType',
                  type: {
                    name: 'Composite',
                    className: 'MongoDatabase'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = MongoDatabaseListResult;