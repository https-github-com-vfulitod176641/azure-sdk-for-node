/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Azure resource.
 *
 * @member {string} [id] Specifies the resource ID.
 * @member {string} [name] Specifies the name of the resource.
 * @member {string} location Specifies the location of the resource.
 * @member {string} [type] Specifies the type of the resource.
 * @member {object} [tags] Contains resource tags defined as key/value pairs.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  location: string;
  readonly type?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the WebServiceKeys class.
 * @constructor
 * Access keys for the web service calls.
 *
 * @member {string} [primary] The primary access key.
 * @member {string} [secondary] The secondary access key.
 */
export interface WebServiceKeys {
  primary?: string;
  secondary?: string;
}

/**
 * @class
 * Initializes a new instance of the RealtimeConfiguration class.
 * @constructor
 * Holds the available configuration options for an Azure ML web service
 * endpoint.
 *
 * @member {number} [maxConcurrentCalls] Specifies the maximum concurrent calls
 * that can be made to the web service. Minimum value: 4, Maximum value: 200.
 */
export interface RealtimeConfiguration {
  maxConcurrentCalls?: number;
}

/**
 * @class
 * Initializes a new instance of the DiagnosticsConfiguration class.
 * @constructor
 * Diagnostics settings for an Azure ML web service.
 *
 * @member {string} level Specifies the verbosity of the diagnostic output.
 * Valid values are: None - disables tracing; Error - collects only error
 * (stderr) traces; All - collects all traces (stdout and stderr). Possible
 * values include: 'None', 'Error', 'All'
 * @member {date} [expiry] Specifies the date and time when the logging will
 * cease. If null, diagnostic collection is not time limited.
 */
export interface DiagnosticsConfiguration {
  level: string;
  expiry?: Date;
}

/**
 * @class
 * Initializes a new instance of the StorageAccount class.
 * @constructor
 * Access information for a storage account.
 *
 * @member {string} [name] Specifies the name of the storage account.
 * @member {string} [key] Specifies the key used to access the storage account.
 */
export interface StorageAccount {
  name?: string;
  key?: string;
}

/**
 * @class
 * Initializes a new instance of the MachineLearningWorkspace class.
 * @constructor
 * Information about the machine learning workspace containing the experiment
 * that is source for the web service.
 *
 * @member {string} id Specifies the workspace ID of the machine learning
 * workspace associated with the web service
 */
export interface MachineLearningWorkspace {
  id: string;
}

/**
 * @class
 * Initializes a new instance of the CommitmentPlan class.
 * @constructor
 * Information about the machine learning commitment plan associated with the
 * web service.
 *
 * @member {string} id Specifies the Azure Resource Manager ID of the
 * commitment plan associated with the web service.
 */
export interface CommitmentPlan {
  id: string;
}

/**
 * @class
 * Initializes a new instance of the ColumnSpecification class.
 * @constructor
 * Swagger 2.0 schema for a column within the data table representing a web
 * service input or output. See Swagger specification:
 * http://swagger.io/specification/
 *
 * @member {string} type Data type of the column. Possible values include:
 * 'Boolean', 'Integer', 'Number', 'String'
 * @member {string} [format] Additional format information for the data type.
 * Possible values include: 'Byte', 'Char', 'Complex64', 'Complex128',
 * 'Date-time', 'Date-timeOffset', 'Double', 'Duration', 'Float', 'Int8',
 * 'Int16', 'Int32', 'Int64', 'Uint8', 'Uint16', 'Uint32', 'Uint64'
 * @member {array} [enum] If the data type is categorical, this provides the
 * list of accepted categories.
 * @member {boolean} [xMsIsnullable] Flag indicating if the type supports null
 * values or not.
 * @member {boolean} [xMsIsordered] Flag indicating whether the categories are
 * treated as an ordered set or not, if this is a categorical column.
 */
export interface ColumnSpecification {
  type: string;
  format?: string;
  enum?: any[];
  xMsIsnullable?: boolean;
  xMsIsordered?: boolean;
}

