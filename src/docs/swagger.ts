import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  swaggerDefinition: {
    info: {
      title: 'Pokedex Micro-service',
      version: '1.0.0',
      description: 'Project Pokedex Redis Documentation',
    },
    basePath: '/',
  },
  apis: ['./**/*.ts'], // Caminho para os arquivos que contêm as rotas da sua API em TypeScript
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: any) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
