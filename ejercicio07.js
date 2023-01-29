let nums=[14,1,2,7]
let i=0
let sum=0
for(let i=0;i<nums.length;i++){
    if(nums[i]==i){
        sum=sum+nums[i]
    }
}
console.log(sum)