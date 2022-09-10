# OpenSesame🚪🏃💨
Access control system.
Logs user entry and exit, and opens and locks the door.

## Setup project
### Clone
```shell
$ git clone https://github.com/salieri256/opensesame-front.git
$ cd opensesame-front/
```

### Create .env
./.env.local
```env
NEXT_PUBLIC_DB_SERVICE_BASE_URL=
```

### Install dependencies
```shell
$ yarn install
```

### Build
```shell
$ yarn build
```

### Start
```shell
$ yarn start
```

## .env Example
```env
NEXT_PUBLIC_DB_SERVICE_BASE_URL=http://192.168.0.3:8000
```