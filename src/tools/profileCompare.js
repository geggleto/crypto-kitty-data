import axios from 'axios';

let profileKitties = [];
let kittyDna = [];

function compareDna(sire, dame) {
  let match = 0;

  for (let x = 47; x > 7; x = x - 4) {
    let sireNumber = sire[x];
    let dameNumber = dame[x];

    for (let y = 0; y<=15; y++) {
      if ((sireNumber === 1 + (2*y) && dameNumber === 2 + (2*y))
        || dameNumber === 1 + (2*y) && sireNumber === 2 + (2*y)) {
        match++;
      }
    }

  }

  return match;
}

function transformLetterToNumber(letter)
{
  if (letter === '1') return 1; //4x + 3 => match
  if (letter === '2') return 2;

  if (letter === '3') return 3;
  if (letter === '4') return 4;

  if (letter === '5') return 5;
  if (letter === '6') return 6;

  if (letter === '7') return 7;
  if (letter === '8') return 8;

  if (letter === '9') return 9;
  if (letter === 'a') return 10;

  if (letter === 'b') return 11;
  if (letter === 'c') return 12;

  if (letter === 'd') return 13;
  if (letter === 'e') return 14;

  if (letter === 'f') return 15;
  if (letter === 'g') return 16;
  if (letter === 'h') return 17;
  if (letter === 'i') return 18;
  if (letter === 'j') return 19;
  if (letter === 'k') return 20;
  if (letter === 'm') return 21;
  if (letter === 'n') return 22;
  if (letter === 'o') return 23;
  if (letter === 'p') return 24;
  if (letter === 'q') return 25;
  if (letter === 'r') return 26;
  if (letter === 's') return 27;
  if (letter === 't') return 28;
  if (letter === 'u') return 29;
  if (letter === 'v') return 30;
  if (letter === 'w') return 31;
  if (letter === 'x') return 32;

  return letter;
}

function transformDNA(dna) {
  let intDna = [];

  for (let i = 0; i < dna.length; i++) {
    intDna[i] = transformLetterToNumber(dna.charAt(i));
  }

  return intDna;
}

export function calcMatches(dameId, sireId) {
  return axios.post('https://dna.cryptokittydata.info/fetch/dna', {
    kitties : [
      { id : dameId },
      { id : sireId }
    ]
  }).then(response => {
    let dameDna = transformDNA(response.data[dameId].dna);
    let sireDna = transformDNA(response.data[sireId].dna);

    return compareDna(dameDna, sireDna)
  });
};

export function getProfileDna(profile) {
  return axios.get('https://api.cryptokitties.co/kitties/all/'+profile)
    .then(response => {
      for (let i in response.data) {
        profileKitties.push(response.data[i]);
      }
      return profileKitties;
    }).then(() => {
      return getKittyDna();
    }).catch( () => {
      return getKittyDna();
    });
};

export function findMatchesForGeneration(generation, profile) {
  return getProfileDna(profile).then( () => {
    let filtered = [];
    let topMatches = [];

    for (let i in kittyDna) {
      let kitty = kittyDna[i];
      kitty.id = i;
      if (kitty.gen == generation) {
        filtered.push({
          id : i,
          dna: transformDNA(kitty.dna)
        });
      }
    }

    for (let i in filtered)
    {
      let sire = filtered[i];
      let sireMatches = [];

      for (let y in filtered) {
        let dame = filtered[y];

        if (dame.id !== sire.id) {
          sireMatches.push( {
            sire : sire.id,
            dame : dame.id,
            match : compareDna(sire.dna, dame.dna),
            link : "https://www.cryptokitties.co/kitty/"+sire.id+"/breed/"+dame.id,
            calc : "https://kittycalc.co/?k1="+sire.id+"&k2="+dame.id
          })
        }
      }

      //sort matches
      sireMatches.sort(function (a, b) {
        return b.match - a.match ;
      });

      topMatches.push(sireMatches[0]);
      topMatches.push(sireMatches[1]);
    }

    return topMatches.sort(function (a, b) {
      return b.match - a.match ;
    });
  })
};

function getKittyDna() {
  return axios.post('https://dna.cryptokittydata.info/fetch/dna',
    {
      kitties : profileKitties.map(
        kitty => {
          return { id : kitty.id };
        }
      )
    }
  )
    .then(response => {
      kittyDna = response.data;

      return kittyDna;
    }).catch(() => {
      return [];
    })
}