let nums=[12,1,1,1]
let i=0
let sum=0
for(let i=0;i<nums.length;i++){
    if(i>nums[i]){
        sum=sum+nums[i]
    }
}
console.log(sum)