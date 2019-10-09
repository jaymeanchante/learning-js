#!/bin/sh

base_url="http://localhost:3001/api"

if [ $1 = "index" ]; then
    curl -s -X GET $base_url/products | jq .
elif [ $1 = "show" ]; then
    curl -s -X GET $base_url/products/$2 | jq .
elif [ $1 = "store" ]; then
    curl -s -X POST -H "Content-Type: application/json" $base_url/products -d '
    {
        "title": "$2",
        "description": "$3",
        "url": "$4"
    }' | jq .
elif [ $1 = "update" ]; then
    curl -s -X POST -H "Content-Type: application/json" $base_url/products/$2 -d '
    {
        "title": "$2",
        "description": "$3",
        "url": "$4"
    }'
elif [ $1 = "destroy" ]; then
    echo "a"
elif [ $1 = "other" ]; then
    echo $@
else
    echo "use index, show or store!"
fi