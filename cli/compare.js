const profileCompare = require('../src/tools/profileCompare');

profileCompare.findMatchesForGeneration(0, '0x38f6e79d624f2629cf83bc3b71768fff8da4a2b8')
.then((matches) => {
  process.stdout.write(JSON.stringify(matches));
});