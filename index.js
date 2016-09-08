/**
 * Created by s057wl on 2016-09-08.
 */
'use strict';

const util=require('util');

class Stopwatch {

    constructor(options) {

        options=options || {};

        this._started_at=null;
        this._format=options.format || ' \x1b[1;33m%s+ sec\x1b[0;37m';
        this._time=0;
    }
}

Stopwatch.prototype.start=function(){

    this._started_at = new Date();

    return this
};

Stopwatch.prototype.stop=function(){

    this._time = Math.round((new Date().valueOf() - this._started_at.valueOf())/1000);

    return this
};

Stopwatch.prototype.toString=function(){

   return util.format(this._format, this._time)

};

module.exports = (options)=>{return new Stopwatch(options)};
