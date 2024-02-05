#!/bin/bash

# Add your route adding logic here
# For example, you can use sed to update your routes file

# Assuming your routes are stored in a file named routes.js
sed -i 's|<add your new route here>|<new route to be added>|' src/routes.js

# Run the build command
npm run build

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "Build successful. Routes added."
  exit 0
else
  echo "Build failed. Please fix errors before committing."
  exit 1
fi
