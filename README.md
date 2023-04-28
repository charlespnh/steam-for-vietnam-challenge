# STEAM for Vietnam Challenge Summer 2023

## Instructions
```
npm --version
8.5.3

node --version
v14.17.6
```

At root project path `/steam-for-vietnam`, navigate to `server` directory:
```
cd server
npm install
npm run start
```
and in another terminal, navigate to `client` directory:
```
cd client
npm install
npm start
```

## Design
### Frontend
- `React`

### Backend
- `Node` and its `Express` framework
- API versioning is followed, as all development process should
- Modular design is leveraged so that application can scale up in terms of codes and design easily without having to heavily refactor later on. The entire challenge can be done with just `React` client side and `fetch`, but potentially leads to large refactorig process should we add more features and require database.

## Roadmap
- Test-drive development with `Jest`
- Enforce typesafety with `Joi`, a request schema validation framework
- Move away from JSON Placeholder API and have our own database of users, posts and photos (via `MongoDB`)
