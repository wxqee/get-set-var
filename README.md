# get-set-var
Getter and setter to variables for Linux like command line.

# Install
## installation with source code
```
$ git clone https://github.com/wxqee/get-set-var.git get-set-var
$ cd get-set-var/
$ npm install ./ -g
```

# Usage

## choose to use a db/database
Set env *GSV_DB_NAME* can help to identify which db is about to use.
```
$ export GSV_DB_NAME=<db-name>
```

## init a database/db
```
$ node init.js
```

## get and set a var
```
$ node index.js <variable-to-get>
$ node index.js <variable-to-set> <value>
```
