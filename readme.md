## Schema API

#### Addition de nombres

```http
  POST /calc/sum
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `num1`      | `number` | **Required**. Nombre 1 |
| `num2`      | `number` | **Required**. Nombre 2 |

#### Soustraction de nombres

```http
  POST /calc/sub
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `num1`      | `number` | **Required**. Nombre 1 |
| `num2`      | `number` | **Required**. Nombre 2 |

#### Multiplication de nombres

```http
  POST /calc/mult
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `num1`      | `number` | **Required**. Nombre 1 |
| `num2`      | `number` | **Required**. Nombre 2 |

#### Division de nombres

```http
  POST /calc/div
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `num1`      | `number` | **Required**. Nombre 1 |
| `num2`      | `number` | **Required**. Nombre 2 |

## Strcuture de l'app

projet/
├── src/
│   ├── controllers/        // Aucune logique métier : reçoit la requête et appelle le service
│   │   └── calc-controller.ts
│   ├── services/           // Contient la logique métier (business logic)
│   │   └── calc-service.ts
│   ├── repositories/       // Gestion directe des données (BDD, fichiers, etc.)
│   │   └── calc-repository.ts
│   ├── models/             // Contient des classes métier
│   │   └── calc.ts
│   ├── routes/             // Routes express
│   │   └── calc.ts
|   |   |__ index.ts    
├── tests/                  // Tests unitaires et d’intégration
│   └── user.test.ts
├── index.ts                // Point d’entrée de l’application (listen)
├── tsconfig.json
├── package.json
└── README.md

## Le flux de données pour une requête (après réalisation de BD)

[Client] ---> [Route] ---> [Controller] ---> [Service] ---> [Repository] ---> [Database]

## Le flux de données pour une requête maintenant

[Client] ---> [Route] ---> [Controller] ---> [Service]