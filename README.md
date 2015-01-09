# get-set-var
Getter and setter to variables for Linux like command line.

# Usage

## init a database/db 'test'
```
xiwang@acx-xiwang:get-set-var$ GSV_DB_NAME=test node init.js
/tmp/gsv-test-db.json has been inited for GSV_DB_NAME=>test
```

## get a var 'abc' from db 'test'
```
xiwang@acx-xiwang:get-set-var$ GSV_DB_NAME=test node index.js
xiwang@acx-xiwang:get-set-var$ GSV_DB_NAME=test node index.js abc
```

## set and get a var 'abc' from db 'test'
```
xiwang@acx-xiwang:get-set-var$ GSV_DB_NAME=test node index.js abc 123
xiwang@acx-xiwang:get-set-var$ GSV_DB_NAME=test node index.js abc
123
```
