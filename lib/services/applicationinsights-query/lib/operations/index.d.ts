/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as moment from 'moment';
import * as models from '../models';


/**
 * @class
 * Metrics
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ApplicationInsightsDataClient.
 */
export interface Metrics {


    /**
     * @summary Retrieve metric data
     *
     * Gets metric values for a single metric
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {string} metricId ID of the metric. This is either a standard AI
     * metric, or an application-specific custom metric. Possible values include:
     * 'requests/count', 'requests/duration', 'requests/failed', 'users/count',
     * 'users/authenticated', 'pageViews/count', 'pageViews/duration',
     * 'client/processingDuration', 'client/receiveDuration',
     * 'client/networkDuration', 'client/sendDuration', 'client/totalDuration',
     * 'dependencies/count', 'dependencies/failed', 'dependencies/duration',
     * 'exceptions/count', 'exceptions/browser', 'exceptions/server',
     * 'sessions/count', 'performanceCounters/requestExecutionTime',
     * 'performanceCounters/requestsPerSecond',
     * 'performanceCounters/requestsInQueue',
     * 'performanceCounters/memoryAvailableBytes',
     * 'performanceCounters/exceptionsPerSecond',
     * 'performanceCounters/processCpuPercentage',
     * 'performanceCounters/processIOBytesPerSecond',
     * 'performanceCounters/processPrivateBytes',
     * 'performanceCounters/processorCpuPercentage',
     * 'availabilityResults/availabilityPercentage',
     * 'availabilityResults/duration', 'billing/telemetryCount',
     * 'customEvents/count'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.timespan] The timespan over which to retrieve
     * metric values. This is an ISO8601 time period value. If timespan is omitted,
     * a default time range of `PT12H` ("last 12 hours") is used. The actual
     * timespan that is queried may be adjusted by the server based. In all cases,
     * the actual time span used for the query is included in the response.
     *
     * @param {moment.duration} [options.interval] The time interval to use when
     * retrieving metric values. This is an ISO8601 duration. If interval is
     * omitted, the metric value is aggregated across the entire timespan. If
     * interval is supplied, the server may adjust the interval to a more
     * appropriate size based on the timespan used for the query. In all cases, the
     * actual interval used for the query is included in the response.
     *
     * @param {array} [options.aggregation] The aggregation to use when computing
     * the metric values. To retrieve more than one aggregation at a time, separate
     * them with a comma. If no aggregation is specified, then the default
     * aggregation for the metric is used.
     *
     * @param {array} [options.segment] The name of the dimension to segment the
     * metric values by. This dimension must be applicable to the metric you are
     * retrieving. To segment by more than one dimension at a time, separate them
     * with a comma (,). In this case, the metric data will be segmented in the
     * order the dimensions are listed in the parameter.
     *
     * @param {number} [options.top] The number of segments to return.  This value
     * is only valid when segment is specified.
     *
     * @param {string} [options.orderby] The aggregation function and direction to
     * sort the segments by.  This value is only valid when segment is specified.
     *
     * @param {string} [options.filter] An expression used to filter the results.
     * This value should be a valid OData filter expression where the keys of each
     * clause should be applicable dimensions for the metric you are retrieving.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<MetricsResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(appId: string, metricId: string, options?: { timespan? : string, interval? : moment.Duration, aggregation? : string[], segment? : string[], top? : number, orderby? : string, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.MetricsResult>>;

    /**
     * @summary Retrieve metric data
     *
     * Gets metric values for a single metric
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {string} metricId ID of the metric. This is either a standard AI
     * metric, or an application-specific custom metric. Possible values include:
     * 'requests/count', 'requests/duration', 'requests/failed', 'users/count',
     * 'users/authenticated', 'pageViews/count', 'pageViews/duration',
     * 'client/processingDuration', 'client/receiveDuration',
     * 'client/networkDuration', 'client/sendDuration', 'client/totalDuration',
     * 'dependencies/count', 'dependencies/failed', 'dependencies/duration',
     * 'exceptions/count', 'exceptions/browser', 'exceptions/server',
     * 'sessions/count', 'performanceCounters/requestExecutionTime',
     * 'performanceCounters/requestsPerSecond',
     * 'performanceCounters/requestsInQueue',
     * 'performanceCounters/memoryAvailableBytes',
     * 'performanceCounters/exceptionsPerSecond',
     * 'performanceCounters/processCpuPercentage',
     * 'performanceCounters/processIOBytesPerSecond',
     * 'performanceCounters/processPrivateBytes',
     * 'performanceCounters/processorCpuPercentage',
     * 'availabilityResults/availabilityPercentage',
     * 'availabilityResults/duration', 'billing/telemetryCount',
     * 'customEvents/count'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.timespan] The timespan over which to retrieve
     * metric values. This is an ISO8601 time period value. If timespan is omitted,
     * a default time range of `PT12H` ("last 12 hours") is used. The actual
     * timespan that is queried may be adjusted by the server based. In all cases,
     * the actual time span used for the query is included in the response.
     *
     * @param {moment.duration} [options.interval] The time interval to use when
     * retrieving metric values. This is an ISO8601 duration. If interval is
     * omitted, the metric value is aggregated across the entire timespan. If
     * interval is supplied, the server may adjust the interval to a more
     * appropriate size based on the timespan used for the query. In all cases, the
     * actual interval used for the query is included in the response.
     *
     * @param {array} [options.aggregation] The aggregation to use when computing
     * the metric values. To retrieve more than one aggregation at a time, separate
     * them with a comma. If no aggregation is specified, then the default
     * aggregation for the metric is used.
     *
     * @param {array} [options.segment] The name of the dimension to segment the
     * metric values by. This dimension must be applicable to the metric you are
     * retrieving. To segment by more than one dimension at a time, separate them
     * with a comma (,). In this case, the metric data will be segmented in the
     * order the dimensions are listed in the parameter.
     *
     * @param {number} [options.top] The number of segments to return.  This value
     * is only valid when segment is specified.
     *
     * @param {string} [options.orderby] The aggregation function and direction to
     * sort the segments by.  This value is only valid when segment is specified.
     *
     * @param {string} [options.filter] An expression used to filter the results.
     * This value should be a valid OData filter expression where the keys of each
     * clause should be applicable dimensions for the metric you are retrieving.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {MetricsResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {MetricsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link MetricsResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(appId: string, metricId: string, options?: { timespan? : string, interval? : moment.Duration, aggregation? : string[], segment? : string[], top? : number, orderby? : string, filter? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.MetricsResult>;
    get(appId: string, metricId: string, callback: ServiceCallback<models.MetricsResult>): void;
    get(appId: string, metricId: string, options: { timespan? : string, interval? : moment.Duration, aggregation? : string[], segment? : string[], top? : number, orderby? : string, filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MetricsResult>): void;


    /**
     * @summary Retrieve metric data
     *
     * Gets metric values for multiple metrics
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {array} body The batched metrics query.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Array>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getMultipleWithHttpOperationResponse(appId: string, body: models.MetricsPostBodySchema[], options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.MetricsResultsItem[]>>;

    /**
     * @summary Retrieve metric data
     *
     * Gets metric values for multiple metrics
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {array} body The batched metrics query.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Array} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Array} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getMultiple(appId: string, body: models.MetricsPostBodySchema[], options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.MetricsResultsItem[]>;
    getMultiple(appId: string, body: models.MetricsPostBodySchema[], callback: ServiceCallback<models.MetricsResultsItem[]>): void;
    getMultiple(appId: string, body: models.MetricsPostBodySchema[], options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MetricsResultsItem[]>): void;


    /**
     * @summary Retrieve metric metatadata
     *
     * Gets metadata describing the available metrics
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getMetadataWithHttpOperationResponse(appId: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

    /**
     * @summary Retrieve metric metatadata
     *
     * Gets metadata describing the available metrics
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Object} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Object} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getMetadata(appId: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
    getMetadata(appId: string, callback: ServiceCallback<any>): void;
    getMetadata(appId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * Events
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ApplicationInsightsDataClient.
 */
export interface Events {


