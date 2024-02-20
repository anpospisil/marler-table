# Marler Table

Assessment for Marler Integrity 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)

## Introduction

This project is a dynamic React-based web app featuring a sortable and searchable table. It's designed responsively across various screen sizes. The code is written in modern JavaScript and Typescript, using React hooks to keep things organized and running smoothly.

## Features

1. Dynamic Table Display
2. Custom Filtering Hook `useFilterData`
3. Custom Sorting Hook `useSortData`
4. Error Handling
5. State Management using 'useState' and 'useEffect'
6. Reusable Components
7. Responsive Design

## Installation

1. Clone the repository:

`git clone https://github.com/anpospisil/marler-table.git`  
`cd main`

2. Install dependencies:

`npm install`

3. Start the development server:

`npm start`

## Technologies Used

- React
- Hooks (useState, useEffect)
- TypeScript
- JavaScript (ES6+)
- HTML/CSS
- JSON
- Responsive Design

## Folder Structure

marler-table/  
|-- src/  
|   |-- Components/  
        |-- Table  
        |-- TableRow  
|   |-- hooks/  
        useFilterData.js  
        useSortData.js  
|   index.css  
|-- README.md  