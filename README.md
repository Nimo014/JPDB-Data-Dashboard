# JPDB-Data-Dashboard

[Documentation Link](http://login2explore.com/jpdb/docs.html)

## "This JsonPowerDB tool used to ease the data navigation, addition, modification and removal of data or records in the database. This will help developers in development as well as debugging their application." 

### There are 4 component :-
- Home Page: That will allow the user / developer to enter his token.
- Table Page: That will display data of selected relation (table) of selected database and allows user / developer to:
    - Easily navigate, add, modify and remove records in relation.
    - Provide data to export in different formats like CSV, Excel, PDF.
    - Allow users to print the table data on the printer.
    - Search option to filter records based on search key.
- Form Page: A data entry form with full navigation control buttons.
- Filter Page (optional): To filter out records in 'Table' by applying conditions.


### Web Page Content and Navigation:-
- Home page contain Side Navigation Menu which is created dynamically according to database and relation via changing token number and Header navigation bar have table (home page), form and filter(optional).
- Datatable content all database's relation field as column and data as row.
- Modification is available in the datatable.
- Data can be added through Form page.




### About JsonPowerDB:

- JsonPowerDB is a Real-time, High Performance, Lightweight and Simple to Use, Rest API based Multi-mode DBMS. JsonPowerDB has ready to use API for Json document DB, RDBMS, Key-value DB, GeoSpatial DB and Time Series DB functionality. JPDB supports and advocates for true serverless and pluggable API development.

### Benefits of using JsonPowerDB

- Simplest way to retrieve data in a JSON format.
- Schema-free, Simple to use, Nimble and In-Memory database.
- It is built on top of one of the fastest and real-time data indexing engine - PowerIndeX.
- It is low level (raw) form of data and is also human readable.
- It helps developers in faster coding, in-turn reduces development cost.

### Screenshots:

- Change Token Number Page
![Index Page](https://github.com/Nimo014/JPDB-Data-Dashboard/blob/main/assets/index.png)

- Home/table Page
![Home Page](https://github.com/Nimo014/JPDB-Data-Dashboard/blob/main/assets/table.png)

- Form page
![Form Page](https://github.com/Nimo014/JPDB-Data-Dashboard/blob/main/assets/Form.png)

- Demo Video
- https://user-images.githubusercontent.com/73212864/185839971-ae39cc2a-4969-4027-8a4c-25d736b36c52.mp4



## Release History

* 0.3.0
    * ADD: add Dynamic Form for selected Database/Relation.
    * ADD: add control and navigation button with features.

* 0.2.1
    * ADD: Create Edit and Delete button column in Datatable.
    * ADD: add editData(), deleteData() method.
* 0.2.0
    * ADD: add Datatable.
    * ADD: provide Data and Column field to datatable for each selected Database/relation.
* 0.1.0
    * The first proper user interface release
    * ADD: Add Dynamic Side Navigation Feature.
* 0.0.1
    * U.I For Dashboard Completed
