
## set up

### set up

```bash
cp .env.example .env
docker compose up -d
docker compose exec app yarn install
docker compose exec app yarn dev
```

### run migration

```bash
docker compose exec app node ace migration:run
```

### roll back migration

```bash
docker compose exec app node ace migration:rollback
```

### seeds

```bash
docker compose exec app node ace db:seed
```

### fetch all

```bash
curl http://localhost:3333/users
```

### find a user by id

```bash
curl http://localhost:3333/users/1
```

### create user

```bash
curl -X POST http://localhost:3333/users \
     -H "Content-Type: application/json" \
     -d '{"firstName":"テスト名","lastName":"テスト姓"}'
```

### update user

```bash
curl -X PATCH http://localhost:3333/users/3 \
     -H "Content-Type: application/json" \
     -d '{"firstName":"テスト名_更新","lastName":"テスト姓_更新"}'
```

### delete a user

```bash
curl -X DELETE http://localhost:3333/users/3
```