/**
 * @class
 * Initializes a new instance of the TableSpecification class.
 * @constructor
 * The swagger 2.0 schema describing a single service input or output. See
 * Swagger specification: http://swagger.io/specification/
 *
 * @member {string} [title] Swagger schema title.
 * @member {string} [description] Swagger schema description.
 * @member {string} type The type of the entity described in swagger. Default
 * value: 'object' .
 * @member {string} [format] The format, if 'type' is not 'object'
 * @member {object} [properties] The set of columns within the data table.
 */
export interface TableSpecification {
  title?: string;
  description?: string;
  type: string;
  format?: string;
  properties?: { [propertyName: string]: ColumnSpecification };
}

/**
 * @class
 * Initializes a new instance of the ServiceInputOutputSpecification class.
 * @constructor
 * The swagger 2.0 schema describing the service's inputs or outputs. See
 * Swagger specification: http://swagger.io/specification/
 *
 * @member {string} [title] The title of your Swagger schema.
 * @member {string} [description] The description of the Swagger schema.
 * @member {string} type The type of the entity described in swagger. Always
 * 'object'. Default value: 'object' .
 * @member {object} properties Specifies a collection that contains the column
 * schema for each input or output of the web service. For more information,
 * see the Swagger specification.
 */
export interface ServiceInputOutputSpecification {
  title?: string;
  description?: string;
  type: string;
  properties: { [propertyName: string]: TableSpecification };
}

/**
 * @class
 * Initializes a new instance of the ExampleRequest class.
 * @constructor
 * Sample input data for the service's input(s).
 *
 * @member {object} [inputs] Sample input data for the web service's input(s)
 * given as an input name to sample input values matrix map.
 * @member {object} [globalParameters] Sample input data for the web service's
 * global parameters
 */
export interface ExampleRequest {
  inputs?: { [propertyName: string]: any[][] };
  globalParameters?: { [propertyName: string]: any };
}

/**
 * @class
 * Initializes a new instance of the BlobLocation class.
 * @constructor
 * Describes the access location for a blob.
 *
 * @member {string} uri The URI from which the blob is accessible from. For
 * example, aml://abc for system assets or https://xyz for user assets or
 * payload.
 * @member {string} [credentials] Access credentials for the blob, if
 * applicable (e.g. blob specified by storage account connection string + blob
 * URI)
 */
export interface BlobLocation {
  uri: string;
  credentials?: string;
}

/**
 * @class
 * Initializes a new instance of the InputPort class.
 * @constructor
 * Asset input port
 *
 * @member {string} [type] Port data type. Possible values include: 'Dataset'.
 * Default value: 'Dataset' .
 */
