#!/bin/bash

git switch main
git merge $1
git push 
git switch $1