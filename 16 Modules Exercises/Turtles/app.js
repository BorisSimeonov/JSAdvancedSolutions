let Turtle = require('./turtle');
let WaterTurtle = require('./waterTurtle');
let GalapagosTurtle = require('./galapagusTurtle');
let EvkodianTurtle = require('./evkodianTurtle');
let NinjaTurtle = require('./ninjaTurtle');

result.Turtle = Turtle;
result.WaterTurtle = WaterTurtle;
result.GalapagosTurtle = GalapagosTurtle;
result.EvkodianTurtle = EvkodianTurtle;
result.NinjaTurtle = NinjaTurtle;

/*//For testing:
 let testWaterTurtle = new WaterTurtle("Michelangelo", 18, "male", "Sewer");
 let testGalapagosTurtle = new GalapagosTurtle("Raphael", 18, "male");
 let testEvkodianTurtle = new EvkodianTurtle("Donatello", 18, "male", 100);
 let testNinjaTurtle = new NinjaTurtle("Leonardo", 18, "male", "Blue", "Yamato");

 console.log(testWaterTurtle.toString());
 // Turtle: Michelangelo
 // Aged - 18; Gender - male
 // Currently inhabiting Sewer

 console.log(testGalapagosTurtle.toString());
 // Turtle: Raphael
 // Aged - 18; Gender - male
 // Things, eaten this year:

 console.log(testEvkodianTurtle.toString());
 // Turtle: Donatello
 // Aged - 18; Gender - male
 // Evkodium: 5400

 console.log(testNinjaTurtle.toString());
 // Turtle: Leonardo
 // Aged - 18; Gender - male
 // Leo wears a Blue mask, and is an apprentice with the Yamato.
 */