    /**
     * @summary Execute OData query
     *
     * Executes an OData query for events
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {string} eventType The type of events to query; either a standard
     * event type (`traces`, `customEvents`, `pageViews`, `requests`,
     * `dependencies`, `exceptions`, `availabilityResults`) or `$all` to query
     * across all event types. Possible values include: '$all', 'traces',
     * 'customEvents', 'pageViews', 'browserTimings', 'requests', 'dependencies',
     * 'exceptions', 'availabilityResults', 'performanceCounters', 'customMetrics'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.timespan] Optional. The timespan over which to
     * retrieve events. This is an ISO8601 time period value.  This timespan is
     * applied in addition to any that are specified in the Odata expression.
     *
     * @param {string} [options.filter] An expression used to filter the returned
     * events
     *
     * @param {string} [options.search] A free-text search expression to match for
     * whether a particular event should be returned
     *
     * @param {string} [options.orderby] A comma-separated list of properties with
     * \"asc\" (the default) or \"desc\" to control the order of returned events
     *
     * @param {string} [options.select] Limits the properties to just those
     * requested on each returned event
     *
     * @param {number} [options.skip] The number of items to skip over before
     * returning events
     *
     * @param {number} [options.top] The number of events to return
     *
     * @param {string} [options.format] Format for the returned events
     *
     * @param {boolean} [options.count] Request a count of matching items included
     * with the returned events
     *
     * @param {string} [options.apply] An expression used for aggregation over
     * returned events
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<EventsResults>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getByTypeWithHttpOperationResponse(appId: string, eventType: string, options?: { timespan? : string, filter? : string, search? : string, orderby? : string, select? : string, skip? : number, top? : number, format? : string, count? : boolean, apply? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.EventsResults>>;

    /**
     * @summary Execute OData query
     *
     * Executes an OData query for events
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {string} eventType The type of events to query; either a standard
     * event type (`traces`, `customEvents`, `pageViews`, `requests`,
     * `dependencies`, `exceptions`, `availabilityResults`) or `$all` to query
     * across all event types. Possible values include: '$all', 'traces',
     * 'customEvents', 'pageViews', 'browserTimings', 'requests', 'dependencies',
     * 'exceptions', 'availabilityResults', 'performanceCounters', 'customMetrics'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.timespan] Optional. The timespan over which to
     * retrieve events. This is an ISO8601 time period value.  This timespan is
     * applied in addition to any that are specified in the Odata expression.
     *
     * @param {string} [options.filter] An expression used to filter the returned
     * events
     *
     * @param {string} [options.search] A free-text search expression to match for
     * whether a particular event should be returned
     *
     * @param {string} [options.orderby] A comma-separated list of properties with
     * \"asc\" (the default) or \"desc\" to control the order of returned events
     *
     * @param {string} [options.select] Limits the properties to just those
     * requested on each returned event
     *
     * @param {number} [options.skip] The number of items to skip over before
     * returning events
     *
     * @param {number} [options.top] The number of events to return
     *
     * @param {string} [options.format] Format for the returned events
     *
     * @param {boolean} [options.count] Request a count of matching items included
     * with the returned events
     *
     * @param {string} [options.apply] An expression used for aggregation over
     * returned events
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {EventsResults} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {EventsResults} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link EventsResults} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getByType(appId: string, eventType: string, options?: { timespan? : string, filter? : string, search? : string, orderby? : string, select? : string, skip? : number, top? : number, format? : string, count? : boolean, apply? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.EventsResults>;
    getByType(appId: string, eventType: string, callback: ServiceCallback<models.EventsResults>): void;
    getByType(appId: string, eventType: string, options: { timespan? : string, filter? : string, search? : string, orderby? : string, select? : string, skip? : number, top? : number, format? : string, count? : boolean, apply? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventsResults>): void;


    /**
     * @summary Get an event
     *
     * Gets the data for a single event
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {string} eventType The type of events to query; either a standard
     * event type (`traces`, `customEvents`, `pageViews`, `requests`,
     * `dependencies`, `exceptions`, `availabilityResults`) or `$all` to query
     * across all event types. Possible values include: '$all', 'traces',
     * 'customEvents', 'pageViews', 'browserTimings', 'requests', 'dependencies',
     * 'exceptions', 'availabilityResults', 'performanceCounters', 'customMetrics'
     *
     * @param {string} eventId ID of event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.timespan] Optional. The timespan over which to
     * retrieve events. This is an ISO8601 time period value.  This timespan is
     * applied in addition to any that are specified in the Odata expression.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<EventsResults>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(appId: string, eventType: string, eventId: string, options?: { timespan? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.EventsResults>>;

    /**
     * @summary Get an event
     *
     * Gets the data for a single event
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {string} eventType The type of events to query; either a standard
     * event type (`traces`, `customEvents`, `pageViews`, `requests`,
     * `dependencies`, `exceptions`, `availabilityResults`) or `$all` to query
     * across all event types. Possible values include: '$all', 'traces',
     * 'customEvents', 'pageViews', 'browserTimings', 'requests', 'dependencies',
     * 'exceptions', 'availabilityResults', 'performanceCounters', 'customMetrics'
     *
     * @param {string} eventId ID of event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.timespan] Optional. The timespan over which to
     * retrieve events. This is an ISO8601 time period value.  This timespan is
     * applied in addition to any that are specified in the Odata expression.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {EventsResults} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {EventsResults} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link EventsResults} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(appId: string, eventType: string, eventId: string, options?: { timespan? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.EventsResults>;
    get(appId: string, eventType: string, eventId: string, callback: ServiceCallback<models.EventsResults>): void;
    get(appId: string, eventType: string, eventId: string, options: { timespan? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventsResults>): void;
}

/**
 * @class
 * Query
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ApplicationInsightsDataClient.
 */
export interface Query {


