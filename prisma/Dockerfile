FROM prismagraphql/prisma:1.20
# restart: always

ENV PRISMA_CONFIG '
        port: 4466
        # uncomment the next line and provide the env var PRISMA_MANAGEMENT_API_SECRET=my-secret to activate cluster security
        # managementApiSecret: my-secret
        databases:
          default:
            connector: mysql
            host: mysql
            port: 3306
            user: root
            password: prisma
            migrations: true
            rawAccess: true
'
