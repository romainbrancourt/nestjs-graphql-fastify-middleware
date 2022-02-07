

## Installation

```bash
$ yarn install
```

## Testing GraphQl Endpoint
```bash
curl  -g \
-X POST \
-H "Content-Type: application/json" \
-d '{"query":"query{get {hello}}"}' \
localhost:3000/graphql
```


## Testing Http Endpoint
```bash
curl localhost:3000
```


