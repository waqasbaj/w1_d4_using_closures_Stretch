var wrapLog = function (callback, name)

{

  return function()
  {
    var arg = arguments;

    var output = name + " (";

    for(x=0; x<arguments.length; x++)

    {
        output = output + x + ", ";
    }

      output = output + ") ==>";

      console.log( output, callback.apply(null, arg));

  };

};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24






// function makeAdder(x) {
//   return function(y) {
//     return y+y;
//   };
// }
// var z = makeAdder(3)(4);

// console.log(z);



