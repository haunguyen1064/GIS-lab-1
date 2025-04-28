# Parking Lot Visualization

## Overview
This project visualizes parking lots using the ArcGIS JavaScript API. It provides an interactive map with markers for parking lots, displaying details such as location, total slots, and available slots.

## Prerequisites
- A live server to serve the project files.

## Running the Project
1. **Start the live server**:
   - If you have `live-server` installed globally:
     ```bash
     live-server
     ```
   - Alternatively, use the `Go Live` extension in Visual Studio Code.

2. **Access the application**:
   Open your browser and navigate to `http://127.0.0.1:5500` (or the URL provided by your live server).

## Features
- Interactive map with parking lot markers.
- Popup details for each parking lot.

## File Structure
- `index.html`: Entry point of the application.
- `index.js`: Main JavaScript file for rendering parking lot data.
- `data.js`: Contains parking lot data.
- `images/`: Contains icons and other assets.
- `districts/`: Contains GeoJSON files for district boundaries used in the map visualization.
