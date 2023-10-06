#!/bin/bash

endpoint="curl http://localhost:3000/post/$1"

echo "=========== POST BY ID. ID = $1 ============"

result=`$endpoint`

eval $endpoint