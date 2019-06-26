var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};
var result=0;
var keys=Object.keys(fruit);
for(let i=0;i<keys.length;i++){
	result+=fruit[keys[i]];
}
console.log(result)