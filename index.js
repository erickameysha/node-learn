import {open} from 'fs'
import _ from 'underscore';

// var _ = require('lodash');
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))