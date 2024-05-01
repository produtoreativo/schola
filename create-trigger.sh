#!/bin/bash

gcloud builds triggers create cloud-source-repositories \
    --name=trigger-schola \
    --repo=schola \
    --region=us-central1 \
    --build-config=cloudbuild.yaml \
    --branch-pattern=master
