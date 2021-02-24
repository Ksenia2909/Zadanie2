function SumSquar(arr) {
  let result=0;
  for (let i=0;i<arr.length;i++)
  {
	  result =result + arr[i]*arr[i];
  }
  return result;
}
let array = [1,2,3,4,5];
console.log(SumSquar(array));


 

