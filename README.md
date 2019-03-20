# Matter Source
#### Object sharing: locations, origins, and more.
 A place to share your quirkiest stuff with other stuff enthusiasts. 


##A live version of this app can be found at
https://matter-source-client.herokuapp.com

##server side app
https://github.com/MikeyManoguerra/mikey-cool-stuff-server


Matter-Source is an online collection of real world objects. Users can post an image and description of interesting things they encounter, and post that along with information about where it is located and where it was made. The app provides a feed of the objects,a s well a feature to display the object's origin on the a map.

##Stack

#### Front End:
React, Redux, Dropzone, Redux-Form, Redux-Router, Enzyme, Cloudinary

####Back End
Node, Express, Morgan, Knex, PostgresQl, Mocha, Chai, Chai-http, Nyc

On the front end, The main page can be found in src/components/list.js, which is is dynamically generated on parameters in list-item.js and expanded-list-item.js

The new submission form is located in src/components/form.js, and inputs are generated in the input.js and image-drop.js files.

The back end has a folder called server, which contains  
the top level express functions in index.js

server/routes contains the different routes endpoints, and there is a folder db-utils which holds individual table insertion helper functions that can be dynamically called as needed.

## Main Page
![main page](https://res.cloudinary.com/dgzjr8afn/image/upload/v1553118048/main-page-matter-source.png)

## Map View
There is also an option to view a large version of the image( not pictured)
![map view](https://res.cloudinary.com/dgzjr8afn/image/upload/v1553118048/map-view-matter-source.png)


##Form
![form](https://res.cloudinary.com/dgzjr8afn/image/upload/v1553118048/form-matter-source.png)



This project was bootstrapped with [Create React App]

