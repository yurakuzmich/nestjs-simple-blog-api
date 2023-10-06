#!/bin/bash

endpoint="curl -d \"id=3&name=Yura&email=yurakuzmich@gmail.com&password=1111&role=user&posts=[]&viewedPosts=[]\" -X POST http://localhost:3000/post"

echo "======== CREATION OF A POST ======="

result=`$endpoint`

eval $endpoint