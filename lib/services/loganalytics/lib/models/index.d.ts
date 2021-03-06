/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the QueryBody class.
 * @constructor
 * The Analytics query. Learn more about the [Analytics query
 * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
 *
 * @member {string} query The query to execute.
 * @member {string} [timespan] Optional. The timespan over which to query data.
 * This is an ISO8601 time period value.  This timespan is applied in addition
 * to any that are specified in the query expression.
 * @member {array} [workspaces] A list of workspaces that are included in the
 * query.
 */
export interface QueryBody {
  query: string;
  timespan?: string;
  workspaces?: string[];
}

/**
 * @class
 * Initializes a new instance of the Column class.
 * @constructor
 * @summary A table column.
 *
 * A column in a table.
 *
 * @member {string} [name] The name of this column.
 * @member {string} [type] The data type of this column.
 */
export interface Column {
  name?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the Table class.
 * @constructor
 * @summary A query response table.
 *
 * Contains the columns and rows for one table in a query response.
 *
 * @member {string} name The name of the table.
 * @member {array} columns The list of columns in this table.
 * @member {array} rows The resulting rows from this query.
 */
export interface Table {
  name: string;
  columns: Column[];
  rows: string[][];
}

/**
 * @class
 * Initializes a new instance of the QueryResults class.
 * @constructor
 * @summary A query response.
 *
 * Contains the tables, columns & rows resulting from a query.
 *
 * @member {array} tables The list of tables, columns and rows.
 */
export interface QueryResults {
  tables: Table[];
}

/**
 * @class
 * Initializes a new instance of the ErrorDetail class.
 * @constructor
 * @summary Error details.
 *
 * @member {string} code The error's code.
 * @member {string} message A human readable error message.
 * @member {string} [target] Indicates which property in the request is
 * responsible for the error.
 * @member {string} [value] Indicates which value in 'target' is responsible
 * for the error.
 * @member {array} [resources] Indicates resources which were responsible for
 * the error.
 * @member {object} [additionalProperties]
 */
export interface ErrorDetail {
  code: string;
  message: string;
  target?: string;
  value?: string;
  resources?: string[];
  additionalProperties?: any;
}

/**
 * @class
 * Initializes a new instance of the ErrorInfo class.
 * @constructor
 * @summary The code and message for an error.
 *
 * @member {string} code A machine readable error code.
 * @member {string} message A human readable error message.
 * @member {array} [details] error details.
 * @member {object} [innererror] Inner error details if they exist.
 * @member {object} [additionalProperties]
 */
export interface ErrorInfo {
  code: string;
  message: string;
  details?: ErrorDetail[];
  innererror?: ErrorInfo;
  additionalProperties?: any;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * @summary Error details.
 *
 * Contains details when the response code indicates an error.
 *
 * @member {object} error The error details.
 * @member {string} [error.code] A machine readable error code.
 * @member {string} [error.message] A human readable error message.
 * @member {array} [error.details] error details.
 * @member {object} [error.innererror] Inner error details if they exist.
 * @member {object} [error.additionalProperties]
 */
export interface ErrorResponse {
  error: ErrorInfo;
}
