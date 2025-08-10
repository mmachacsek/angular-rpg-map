# angular-rpg-map

**Angular RPG Map Editor**

A web-based map editor for classic RPGs, built with Angular. Easily create, edit, and visualize dungeon maps for games like Wizardry. Supports importing, exporting, and managing multiple map files.

## Features

- **Interactive Map Editing:** Draw, modify, and annotate dungeon maps directly in your browser.
- **Multi-Game Support:** Organize maps for different RPGs (e.g., Wizardry 1, Wizardry 6).
- **Import/Export:** Save maps as JSON files and load existing maps for editing.
- **Customizable Tiles:** Add walls, doors, notes, and other features to each map cell.
- **Easy Setup:** No backend required—just open in your browser.

## Getting Started

### Development Server

Start a local development server:

```bash
ng serve
```

Visit [http://localhost:4200/](http://localhost:4200/) in your browser. The app reloads automatically on code changes.

### Building

Compile the project and output files to `dist/`:

```bash
ng build
```
## Folder Structure

- `maps/` — Contains sample and user-created map files organized by game.
- `public/` — Static assets (favicon, etc.).
- `src/app/` — Main application source code.

## Additional Resources

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)