export interface InputPort {
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the OutputPort class.
 * @constructor
 * Asset output port
 *
 * @member {string} [type] Port data type. Possible values include: 'Dataset'.
 * Default value: 'Dataset' .
 */
export interface OutputPort {
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the ModeValueInfo class.
 * @constructor
 * Nested parameter definition.
 *
 * @member {string} [interfaceString] The interface string name for the nested
 * parameter.
 * @member {array} [parameters] The definition of the parameter.
 */
export interface ModeValueInfo {
  interfaceString?: string;
  parameters?: ModuleAssetParameter[];
}

/**
 * @class
 * Initializes a new instance of the ModuleAssetParameter class.
 * @constructor
 * Parameter definition for a module asset.
 *
 * @member {string} [name] Parameter name.
 * @member {string} [parameterType] Parameter type.
 * @member {object} [modeValuesInfo] Definitions for nested interface
 * parameters if this is a complex module parameter.
 */
export interface ModuleAssetParameter {
  name?: string;
  parameterType?: string;
  modeValuesInfo?: { [propertyName: string]: ModeValueInfo };
}

/**
 * @class
 * Initializes a new instance of the AssetItem class.
 * @constructor
 * Information about an asset associated with the web service.
 *
 * @member {string} name Asset's friendly name.
 * @member {string} [id] Asset's Id.
 * @member {string} type Asset's type. Possible values include: 'Module',
 * 'Resource'
 * @member {object} locationInfo Access information for the asset.
 * @member {string} [locationInfo.uri] The URI from which the blob is
 * accessible from. For example, aml://abc for system assets or https://xyz for
 * user assets or payload.
 * @member {string} [locationInfo.credentials] Access credentials for the blob,
 * if applicable (e.g. blob specified by storage account connection string +
 * blob URI)
 * @member {object} [inputPorts] Information about the asset's input ports.
 * @member {object} [outputPorts] Information about the asset's output ports.
 * @member {object} [metadata] If the asset is a custom module, this holds the
 * module's metadata.
 * @member {array} [parameters] If the asset is a custom module, this holds the
 * module's parameters.
 */
export interface AssetItem {
  name: string;
  id?: string;
  type: string;
  locationInfo: BlobLocation;
  inputPorts?: { [propertyName: string]: InputPort };
  outputPorts?: { [propertyName: string]: OutputPort };
  metadata?: { [propertyName: string]: string };
  parameters?: ModuleAssetParameter[];
}

/**
 * @class
 * Initializes a new instance of the WebServiceParameter class.
 * @constructor
 * Web Service Parameter object for node and global parameter
 *
 * @member {object} [value] The parameter value
 * @member {string} [certificateThumbprint] If the parameter value in 'value'
 * field is encrypted, the thumbprint of the certificate should be put here.
 */
export interface WebServiceParameter {
  value?: any;
  certificateThumbprint?: string;
}

/**
 * @class
 * Initializes a new instance of the WebServiceProperties class.
 * @constructor
 * The set of properties specific to the Azure ML web service resource.
 *
 * @member {string} [title] The title of the web service.
 * @member {string} [description] The description of the web service.
 * @member {date} [createdOn] Read Only: The date and time when the web service
 * was created.
 * @member {date} [modifiedOn] Read Only: The date and time when the web
 * service was last modified.
 * @member {string} [provisioningState] Read Only: The provision state of the
 * web service. Valid values are Unknown, Provisioning, Succeeded, and Failed.
 * Possible values include: 'Unknown', 'Provisioning', 'Succeeded', 'Failed'
 * @member {object} [keys] Contains the web service provisioning keys. If you
 * do not specify provisioning keys, the Azure Machine Learning system
 * generates them for you. Note: The keys are not returned from calls to GET
 * operations.
 * @member {string} [keys.primary] The primary access key.
 * @member {string} [keys.secondary] The secondary access key.
 * @member {boolean} [readOnly] When set to true, indicates that the web
 * service is read-only and can no longer be updated or patched, only removed.
 * Default, is false. Note: Once set to true, you cannot change its value.
 * @member {string} [swaggerLocation] Read Only: Contains the URI of the
 * swagger spec associated with this web service.
 * @member {boolean} [exposeSampleData] When set to true, sample data is
 * included in the web service's swagger definition. The default value is true.
 * @member {object} [realtimeConfiguration] Contains the configuration settings
 * for the web service endpoint.
 * @member {number} [realtimeConfiguration.maxConcurrentCalls] Specifies the
 * maximum concurrent calls that can be made to the web service. Minimum value:
 * 4, Maximum value: 200.
 * @member {object} [diagnostics] Settings controlling the diagnostics traces
 * collection for the web service.
 * @member {string} [diagnostics.level] Specifies the verbosity of the
 * diagnostic output. Valid values are: None - disables tracing; Error -
 * collects only error (stderr) traces; All - collects all traces (stdout and
 * stderr). Possible values include: 'None', 'Error', 'All'
 * @member {date} [diagnostics.expiry] Specifies the date and time when the
 * logging will cease. If null, diagnostic collection is not time limited.
 * @member {object} [storageAccount] Specifies the storage account that Azure
 * Machine Learning uses to store information about the web service. Only the
 * name of the storage account is returned from calls to GET operations. When
 * updating the storage account information, you must ensure that all necessary
 * assets are available in the new storage account or calls to your web service
 * will fail.
 * @member {string} [storageAccount.name] Specifies the name of the storage
 * account.
 * @member {string} [storageAccount.key] Specifies the key used to access the
 * storage account.
 * @member {object} [machineLearningWorkspace] Specifies the Machine Learning
 * workspace containing the experiment that is source for the web service.
 * @member {string} [machineLearningWorkspace.id] Specifies the workspace ID of
 * the machine learning workspace associated with the web service
 * @member {object} [commitmentPlan] Contains the commitment plan associated
 * with this web service. Set at creation time. Once set, this value cannot be
 * changed. Note: The commitment plan is not returned from calls to GET
 * operations.
 * @member {string} [commitmentPlan.id] Specifies the Azure Resource Manager ID
 * of the commitment plan associated with the web service.
 * @member {object} [input] Contains the Swagger 2.0 schema describing one or
 * more of the web service's inputs. For more information, see the Swagger
 * specification.
 * @member {string} [input.title] The title of your Swagger schema.
 * @member {string} [input.description] The description of the Swagger schema.
 * @member {string} [input.type] The type of the entity described in swagger.
 * Always 'object'.
 * @member {object} [input.properties] Specifies a collection that contains the
 * column schema for each input or output of the web service. For more
 * information, see the Swagger specification.
 * @member {object} [output] Contains the Swagger 2.0 schema describing one or
 * more of the web service's outputs. For more information, see the Swagger
 * specification.
 * @member {string} [output.title] The title of your Swagger schema.
 * @member {string} [output.description] The description of the Swagger schema.
 * @member {string} [output.type] The type of the entity described in swagger.
 * Always 'object'.
 * @member {object} [output.properties] Specifies a collection that contains
 * the column schema for each input or output of the web service. For more
 * information, see the Swagger specification.
 * @member {object} [exampleRequest] Defines sample input data for one or more
 * of the service's inputs.
 * @member {object} [exampleRequest.inputs] Sample input data for the web
 * service's input(s) given as an input name to sample input values matrix map.
 * @member {object} [exampleRequest.globalParameters] Sample input data for the
 * web service's global parameters
 * @member {object} [assets] Contains user defined properties describing web
 * service assets. Properties are expressed as Key/Value pairs.
 * @member {object} [parameters] The set of global parameters values defined
 * for the web service, given as a global parameter name to default value map.
 * If no default value is specified, the parameter is considered to be
 * required.
 * @member {boolean} [payloadsInBlobStorage] When set to true, indicates that
 * the payload size is larger than 3 MB. Otherwise false. If the payload size
 * exceed 3 MB, the payload is stored in a blob and the PayloadsLocation
 * parameter contains the URI of the blob. Otherwise, this will be set to false
 * and Assets, Input, Output, Package, Parameters, ExampleRequest are inline.
 * The Payload sizes is determined by adding the size of the Assets, Input,
 * Output, Package, Parameters, and the ExampleRequest.
 * @member {object} [payloadsLocation] The URI of the payload blob. This
 * paramater contains a value only if the payloadsInBlobStorage parameter is
 * set to true. Otherwise is set to null.
 * @member {string} [payloadsLocation.uri] The URI from which the blob is
 * accessible from. For example, aml://abc for system assets or https://xyz for
 * user assets or payload.
 * @member {string} [payloadsLocation.credentials] Access credentials for the
 * blob, if applicable (e.g. blob specified by storage account connection
 * string + blob URI)
 * @member {string} packageType Polymorphic Discriminator
 */
export interface WebServiceProperties {
  title?: string;
  description?: string;
  readonly createdOn?: Date;
  readonly modifiedOn?: Date;
  readonly provisioningState?: string;
  keys?: WebServiceKeys;
  readOnly?: boolean;
  readonly swaggerLocation?: string;
  exposeSampleData?: boolean;
  realtimeConfiguration?: RealtimeConfiguration;
  diagnostics?: DiagnosticsConfiguration;
  storageAccount?: StorageAccount;
  machineLearningWorkspace?: MachineLearningWorkspace;
  commitmentPlan?: CommitmentPlan;
  input?: ServiceInputOutputSpecification;
  output?: ServiceInputOutputSpecification;
  exampleRequest?: ExampleRequest;
  assets?: { [propertyName: string]: AssetItem };
  parameters?: { [propertyName: string]: WebServiceParameter };
  payloadsInBlobStorage?: boolean;
  payloadsLocation?: BlobLocation;
  packageType: string;
}

/**
 * @class
 * Initializes a new instance of the WebService class.
 * @constructor
 * Instance of an Azure ML web service resource.
 *
 * @member {object} properties Contains the property payload that describes the
 * web service.
 * @member {string} [properties.title] The title of the web service.
 * @member {string} [properties.description] The description of the web
 * service.
 * @member {date} [properties.createdOn] Read Only: The date and time when the
 * web service was created.
 * @member {date} [properties.modifiedOn] Read Only: The date and time when the
 * web service was last modified.
 * @member {string} [properties.provisioningState] Read Only: The provision
 * state of the web service. Valid values are Unknown, Provisioning, Succeeded,
 * and Failed. Possible values include: 'Unknown', 'Provisioning', 'Succeeded',
 * 'Failed'
 * @member {object} [properties.keys] Contains the web service provisioning
 * keys. If you do not specify provisioning keys, the Azure Machine Learning
 * system generates them for you. Note: The keys are not returned from calls to
 * GET operations.
 * @member {string} [properties.keys.primary] The primary access key.
 * @member {string} [properties.keys.secondary] The secondary access key.
 * @member {boolean} [properties.readOnly] When set to true, indicates that the
 * web service is read-only and can no longer be updated or patched, only
 * removed. Default, is false. Note: Once set to true, you cannot change its
 * value.
 * @member {string} [properties.swaggerLocation] Read Only: Contains the URI of
 * the swagger spec associated with this web service.
 * @member {boolean} [properties.exposeSampleData] When set to true, sample
 * data is included in the web service's swagger definition. The default value
 * is true.
 * @member {object} [properties.realtimeConfiguration] Contains the
 * configuration settings for the web service endpoint.
 * @member {number} [properties.realtimeConfiguration.maxConcurrentCalls]
 * Specifies the maximum concurrent calls that can be made to the web service.
 * Minimum value: 4, Maximum value: 200.
 * @member {object} [properties.diagnostics] Settings controlling the
 * diagnostics traces collection for the web service.
 * @member {string} [properties.diagnostics.level] Specifies the verbosity of
 * the diagnostic output. Valid values are: None - disables tracing; Error -
 * collects only error (stderr) traces; All - collects all traces (stdout and
 * stderr). Possible values include: 'None', 'Error', 'All'
 * @member {date} [properties.diagnostics.expiry] Specifies the date and time
 * when the logging will cease. If null, diagnostic collection is not time
 * limited.
 * @member {object} [properties.storageAccount] Specifies the storage account
 * that Azure Machine Learning uses to store information about the web service.
 * Only the name of the storage account is returned from calls to GET
 * operations. When updating the storage account information, you must ensure
 * that all necessary assets are available in the new storage account or calls
 * to your web service will fail.
 * @member {string} [properties.storageAccount.name] Specifies the name of the
 * storage account.
 * @member {string} [properties.storageAccount.key] Specifies the key used to
 * access the storage account.
 * @member {object} [properties.machineLearningWorkspace] Specifies the Machine
 * Learning workspace containing the experiment that is source for the web
 * service.
 * @member {string} [properties.machineLearningWorkspace.id] Specifies the
 * workspace ID of the machine learning workspace associated with the web
 * service
 * @member {object} [properties.commitmentPlan] Contains the commitment plan
 * associated with this web service. Set at creation time. Once set, this value
 * cannot be changed. Note: The commitment plan is not returned from calls to
 * GET operations.
 * @member {string} [properties.commitmentPlan.id] Specifies the Azure Resource
 * Manager ID of the commitment plan associated with the web service.
 * @member {object} [properties.input] Contains the Swagger 2.0 schema
 * describing one or more of the web service's inputs. For more information,
 * see the Swagger specification.
 * @member {string} [properties.input.title] The title of your Swagger schema.
 * @member {string} [properties.input.description] The description of the
 * Swagger schema.
 * @member {string} [properties.input.type] The type of the entity described in
 * swagger. Always 'object'.
 * @member {object} [properties.input.properties] Specifies a collection that
 * contains the column schema for each input or output of the web service. For
 * more information, see the Swagger specification.
 * @member {object} [properties.output] Contains the Swagger 2.0 schema
 * describing one or more of the web service's outputs. For more information,
 * see the Swagger specification.
 * @member {string} [properties.output.title] The title of your Swagger schema.
 * @member {string} [properties.output.description] The description of the
 * Swagger schema.
 * @member {string} [properties.output.type] The type of the entity described
 * in swagger. Always 'object'.
 * @member {object} [properties.output.properties] Specifies a collection that
 * contains the column schema for each input or output of the web service. For
 * more information, see the Swagger specification.
 * @member {object} [properties.exampleRequest] Defines sample input data for
 * one or more of the service's inputs.
 * @member {object} [properties.exampleRequest.inputs] Sample input data for
 * the web service's input(s) given as an input name to sample input values
 * matrix map.
 * @member {object} [properties.exampleRequest.globalParameters] Sample input
 * data for the web service's global parameters
 * @member {object} [properties.assets] Contains user defined properties
 * describing web service assets. Properties are expressed as Key/Value pairs.
 * @member {object} [properties.parameters] The set of global parameters values
 * defined for the web service, given as a global parameter name to default
 * value map. If no default value is specified, the parameter is considered to
 * be required.
 * @member {boolean} [properties.payloadsInBlobStorage] When set to true,
 * indicates that the payload size is larger than 3 MB. Otherwise false. If the
 * payload size exceed 3 MB, the payload is stored in a blob and the
 * PayloadsLocation parameter contains the URI of the blob. Otherwise, this
 * will be set to false and Assets, Input, Output, Package, Parameters,
 * ExampleRequest are inline. The Payload sizes is determined by adding the
 * size of the Assets, Input, Output, Package, Parameters, and the
 * ExampleRequest.
 * @member {object} [properties.payloadsLocation] The URI of the payload blob.
 * This paramater contains a value only if the payloadsInBlobStorage parameter
 * is set to true. Otherwise is set to null.
 * @member {string} [properties.payloadsLocation.uri] The URI from which the
 * blob is accessible from. For example, aml://abc for system assets or
 * https://xyz for user assets or payload.
 * @member {string} [properties.payloadsLocation.credentials] Access
 * credentials for the blob, if applicable (e.g. blob specified by storage
 * account connection string + blob URI)
 * @member {string} [properties.packageType] Polymorphic Discriminator
 */
export interface WebService extends Resource {
  properties: WebServiceProperties;
}

/**
 * @class
 * Initializes a new instance of the GraphNode class.
 * @constructor
 * Specifies a node in the web service graph. The node can either be an input,
 * output or asset node, so only one of the corresponding id properties is
 * populated at any given time.
 *
 * @member {string} [assetId] The id of the asset represented by this node.
 * @member {string} [inputId] The id of the input element represented by this
 * node.
 * @member {string} [outputId] The id of the output element represented by this
 * node.
 * @member {object} [parameters] If applicable, parameters of the node. Global
 * graph parameters map into these, with values set at runtime.
 */
export interface GraphNode {
  assetId?: string;
  inputId?: string;
  outputId?: string;
  parameters?: { [propertyName: string]: WebServiceParameter };
}

/**
 * @class
 * Initializes a new instance of the GraphEdge class.
 * @constructor
 * Defines an edge within the web service's graph.
 *
 * @member {string} [sourceNodeId] The source graph node's identifier.
 * @member {string} [sourcePortId] The identifier of the source node's port
 * that the edge connects from.
 * @member {string} [targetNodeId] The destination graph node's identifier.
 * @member {string} [targetPortId] The identifier of the destination node's
 * port that the edge connects into.
 */
export interface GraphEdge {
  sourceNodeId?: string;
  sourcePortId?: string;
  targetNodeId?: string;
  targetPortId?: string;
}

/**
 * @class
 * Initializes a new instance of the GraphParameterLink class.
 * @constructor
 * Association link for a graph global parameter to a node in the graph.
 *
 * @member {string} nodeId The graph node's identifier
 * @member {string} parameterKey The identifier of the node parameter that the
 * global parameter maps to.
 */
export interface GraphParameterLink {
  nodeId: string;
  parameterKey: string;
}

/**
 * @class
 * Initializes a new instance of the GraphParameter class.
 * @constructor
 * Defines a global parameter in the graph.
 *
 * @member {string} [description] Description of this graph parameter.
 * @member {string} type Graph parameter's type. Possible values include:
 * 'String', 'Int', 'Float', 'Enumerated', 'Script', 'Mode', 'Credential',
 * 'Boolean', 'Double', 'ColumnPicker', 'ParameterRange', 'DataGatewayName'
 * @member {array} links Association links for this parameter to nodes in the
 * graph.
 */
export interface GraphParameter {
  description?: string;
  type: string;
  links: GraphParameterLink[];
}

/**
 * @class
 * Initializes a new instance of the GraphPackage class.
 * @constructor
 * Defines the graph of modules making up the machine learning solution.
 *
 * @member {object} [nodes] The set of nodes making up the graph, provided as a
 * nodeId to GraphNode map
 * @member {array} [edges] The list of edges making up the graph.
 * @member {object} [graphParameters] The collection of global parameters for
 * the graph, given as a global parameter name to GraphParameter map. Each
 * parameter here has a 1:1 match with the global parameters values map
 * declared at the WebServiceProperties level.
 */
export interface GraphPackage {
  nodes?: { [propertyName: string]: GraphNode };
  edges?: GraphEdge[];
  graphParameters?: { [propertyName: string]: GraphParameter };
}

/**
 * @class
 * Initializes a new instance of the WebServicePropertiesForGraph class.
 * @constructor
 * Properties specific to a Graph based web service.
 *
 * @member {object} [packageProperty] The definition of the graph package
 * making up this web service.
 * @member {object} [packageProperty.nodes] The set of nodes making up the
 * graph, provided as a nodeId to GraphNode map
 * @member {array} [packageProperty.edges] The list of edges making up the
 * graph.
 * @member {object} [packageProperty.graphParameters] The collection of global
 * parameters for the graph, given as a global parameter name to GraphParameter
 * map. Each parameter here has a 1:1 match with the global parameters values
 * map declared at the WebServiceProperties level.
 */
export interface WebServicePropertiesForGraph extends WebServiceProperties {
  packageProperty?: GraphPackage;
}

/**
 * @class
 * Initializes a new instance of the AsyncOperationErrorInfo class.
 * @constructor
 * The error detail information for async operation
 *
 * @member {string} [code] The error code.
 * @member {string} [target] The error target.
 * @member {string} [message] The error message.
 * @member {array} [details] An array containing error information.
 */
export interface AsyncOperationErrorInfo {
  code?: string;
  target?: string;
  message?: string;
  details?: AsyncOperationErrorInfo[];
}

/**
 * @class
 * Initializes a new instance of the AsyncOperationStatus class.
 * @constructor
 * Azure async operation status.
 *
 * @member {string} [id] Async operation id.
 * @member {string} [name] Async operation name.
 * @member {string} [provisioningState] Read Only: The provisioning state of
 * the web service. Valid values are Unknown, Provisioning, Succeeded, and
 * Failed. Possible values include: 'Unknown', 'Provisioning', 'Succeeded',
 * 'Failed'
 * @member {date} [startTime] The date time that the async operation started.
 * @member {date} [endTime] The date time that the async operation finished.
 * @member {number} [percentComplete] Async operation progress.
 * @member {object} [errorInfo] If the async operation fails, this structure
 * contains the error details.
 * @member {string} [errorInfo.code] The error code.
 * @member {string} [errorInfo.target] The error target.
 * @member {string} [errorInfo.message] The error message.
 * @member {array} [errorInfo.details] An array containing error information.
 */
export interface AsyncOperationStatus {
  id?: string;
  name?: string;
  readonly provisioningState?: string;
  readonly startTime?: Date;
  readonly endTime?: Date;
  percentComplete?: number;
  errorInfo?: AsyncOperationErrorInfo;
}


/**
 * @class
 * Initializes a new instance of the PaginatedWebServicesList class.
 * @constructor
 * Paginated list of web services.
 *
 * @member {string} [nextLink] A continuation link (absolute URI) to the next
 * page of results in the list.
 */
export interface PaginatedWebServicesList extends Array<WebService> {
  nextLink?: string;
}