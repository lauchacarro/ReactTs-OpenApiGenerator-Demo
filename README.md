### npm install @openapitools/openapi-generator-cli -D
 
## crear archivo docs/openapi.json
## scripts 
    "api": "openapi-generator-cli generate -i docs/openapi.json -g typescript-axios -o src/generated-sources/openapi --additional-properties=npmName=rest-client,npmVersion=6.9.0,supportsES6=true"
 
 
## dependencia
"rest-client": "file:src/generated-sources/openapi",
 
### npm install
 
## Desarrollo
Crear data/apiClient.ts

Remplazar Fetch por usersApi
