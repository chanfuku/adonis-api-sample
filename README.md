
## set up

### set up

```bash
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


