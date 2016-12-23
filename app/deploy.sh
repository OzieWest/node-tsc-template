#!/usr/bin/env bash

DATE=`date +%Y-%m-%d:%H:%M:%S`
BRANCH=$(git rev-parse --abbrev-ref HEAD)
COMMITID=$(git rev-parse HEAD)

for region in "us-west-2"; do
    echo "Deploying to $region"

    rm -rf release && rm release.zip
    mkdir release

    # copy common files
    cp -R server release
    cp package.json release
    cp tsconfig.json release

    cd release && zip -r ../release.zip . && cd .. && rm -rf release
    eb deploy --label "$DATE-$BRANCH-$COMMITID"

    # cleanup
    rm release.zip
done