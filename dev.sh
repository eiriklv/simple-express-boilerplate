#!/bin/sh
# Variables set up by this script:
# PORT                        Port exposed by this component.
# DEBUG                       Debugging (* for all)
# NODE_ENV                    Environment ('development', 'staging', 'production')
# APPSECRET                   Application session secret

export PORT=3000 \
export DEBUG='application:socketio:*' \
export NODE_ENV='development' \
export APPSECRET='somecrazyhash' \
export API_URL="/api" \

# Run process
gulp