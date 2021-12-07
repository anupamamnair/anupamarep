/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var list1 = [];
    var pos, m;
    var flag = 1;
    
    for(var c = 0; c < s.length; c++){
        var p = s[c];
        
        
        if (p === '(' || p === '{' || p === '['){
            list1.push(p);
        }
        else{
            m = list1.pop();
            if (p === ')'){
                if (m !== '('){
                    flag = 0;
                    break;
                }
            }
            if (p === '}'){
                if (m !== '{'){
                    flag = 0;
                    break;
                }
            }
            if (p === ']'){
                if (m !== '['){
                    flag = 0;
                    break;
                }
            }
        }
        
    }
    if(flag === 0){
        return false;
    }
    if (list1.length === 0)
        return true;
    else
        return false;
};
