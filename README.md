#Inverted Index
##Introduction
An application that takes in a __JSON__ array of text objects, creates an 
index from the array, allowing users to search for words contained in the array.
## Key Features
* Supports Upload of JSON file created following the format displayed below:
```

  {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }

```
* Creates an Index for any selected JSON file.
* Searching of a specific JSON file or all indexed JSON files.

## Why the project is useful
(to be updated)
## Technologies
* Node.js
* EchmaScript 6 (JavaScript 2015)
* Angular1x
* Gulp (Task runner)
* Twitter Bootstrap
* karma (to automate testing)
* jasmine (for writing the tests)

## Usage Instructions 
* Clone the repository using `git clone https://github.com/andela-eshaibu/inverted-index.git`
* Install node modules by typing the command `npm install`.
* Navigate to the project repository and run the command `gulp`

## Limitations of the project
Files must have a specific structure for index to be created

## Contributing to the project
* Fork this repository to your account
* Clone your repositry: `git clone https://github.com/andela-eshaibu/inverted-index.git`
* Create your feature branch: `git checkout -b new-feature`
* Commit your changes: `git commit -m "message"`
* Push to the remote branch: `git push origin new-feature`
* Open a pull request.

## Troubleshooting & FAQ
* https://github.com/andela-eshaibu/inverted-index/issues

### License
MIT License

Copyright (c) 2017 Shaibu Emmanuel