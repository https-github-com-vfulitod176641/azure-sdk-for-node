// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .get('/pools?api-version=2018-12-01.8.0&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdkinboundendpointpool\",\"url\":\"https://test3.westcentralus.batch.azure.com/pools/nodesdkinboundendpointpool\",\"eTag\":\"0x8D65F9778F109AA\",\"lastModified\":\"2018-12-11T18:35:49.3266858Z\",\"creationTime\":\"2018-12-11T18:35:49.3266858Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:35:49.3266858Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2018-12-11T18:37:15.7227081Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":1,\"targetDedicatedNodes\":1,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 16.04\"\r\n      },\"networkConfiguration\":{\r\n        \"endpointConfiguration\":{\r\n          \"inboundNATPools\":[\r\n            {\r\n              \"name\":\"TestEndpointConfig\",\"protocol\":\"udp\",\"backendPort\":64444,\"frontendPortRangeStart\":60000,\"frontendPortRangeEnd\":61000\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://test3.westcentralus.batch.azure.com/pools?api-version=2018-12-01.8.0&maxresults=1&$skiptoken=WATV2:xXTnx8aYHbmAN4GZ35TF7f3jZee9yHbM9quAZHeSpZL7ZKnwc27X5/icmfiPuypc4pHLn9Vh80uomeDu1c98gVtTwVPXMW8jsyO44HoYTQj5vKsNOV8wdG6ZRRCv9lNQh55Ka1k2C9Ujf5B3PZahiW65D8eGqtKQ5CMPVpLJSDmKDcLZoILMFOADcj42z8OTY4X81oJ38rTL1a8bKdZ0tvutule4sVdN8kc7HBdO6R43/e/kQQIhe0SJVY6u2qdRuNkyt5kLcvggG0ifEfLJXQ==:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd95435d2-5100-4cca-8999-23a89f4a4144',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:44:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .get('/pools?api-version=2018-12-01.8.0&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdkinboundendpointpool\",\"url\":\"https://test3.westcentralus.batch.azure.com/pools/nodesdkinboundendpointpool\",\"eTag\":\"0x8D65F9778F109AA\",\"lastModified\":\"2018-12-11T18:35:49.3266858Z\",\"creationTime\":\"2018-12-11T18:35:49.3266858Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:35:49.3266858Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2018-12-11T18:37:15.7227081Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":1,\"targetDedicatedNodes\":1,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 16.04\"\r\n      },\"networkConfiguration\":{\r\n        \"endpointConfiguration\":{\r\n          \"inboundNATPools\":[\r\n            {\r\n              \"name\":\"TestEndpointConfig\",\"protocol\":\"udp\",\"backendPort\":64444,\"frontendPortRangeStart\":60000,\"frontendPortRangeEnd\":61000\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://test3.westcentralus.batch.azure.com/pools?api-version=2018-12-01.8.0&maxresults=1&$skiptoken=WATV2:xXTnx8aYHbmAN4GZ35TF7f3jZee9yHbM9quAZHeSpZL7ZKnwc27X5/icmfiPuypc4pHLn9Vh80uomeDu1c98gVtTwVPXMW8jsyO44HoYTQj5vKsNOV8wdG6ZRRCv9lNQh55Ka1k2C9Ujf5B3PZahiW65D8eGqtKQ5CMPVpLJSDmKDcLZoILMFOADcj42z8OTY4X81oJ38rTL1a8bKdZ0tvutule4sVdN8kc7HBdO6R43/e/kQQIhe0SJVY6u2qdRuNkyt5kLcvggG0ifEfLJXQ==:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd95435d2-5100-4cca-8999-23a89f4a4144',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:44:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .get('/pools?api-version=2018-12-01.8.0&maxresults=1&$skiptoken=WATV2:xXTnx8aYHbmAN4GZ35TF7f3jZee9yHbM9quAZHeSpZL7ZKnwc27X5/icmfiPuypc4pHLn9Vh80uomeDu1c98gVtTwVPXMW8jsyO44HoYTQj5vKsNOV8wdG6ZRRCv9lNQh55Ka1k2C9Ujf5B3PZahiW65D8eGqtKQ5CMPVpLJSDmKDcLZoILMFOADcj42z8OTY4X81oJ38rTL1a8bKdZ0tvutule4sVdN8kc7HBdO6R43/e/kQQIhe0SJVY6u2qdRuNkyt5kLcvggG0ifEfLJXQ==:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdkosdiskpool\",\"url\":\"https://test3.westcentralus.batch.azure.com/pools/nodesdkosdiskpool\",\"eTag\":\"0x8D65F97770B2ED1\",\"lastModified\":\"2018-12-11T18:35:46.1425873Z\",\"creationTime\":\"2018-12-11T18:35:46.1425873Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:35:46.1425873Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2018-12-11T18:35:46.5651472Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":0,\"targetDedicatedNodes\":0,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 16.04\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://test3.westcentralus.batch.azure.com/pools?api-version=2018-12-01.8.0&maxresults=1&$skiptoken=WATV2:A6ur9/pk0mRSAwHGWDWq47cLv5wW9C4n5Dw3Nf2nEOie8%5ED13Z6GCrPf4oCldYZ0n1Ri1LE6oEU408r83oetGznQuFNm1z/p1zMixyiOWKnaZCmyNoOszGLjGKXP%5EsJ2u%5EruLKD8XyOuopXpk8/t1mOwAUVMCBy6gJ7HvYHq49TbYSCRw6vNfdVFhLgyQUS4U2DXT5bghCWUkaeUS6NgHT8im712eY7Hjx1UoYPJ1fnIivVDXFzuswbr5MyW7bHnKqVw/lqMvf5hSzfwj3dSxg==:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e1bc24c0-e5b7-4132-ab31-f70d15a4d848',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:44:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .get('/pools?api-version=2018-12-01.8.0&maxresults=1&$skiptoken=WATV2:xXTnx8aYHbmAN4GZ35TF7f3jZee9yHbM9quAZHeSpZL7ZKnwc27X5/icmfiPuypc4pHLn9Vh80uomeDu1c98gVtTwVPXMW8jsyO44HoYTQj5vKsNOV8wdG6ZRRCv9lNQh55Ka1k2C9Ujf5B3PZahiW65D8eGqtKQ5CMPVpLJSDmKDcLZoILMFOADcj42z8OTY4X81oJ38rTL1a8bKdZ0tvutule4sVdN8kc7HBdO6R43/e/kQQIhe0SJVY6u2qdRuNkyt5kLcvggG0ifEfLJXQ==:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdkosdiskpool\",\"url\":\"https://test3.westcentralus.batch.azure.com/pools/nodesdkosdiskpool\",\"eTag\":\"0x8D65F97770B2ED1\",\"lastModified\":\"2018-12-11T18:35:46.1425873Z\",\"creationTime\":\"2018-12-11T18:35:46.1425873Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:35:46.1425873Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2018-12-11T18:35:46.5651472Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":0,\"targetDedicatedNodes\":0,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 16.04\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://test3.westcentralus.batch.azure.com/pools?api-version=2018-12-01.8.0&maxresults=1&$skiptoken=WATV2:A6ur9/pk0mRSAwHGWDWq47cLv5wW9C4n5Dw3Nf2nEOie8%5ED13Z6GCrPf4oCldYZ0n1Ri1LE6oEU408r83oetGznQuFNm1z/p1zMixyiOWKnaZCmyNoOszGLjGKXP%5EsJ2u%5EruLKD8XyOuopXpk8/t1mOwAUVMCBy6gJ7HvYHq49TbYSCRw6vNfdVFhLgyQUS4U2DXT5bghCWUkaeUS6NgHT8im712eY7Hjx1UoYPJ1fnIivVDXFzuswbr5MyW7bHnKqVw/lqMvf5hSzfwj3dSxg==:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e1bc24c0-e5b7-4132-ab31-f70d15a4d848',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:44:46 GMT',
  connection: 'close' });
 return result; }]];