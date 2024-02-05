#!/bin/bash

new_route="$1"
routes_file="src/routes.js"

# Check if the new route is provided
if [ -z "$new_route" ]; then
  echo "Error: Please provide a new route."
  exit 1
fi

# Check if the routes file exists
if [ ! -f "$routes_file" ]; then
  echo "Error: Routes file '$routes_file' not found."
  exit 1
fi

# Add the new route to the routes file
echo "Adding route: $new_route"
echo "export const ROUTE_$new_route = '$new_route';" >> "$routes_file"

echo "Route added successfully."
