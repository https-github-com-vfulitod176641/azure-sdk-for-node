// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .get('/nodeagentskus?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#nodeagentskus\",\"value\":[\r\n    {\r\n      \"id\":\"batch.node.centos 7\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.5\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.4\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.3\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Oracle\",\"offer\":\"Oracle-Linux\",\"sku\":\"7.5\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-ads\",\"offer\":\"linux-data-science-vm\",\"sku\":\"linuxdsvm\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"batch\",\"offer\":\"rendering-centos73\",\"sku\":\"rendering\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-azure-batch\",\"offer\":\"centos-container\",\"sku\":\"7-5\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-azure-batch\",\"offer\":\"centos-container-rdma\",\"sku\":\"7-4\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.debian 8\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Credativ\",\"offer\":\"Debian\",\"sku\":\"8\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.debian 9\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Credativ\",\"offer\":\"Debian\",\"sku\":\"9\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 14.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.5-LTS\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 16.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-dsvm\",\"offer\":\"linux-data-science-vm-ubuntu\",\"sku\":\"linuxdsvmubuntu\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-azure-batch\",\"offer\":\"ubuntu-server-container\",\"sku\":\"16-04-lts\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-azure-batch\",\"offer\":\"ubuntu-server-container-rdma\",\"sku\":\"16-04-lts\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 18.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"18.04-LTS\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.windows amd64\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-Core\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-Core-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-Datacenter-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2008-R2-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2008-R2-SP1-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-with-Containers\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-with-Containers-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-Core-with-Containers\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-Core-with-Containers-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-with-Containers\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-dsvm\",\"offer\":\"dsvm-windows\",\"sku\":\"server-2016\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"batch\",\"offer\":\"rendering-windows2016\",\"sku\":\"rendering\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"windows\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7b8d03c0-251f-4ade-bd7f-c673d65828d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 21:04:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .get('/nodeagentskus?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#nodeagentskus\",\"value\":[\r\n    {\r\n      \"id\":\"batch.node.centos 7\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS\",\"sku\":\"7.5\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.4\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.3\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"Oracle\",\"offer\":\"Oracle-Linux\",\"sku\":\"7.5\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-ads\",\"offer\":\"linux-data-science-vm\",\"sku\":\"linuxdsvm\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"batch\",\"offer\":\"rendering-centos73\",\"sku\":\"rendering\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-azure-batch\",\"offer\":\"centos-container\",\"sku\":\"7-5\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-azure-batch\",\"offer\":\"centos-container-rdma\",\"sku\":\"7-4\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.debian 8\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Credativ\",\"offer\":\"Debian\",\"sku\":\"8\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.debian 9\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Credativ\",\"offer\":\"Debian\",\"sku\":\"9\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 14.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.5-LTS\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 16.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-dsvm\",\"offer\":\"linux-data-science-vm-ubuntu\",\"sku\":\"linuxdsvmubuntu\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-azure-batch\",\"offer\":\"ubuntu-server-container\",\"sku\":\"16-04-lts\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-azure-batch\",\"offer\":\"ubuntu-server-container-rdma\",\"sku\":\"16-04-lts\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.ubuntu 18.04\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"18.04-LTS\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"linux\"\r\n    },{\r\n      \"id\":\"batch.node.windows amd64\",\"verifiedImageReferences\":[\r\n        {\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-Core\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-Core-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-R2-Datacenter-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-Datacenter\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2012-Datacenter-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2008-R2-SP1\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2008-R2-SP1-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-with-Containers\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-with-Containers-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-Core-with-Containers\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2019-Datacenter-Core-with-Containers-smalldisk\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-with-Containers\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"microsoft-dsvm\",\"offer\":\"dsvm-windows\",\"sku\":\"server-2016\",\"version\":\"latest\"\r\n        },{\r\n          \"publisher\":\"batch\",\"offer\":\"rendering-windows2016\",\"sku\":\"rendering\",\"version\":\"latest\"\r\n        }\r\n      ],\"osType\":\"windows\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7b8d03c0-251f-4ade-bd7f-c673d65828d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 21:04:04 GMT',
  connection: 'close' });
 return result; }]];