#!/bin/bash
rm -fr ./docs
cp -r app/dist/ ./dist
mv ./dist docs