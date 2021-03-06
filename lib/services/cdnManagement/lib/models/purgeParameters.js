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
 * Parameters required for content purge.
 *
 */
class PurgeParameters {
  /**
   * Create a PurgeParameters.
   * @property {array} contentPaths The path to the content to be purged. Can
   * describe a file path or a wild card directory.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PurgeParameters
   *
   * @returns {object} metadata of PurgeParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PurgeParameters',
      type: {
        name: 'Composite',
        className: 'PurgeParameters',
        modelProperties: {
          contentPaths: {
            required: true,
            serializedName: 'contentPaths',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PurgeParameters;
