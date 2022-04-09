#!/bin/bash

npm run build
echo "www.willrycroft.com" > build/CNAME
git add build
git commit -m "build: new build"
git subtree push --prefix build origin gh-pages
