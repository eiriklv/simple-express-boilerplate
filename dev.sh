#!/bin/sh
# Variables set up by this script:
# PORT         Port exposed by this component.
# DEBUG        Debugging (* for all)
# NODE_ENV     Environment ('development', 'staging', 'production')
# APPSECRET    Application session secret
# API_URL      Client side API url

export PORT=3000 \
export DEBUG='*' \
export NODE_ENV='development' \
export APPSECRET='somecrazyhash' \
export API_URL="/api" \

# Run process
gulp