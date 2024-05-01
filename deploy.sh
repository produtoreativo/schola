#!/bin/bash

export PROJECT_ID=$(gcloud config list --format 'value(core.project)')
export REPOSITORY_ID=schola

export URL=https://source.developers.google.com/projects/$PROJECT_ID/repos/$REPOSITORY_ID

gcloud functions deploy helloGET \
--source $URL \
--trigger-http \
--runtime=nodejs18;