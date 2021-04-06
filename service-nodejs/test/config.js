var baseUrl = 'http://localhost:8080/auth';

module.exports = {
  registration: {
    endpoint: baseUrl + '/realms/keycloak-demo/clients-registrations',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIxMzRlODg2YS01YzY0LTRlOTEtYWJiYi0zZjczOTQ1NWQwNDIifQ.eyJleHAiOjAsImlhdCI6MTYxNzczMTk0OCwianRpIjoiZTIxYTcxYWYtMjg3MS00NWYwLTk1YzktMDU1NDZhZWIzMDAwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL2tleWNsb2FrLWRlbW8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMva2V5Y2xvYWstZGVtbyIsInR5cCI6IlJlZ2lzdHJhdGlvbkFjY2Vzc1Rva2VuIiwicmVnaXN0cmF0aW9uX2F1dGgiOiJhdXRoZW50aWNhdGVkIn0.pjCW4_1CFAM4xdzQfcQ8R2zyyhDx5Rm5M31EMiDd4wU'
  },
  baseUrl: baseUrl,
  token: {
    username: 'admin',
    password: 'admin',
    grant_type: 'password',
    client_id: 'test-cli',
    realmName: 'keycloak-demo'
  },
  testClient: {
    clientId: 'test-cli',
    consentRequired: "false",
    publicClient: "true",
    standardFlowEnabled: "false",
    directAccessGrantsEnabled: "true",
    fullScopeAllowed: "true"
  }
};
