/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var n,m,x,i,j, flag = 0;
    var len = nums.length;
    for(i = 0; i<len; i++){
        x = target-nums[i];
        for(j = i+1; j<len; j++){
            if(nums[j] === x){
                flag = 1;
                break;
            }
        }
        if(flag === 1){
            return([i,j]);
        }
    }
    if(flag === 0){
        return[0,0];
    }
};
