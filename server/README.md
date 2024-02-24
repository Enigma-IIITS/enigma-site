# backend

## Deployment

### Requirements

- Ubuntu VM
- Atleast 1 GB of RAM
- Persistent disk for file storage

### Setup

- [Install Mongodb](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)
- [Setup Nginx](https://blog.logrocket.com/how-to-run-a-node-js-server-with-nginx/)
- Clone this repo, move into `server` directory and hit `npm install`
- Write appropriate environment variables as documented in `template.env`

### Run

- Install pm2
- `npm run build`
- `pm2 dist/main.js`
