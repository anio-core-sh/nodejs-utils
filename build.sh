#!/bin/bash -euf

./node_modules/.bin/anio_core_libgen src/util
./node_modules/.bin/anio_core_libgen src/fs

./node_modules/.bin/anio_core_libgen src
