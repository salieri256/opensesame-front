# OpenSesame🚪🏃💨
Access control system.
Logs user entry and exit, and opens and locks the door.

## Setup Docker docker-compose
```shell
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
```

```shell
$ wget https://github.com/docker/compose/releases/download/v2.9.0/docker-compose-linux-aarch64
$ mkdir ~/.docker
$ mv docker-compose-linux-aarch64 ~/.docker/docker-compose
$ chmod +x ~/.docker/docker-compose
```

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

### Build
```shell
$ docker compose build
```

### Start
```shell
$ docker compose up
```

## .env Example
```env
NEXT_PUBLIC_DB_SERVICE_BASE_URL=http://192.168.0.3:8000
```