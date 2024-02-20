UI Componets
[x] Table 
[x] Table row

Function
[x] Sorting for 1 column 
[x] Custom sorting hooks
[x] Custom filtering hooks
[x] Filter text search for 1 column 
[x] Error Handling

Styling
[x] Style table
[x] add hover transitions
[x] Style for mobile


In this project, I designed two components: Table and TableRow, demonstrating the effective use of passing props to child components. The dynamic generation of table headers, derived from the keys of the initial object in the 'sample_table_data.json' file, ensures adaptability to changes in the JSON structure.

To tackle the challenge of creating a custom filtering hook, I organized it within a 'hooks' folder for better structural clarity. The useFilterData hook filters the original sample data and then seamlessly passes it to the sorting hook.

The sorting hook is activated by a button that updates the order selection—whether ascending ('asc') or descending ('desc'). It intelligently sorts rows by price, considering the numerical values. To enhance versatility, I incorporated conditional logic for proper sorting based on whether the input values are numbers or strings.

Furthermore, I implemented a useEffect hook in the Table component to guarantee that rows can be sorted after undergoing the filtering process. Lastly, an error message gracefully appears when the filter value fails to return any results.