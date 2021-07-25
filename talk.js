const input = 'turpentine and turtles'
const vowels = ['a','e','i','o','u']
const resultArray = []

for(let i=0; i<input.length;i++)
{
 // console.log(input[i])
 for(let j=0; j<vowels.length;j++)
 {
   if(input[i]===vowels[j])
   {
     resultArray.push(input[i])
   }
 }
  if(input[i]==='e')
   {
     resultArray.push('e')
   }
    if(input[i]==='u')
   {
     resultArray.push('u')
   }
}
resultArray.join()
console.log(resultArray.join("").toUpperCase())