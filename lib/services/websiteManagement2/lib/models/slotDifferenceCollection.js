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
 * Collection of slot differences.
 */
class SlotDifferenceCollection extends Array {
  /**
   * Create a SlotDifferenceCollection.
   * @member {string} [nextLink] Link to next page of resources.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SlotDifferenceCollection
   *
   * @returns {object} metadata of SlotDifferenceCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SlotDifferenceCollection',
      type: {
        name: 'Composite',
        className: 'SlotDifferenceCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SlotDifferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SlotDifference'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
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

module.exports = SlotDifferenceCollection;
