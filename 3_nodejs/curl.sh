#!/bin/sh

base_url="http://localhost:3001/api"

if [ $1 = "index" ]; then
    curl -s -X GET $base_url/products?page=$2 | jq .
elif [ $1 = "show" ]; then
    curl -s -X GET $base_url/products/$2 | jq .
elif [ $1 = "store" ]; then
    curl -s -X POST -H "Content-Type: application/json" $base_url/products -d '
    {
        "title": "'"$2"'",
        "description": "'"$3"'",
        "url": "'"$4"'"
    }' | jq .
elif [ $1 = "update" ]; then
    KEY=$(echo $@ | cut -f3 -d- | cut -f1 -d=)
    VALUE=$(echo $@ | cut -f3 -d- | cut -f2 -d=)
    curl -s -X PUT -H "Content-Type: application/json" $base_url/products/$2 -d '
    {
        "'"$KEY"'": "'"$VALUE"'"
    }' | jq .
elif [ $1 = "destroy" ]; then
    curl -s -X DELETE -H "Content-Type: application/json" $base_url/products/$2 | jq .
else
    echo "use index, show, store, update or destroy!"
fi