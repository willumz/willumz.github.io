#!/bin/bash

npm run build
git add build
git commit
git subtree push --prefix build origin gh-pages