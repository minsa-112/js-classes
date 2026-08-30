let check="hi this is my class of nested loop"
let vowel=0;
let cons=0;
for (let teststr of check.toLowerCase()){
    if("aeiou" .includes(teststr))vowel++;
    else if(teststr>='a' && teststr<='z') cons++;
}
console.log("vowels",vowel,"consonant", cons,);

for(let a=0; a<10;a++){
    for(let b=0;b<10;b++){
        console.log(a+b)
    }
}