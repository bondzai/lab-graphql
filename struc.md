mern-crud/
├── src/
│   ├── controllers/
│   │   ├── item.controller.ts
│   ├── models/
│   │   ├── Item.ts
│   ├── repositories/
│   │   ├── item.repository.ts
│   ├── routes/
│   │   ├── item.routes.ts
│   ├── services/
│   │   ├── item.service.ts
│   ├── app.ts
│   ├── server.ts
├── .env
└── package.json

controllers: Handle HTTP request/response logic.
models: Define your Mongoose models.
repositories: Interface to interact with the data storage.
routes: Define your API routes.
services: Business logic goes here.
app.ts: Configure Express and middleware.
server.ts: Start the server.