    /**
     * @summary Execute an Analytics query
     *
     * Executes an Analytics query for data.
     * [Here](https://dev.applicationinsights.io/documentation/Using-the-API/Query)
     * is an example for using POST with an Analytics query.
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {object} body The Analytics query. Learn more about the [Analytics
     * query
     * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
     *
     * @param {string} body.query The query to execute.
     *
     * @param {string} [body.timespan] Optional. The timespan over which to query
     * data. This is an ISO8601 time period value.  This timespan is applied in
     * addition to any that are specified in the query expression.
     *
     * @param {array} [body.applications] A list of Application IDs for
     * cross-application queries.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<QueryResults>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    executeWithHttpOperationResponse(appId: string, body: models.QueryBody, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.QueryResults>>;

    /**
     * @summary Execute an Analytics query
     *
     * Executes an Analytics query for data.
     * [Here](https://dev.applicationinsights.io/documentation/Using-the-API/Query)
     * is an example for using POST with an Analytics query.
     *
     * @param {string} appId ID of the application. This is Application ID from the
     * API Access settings blade in the Azure portal.
     *
     * @param {object} body The Analytics query. Learn more about the [Analytics
     * query
     * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
     *
     * @param {string} body.query The query to execute.
     *
     * @param {string} [body.timespan] Optional. The timespan over which to query
     * data. This is an ISO8601 time period value.  This timespan is applied in
     * addition to any that are specified in the query expression.
     *
     * @param {array} [body.applications] A list of Application IDs for
     * cross-application queries.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {QueryResults} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {QueryResults} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link QueryResults} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    execute(appId: string, body: models.QueryBody, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.QueryResults>;
    execute(appId: string, body: models.QueryBody, callback: ServiceCallback<models.QueryResults>): void;
    execute(appId: string, body: models.QueryBody, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.QueryResults>): void;
}
