#!/usr/bin/env bash

npm install
npm run compile
npm login
npm version patch # major, minor or patch
npm publish

