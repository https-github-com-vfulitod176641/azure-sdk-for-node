/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const ServiceClient = msRestAzure.AzureServiceClient;
const WebResource = msRest.WebResource;

const models = require('./models');
const operations = require('./operations');


/**
 * Check the availability of a Front Door resource name.
 *
 * @param {object} checkFrontDoorNameAvailabilityInput Input to check.
 *
 * @param {string} checkFrontDoorNameAvailabilityInput.name The resource name
 * to validate.
 *
 * @param {string} checkFrontDoorNameAvailabilityInput.type The type of the
 * resource whose name is to be validated. Possible values include:
 * 'Microsoft.Network/frontDoors',
 * 'Microsoft.Network/frontDoors/frontendEndpoints'
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link CheckNameAvailabilityOutput} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _checkFrontDoorNameAvailability(checkFrontDoorNameAvailabilityInput, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let apiVersion = '2018-08-01';
  // Validate
  try {
    if (checkFrontDoorNameAvailabilityInput === null || checkFrontDoorNameAvailabilityInput === undefined) {
      throw new Error('checkFrontDoorNameAvailabilityInput cannot be null or undefined.');
    }
    if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'providers/Microsoft.Network/checkFrontDoorNameAvailability';
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (checkFrontDoorNameAvailabilityInput !== null && checkFrontDoorNameAvailabilityInput !== undefined) {
      let requestModelMapper = new client.models['CheckNameAvailabilityInput']().mapper();
      requestModel = client.serialize(requestModelMapper, checkFrontDoorNameAvailabilityInput, 'checkFrontDoorNameAvailabilityInput');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(checkFrontDoorNameAvailabilityInput, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['CheckNameAvailabilityOutput']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Check the availability of a Front Door subdomain.
 *
 * @param {object} checkFrontDoorNameAvailabilityInput Input to check.
 *
 * @param {string} checkFrontDoorNameAvailabilityInput.name The resource name
 * to validate.
 *
 * @param {string} checkFrontDoorNameAvailabilityInput.type The type of the
 * resource whose name is to be validated. Possible values include:
 * 'Microsoft.Network/frontDoors',
 * 'Microsoft.Network/frontDoors/frontendEndpoints'
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link CheckNameAvailabilityOutput} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _checkFrontDoorNameAvailabilityWithSubscription(checkFrontDoorNameAvailabilityInput, options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let apiVersion = '2018-08-01';
  // Validate
  try {
    if (checkFrontDoorNameAvailabilityInput === null || checkFrontDoorNameAvailabilityInput === undefined) {
      throw new Error('checkFrontDoorNameAvailabilityInput cannot be null or undefined.');
    }
    if (this.subscriptionId === null || this.subscriptionId === undefined || typeof this.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/providers/Microsoft.Network/checkFrontDoorNameAvailability';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.subscriptionId));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (checkFrontDoorNameAvailabilityInput !== null && checkFrontDoorNameAvailabilityInput !== undefined) {
      let requestModelMapper = new client.models['CheckNameAvailabilityInput']().mapper();
      requestModel = client.serialize(requestModelMapper, checkFrontDoorNameAvailabilityInput, 'checkFrontDoorNameAvailabilityInput');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(checkFrontDoorNameAvailabilityInput, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['CheckNameAvailabilityOutput']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a FrontdoorManagementClient. */
