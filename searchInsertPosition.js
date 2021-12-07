/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var f = 0
    var flag = 0;
    var l = nums.length - 1;
    var m =  Math.floor((f+l)/2);
    
    if(f == l){
        if(target <= nums[m])
            return 0;
        else
            return 1;
    }
    
    while(f < l){
        if(target < nums[m])
            l = m;
        else if(target > nums[m])
            f = m+1;
        else{
            flag = 1;
            return m;
        }
        m =  Math.floor((f+l)/2);
    }

    if(flag == 0){
        if (target > nums[l])
            return l+1;
        else
            return l;
    }
};
