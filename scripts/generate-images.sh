#!/bin/bash
# Generate images for Piako Consult website - sequential to avoid rate limit
set -e

OUT=/home/z/my-project/public/images
mkdir -p "$OUT"

echo "Generating Piako website images sequentially..."

# Hero - infrastructure aerial, dark, dramatic (use 1344x768 since 1440x720 invalid)
z-ai image -p "Aerial view of large-scale African infrastructure development at dusk, modern water treatment plant and bridge construction, dramatic dark moody sky, professional engineering photography, deep navy tones with subtle warm highlights, cinematic wide shot" -o "$OUT/hero.png" -s 1344x768
echo "Hero done."
sleep 8

# About - engineering team in field
z-ai image -p "Two professional African engineers in safety vests and hard hats reviewing blueprints at construction site, golden hour lighting, focus on collaboration and expertise, shallow depth of field, documentary photography style" -o "$OUT/about-team.png" -s 1344x768
echo "About done."
sleep 8

# Project 1 - Water sanitation
z-ai image -p "Modern water treatment facility with large circular settling tanks, blue water, industrial pipes and infrastructure, clear sky, professional infrastructure photography, aerial perspective" -o "$OUT/project-water.png" -s 1344x768
echo "Water done."
sleep 8

# Project 3 - Roads/transportation
z-ai image -p "Newly constructed highway with smooth asphalt cutting through African landscape, road markings, drainage infrastructure, dramatic sunset sky, aerial drone view, professional infrastructure photography" -o "$OUT/project-roads.png" -s 1344x768
echo "Roads done."
sleep 8

# Careers - young engineers
z-ai image -p "Diverse group of young African engineering graduates in modern office, professional attire, collaborating around table with laptops and engineering drawings, bright natural lighting, corporate photography" -o "$OUT/careers.png" -s 1344x768
echo "Careers done."
sleep 8

# Project 4 - Building/Architecture
z-ai image -p "Modern multi-storey commercial building under construction in African city, steel frame structure, crane on site, blue sky, professional construction photography, architectural perspective" -o "$OUT/project-building.png" -s 1344x768
echo "Building done."

echo "All images generated."
ls -la "$OUT"
