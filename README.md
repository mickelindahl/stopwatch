Stopwatch
=========
A small library implementing a simple stopwatch 

## Installation

  npm install stopwatch

## Usage
```js
let stopwatch = Stopwatch();
stopwatch.start();

setInterval(()=>{

    console.log(stopwatch.stop().toString())
    done();

}, 2200);
```
## Tests

  Lab.cmd

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.1 Initial release
