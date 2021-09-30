#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:Aster0N/vue-shopping-cart.git master:gh-pages

cd -