class FrontdoorManagementClient extends ServiceClient {
  /**
   * Create a FrontdoorManagementClient.
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   * @param {string} subscriptionId - The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   */
  constructor(credentials, subscriptionId, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'https://management.azure.com';
    }
    this.credentials = credentials;
    this.subscriptionId = subscriptionId;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.frontDoors = new operations.FrontDoors(this);
    this.routingRules = new operations.RoutingRules(this);
    this.healthProbeSettings = new operations.HealthProbeSettings(this);
    this.loadBalancingSettings = new operations.LoadBalancingSettings(this);
    this.backendPools = new operations.BackendPools(this);
    this.frontendEndpoints = new operations.FrontendEndpoints(this);
    this.endpoints = new operations.Endpoints(this);
    this.policies = new operations.Policies(this);
    this.models = models;
    this._checkFrontDoorNameAvailability = _checkFrontDoorNameAvailability;
    this._checkFrontDoorNameAvailabilityWithSubscription = _checkFrontDoorNameAvailabilityWithSubscription;
    msRest.addSerializationMixin(this);
  }

  /**
   * Check the availability of a Front Door resource name.
   *
   * @param {object} checkFrontDoorNameAvailabilityInput Input to check.
   *
   * @param {string} checkFrontDoorNameAvailabilityInput.name The resource name
   * to validate.
   *
   * @param {string} checkFrontDoorNameAvailabilityInput.type The type of the
   * resource whose name is to be validated. Possible values include:
   * 'Microsoft.Network/frontDoors',
   * 'Microsoft.Network/frontDoors/frontendEndpoints'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<CheckNameAvailabilityOutput>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  checkFrontDoorNameAvailabilityWithHttpOperationResponse(checkFrontDoorNameAvailabilityInput, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._checkFrontDoorNameAvailability(checkFrontDoorNameAvailabilityInput, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Check the availability of a Front Door resource name.
   *
   * @param {object} checkFrontDoorNameAvailabilityInput Input to check.
   *
   * @param {string} checkFrontDoorNameAvailabilityInput.name The resource name
   * to validate.
   *
   * @param {string} checkFrontDoorNameAvailabilityInput.type The type of the
   * resource whose name is to be validated. Possible values include:
   * 'Microsoft.Network/frontDoors',
   * 'Microsoft.Network/frontDoors/frontendEndpoints'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {CheckNameAvailabilityOutput} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link CheckNameAvailabilityOutput} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  checkFrontDoorNameAvailability(checkFrontDoorNameAvailabilityInput, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._checkFrontDoorNameAvailability(checkFrontDoorNameAvailabilityInput, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._checkFrontDoorNameAvailability(checkFrontDoorNameAvailabilityInput, options, optionalCallback);
    }
  }

  /**
   * Check the availability of a Front Door subdomain.
   *
   * @param {object} checkFrontDoorNameAvailabilityInput Input to check.
   *
   * @param {string} checkFrontDoorNameAvailabilityInput.name The resource name
   * to validate.
   *
   * @param {string} checkFrontDoorNameAvailabilityInput.type The type of the
   * resource whose name is to be validated. Possible values include:
   * 'Microsoft.Network/frontDoors',
   * 'Microsoft.Network/frontDoors/frontendEndpoints'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<CheckNameAvailabilityOutput>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  checkFrontDoorNameAvailabilityWithSubscriptionWithHttpOperationResponse(checkFrontDoorNameAvailabilityInput, options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._checkFrontDoorNameAvailabilityWithSubscription(checkFrontDoorNameAvailabilityInput, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Check the availability of a Front Door subdomain.
   *
   * @param {object} checkFrontDoorNameAvailabilityInput Input to check.
   *
   * @param {string} checkFrontDoorNameAvailabilityInput.name The resource name
   * to validate.
   *
   * @param {string} checkFrontDoorNameAvailabilityInput.type The type of the
   * resource whose name is to be validated. Possible values include:
   * 'Microsoft.Network/frontDoors',
   * 'Microsoft.Network/frontDoors/frontendEndpoints'
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {CheckNameAvailabilityOutput} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link CheckNameAvailabilityOutput} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  checkFrontDoorNameAvailabilityWithSubscription(checkFrontDoorNameAvailabilityInput, options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._checkFrontDoorNameAvailabilityWithSubscription(checkFrontDoorNameAvailabilityInput, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._checkFrontDoorNameAvailabilityWithSubscription(checkFrontDoorNameAvailabilityInput, options, optionalCallback);
    }
  }

}

module.exports = FrontdoorManagementClient;
module.exports['default'] = FrontdoorManagementClient;
module.exports.FrontdoorManagementClient = FrontdoorManagementClient;
module.exports.FrontdoorManagementModels = models;