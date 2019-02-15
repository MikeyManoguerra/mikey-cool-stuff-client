A live version of this app can be found at
https://matter-source-client.herokuapp.com

Matter-Source is an online collection of real world objects. Users can post an image and description of interesting things they encounter, and post that along with information about where it is located and where it was made. The app provides a feed of the objects,a s well a feature to display the object's origin on the a map.

This App is built with a react-redux client, and a Node back end that utilizies Knex and PostgresQL. 

On the front end, The main page can be found in src/components/list.js, which is is dynamically generated on parameters in list-item.js and expanded-list-item.js

The new submission form is located in src/components/form.js, and inputs are generated in the input.js and image-drop.js files.

The back end as a folder called server, which contains  
the top level express functions in index.js

server/routes contains the different routes endpoints, and there is a folder db-utils which holds individual table insertion helper functions that can be dynamically called as needed.

This project was bootstrapped with [Create React App]

