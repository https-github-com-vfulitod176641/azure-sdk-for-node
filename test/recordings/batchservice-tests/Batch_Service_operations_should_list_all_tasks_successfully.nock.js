// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#tasks\",\"value\":[\r\n    {\r\n      \"id\":\"HelloWorldNodeSDKTestTask\",\"url\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask\",\"eTag\":\"0x8D65F98BC3C1AEF\",\"creationTime\":\"2018-12-11T18:44:49.2209796Z\",\"lastModified\":\"2018-12-11T18:44:51.7227247Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:44:51.7227247Z\",\"previousState\":\"completed\",\"previousStateTransitionTime\":\"2018-12-11T18:44:50.992308Z\",\"commandLine\":\"ping 127.0.0.1 -n 20\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P7D\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"HelloWorldNodeSDKTestTask2\",\"url\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2\",\"eTag\":\"0x8D65F98BC678828\",\"creationTime\":\"2018-12-11T18:44:51.4943183Z\",\"lastModified\":\"2018-12-11T18:44:52.0073256Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:44:51.4943183Z\",\"commandLine\":\"cmd /c echo hello world\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P7D\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cdd1c784-ea2c-4c9e-bedd-c50bcf12fa0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:44:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#tasks\",\"value\":[\r\n    {\r\n      \"id\":\"HelloWorldNodeSDKTestTask\",\"url\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask\",\"eTag\":\"0x8D65F98BC3C1AEF\",\"creationTime\":\"2018-12-11T18:44:49.2209796Z\",\"lastModified\":\"2018-12-11T18:44:51.7227247Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:44:51.7227247Z\",\"previousState\":\"completed\",\"previousStateTransitionTime\":\"2018-12-11T18:44:50.992308Z\",\"commandLine\":\"ping 127.0.0.1 -n 20\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P7D\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"HelloWorldNodeSDKTestTask2\",\"url\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2\",\"eTag\":\"0x8D65F98BC678828\",\"creationTime\":\"2018-12-11T18:44:51.4943183Z\",\"lastModified\":\"2018-12-11T18:44:52.0073256Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-12-11T18:44:51.4943183Z\",\"commandLine\":\"cmd /c echo hello world\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P7D\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cdd1c784-ea2c-4c9e-bedd-c50bcf12fa0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:44:52 GMT',
  connection: 'close' });
 return result; }]];