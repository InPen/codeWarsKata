//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"

//sudo
//capitalize every letter
//duplicate in lower case each letter

function accum(s) {
//.split('')makes every letter in the string have it's own index
  s.split('').map((character, index) => (character.toUpperCase() + character.toLowerCase().repeat(i))).join('-')
}
accum("abcd")
