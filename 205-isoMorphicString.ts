/* Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. */

// Expl.

type MapType = {
  [key: string] : string
}

const isIsomorphic = (s: string, t: string): boolean => {
  let map: MapType = {};
  let sString: string[] = s.split("");
  let tString: string[] = t.split("");
  for (let i = 0; i < s.length; i++) {

    // if key of object already exists
    if (map[sString[i]]) {

      // if key of map isnt equal to already assigned letter, then string is not isomorphic
      if (map[sString[i]] !== tString[i] ) {
        return false;
      }
      console.log(map);
    } else {

      // if value in mapped string is already in map, then string is not isomorphic either
      for (let value in map) {
        if (map[value] === tString[i]) {
          return false
        }
      }

      // if everything passed, adding new record to dictionary
      map[sString[i]] = tString[i];
      console.log(map)
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("badc", "baba"))
