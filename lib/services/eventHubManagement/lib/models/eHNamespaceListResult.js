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
 * The response of the List Namespace operation
 */
class EHNamespaceListResult extends Array {
  /**
   * Create a EHNamespaceListResult.
   * @property {string} [nextLink] Link to the next set of results. Not empty
   * if Value contains incomplete list of namespaces.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EHNamespaceListResult
   *
   * @returns {object} metadata of EHNamespaceListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EHNamespaceListResult',
      type: {
        name: 'Composite',
        className: 'EHNamespaceListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EHNamespaceElementType',
                  type: {
                    name: 'Composite',
                    className: 'EHNamespace'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EHNamespaceListResult;
