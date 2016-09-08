/**
 * Created by Mikael Lindahl on 2016-07-19.
 */
'use strict';

const Code = require('code');   // assertion library
const Lab=require('lab');
const Stopwatch = require('../index.js');

let lab = exports.lab = Lab.script();

lab.experiment('bar', ()=>{

    lab.before({}, (done)=>{
        done();
    });

    lab.test('run', (done)=>{
        let stopwatch = Stopwatch();
        stopwatch.start();

        setInterval(()=>{

            console.log(stopwatch.stop().toString())
            done();

        }, 2200);
    });
});