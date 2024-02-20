# Marler Table

Assessment for Marler Integrity 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Process](#process)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)

## Introduction

This component is a dynamic React-based web app featuring a sortable and searchable table. It's designed responsively across various screen sizes. The code is written in modern JavaScript and Typescript, using React hooks to keep things organized and running smoothly.

## Features

1. Dynamic Table Display
2. Custom Filtering Hook `useFilterData`
3. Custom Sorting Hook `useSortData`
4. Error Handling
5. State Management using 'useState' and 'useEffect'
6. Reusable Components
7. Responsive Design

## Process

This component has one child component TableRow, demonstrating the effective use of passing props. The table headers are generated dynamically derived from the keys of the first object in the 'sample_table_data.json' file. This ensures that the table can adapt to changes in the JSON structure such as adding/removing a key:value pair.

For better structural clarity, I created a 'hooks' folder for custom hooks.

To tackle the challenge of creating a custom filtering hook, this hook filters the original sample data based on user input from a text input field  and then passes it to the sorting hook.

The sorting hook is activated by a button that sorts rows depending on the order selected (ascending 'asc' or descending 'desc'). It sorts rows by price, by comparing the numerical values. To make this hook more versatile, I incorporated conditional logic for proper sorting based on whether the input values are numbers or strings.

Furthermore, I implemented a useEffect hook in the Table component to guarantee that rows can be sorted after undergoing the filtering process. Lastly, an error message gracefully appears when the filter value fails to return any results.

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
&nbsp;&nbsp;&nbsp;&nbsp;|-- src/  
&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- Components/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- Table  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- TableRow  
&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- hooks/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useFilterData.js  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useSortData.js  
&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;index.css  
&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;sample_table_data.json
&nbsp;&nbsp;&nbsp;&nbsp;|-- README.md