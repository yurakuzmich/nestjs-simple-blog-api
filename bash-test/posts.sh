#!/bin/bash

endpoint="curl http://localhost:3000/post"

echo "=========== ALL POSTS ============"

result=`$endpoint`

eval $endpoint