# はじめに(Introduction)

To use this container, please follow the steps bellow.

```console
# start up the container
$ docker compose up -d

# Entering the console
$ docker exec -it nextjs_uidemo bash

```
node ユーザでデフォルトログインにしているため  
rootユーザとして入りたい時は`docker exec -u root -i nextjs_uidemo bash`とすること。
