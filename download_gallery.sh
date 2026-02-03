#!/bin/bash
TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI2MmYxMDc2M2IxMWNjMjAwMTMzZDA0MDMvcmtncENjUzk0YmUiLCJleHAiOjE4MDEzNTAwMDB9.lYMVEDDKWC2J5W4Yy8TDY7Y-mZk8wHXkZIR0EXXmbes"
USER_ID="62f10763b11cc200133d0403"
FOLDER="rkgpCcS94be"
OUT_DIR="$HOME/workspace/projects/antonius-link/assets/gallery"
mkdir -p "$OUT_DIR"

# Image identifiers extracted from API
declare -a IMAGES=(
"rJnyiSqN-g:MB_Studio_-1"
"rkeejSqN-x:MB_Studio_-2"
"H1EljS94bg:MB_Studio_-3"
"rJOeiB9VWg:MB_Studio_-4"
"rJplir5VWx:MB_Studio_-5"
"Byg-sS5NZl:MB_Studio_-6"
"HyEZiS94Zg:MB_Studio_-7"
"rk_WiS9EWx:MB_Studio_-8"
"ry6bsH9VZg:MB_Studio_-9"
"HkWfjSc4bg:MB_Studio_-10"
)

total=${#IMAGES[@]}
count=0
for item in "${IMAGES[@]}"; do
  id="${item%%:*}"
  name="${item#*:}"
  ((count++))
  echo "[$count/$total] Downloading $name..."
  curl -sL -o "$OUT_DIR/${name}.jpg" "https://api-1.scrappbook.de/api/image/show/$USER_ID/$FOLDER/$id/L.jpg?token=$TOKEN"
done
echo "Done! Downloaded $count images."
