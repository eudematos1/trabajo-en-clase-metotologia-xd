let nums=[3,5,3,5]
let i=0
let sum=0
for(let i=0;i<nums.length;i++){
    if(nums[i]%3==0){
        sum=sum+nums[i]
    }
}
console.log(sum)