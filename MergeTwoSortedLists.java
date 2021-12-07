/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode result = new ListNode();
        ListNode result2 = new ListNode();
        result2.next = result;
        ListNode r, s;
        
        
        
        while(list1 != null && list2 != null){
            int x = list1.val;
            int y = list2.val;
            if(x<y){
                r = new ListNode(x);
                result.next = r;
                list1 = list1.next;
                result = result.next;
            }
            else if(x>y){
                r = new ListNode(y);
                result.next = r;
                list2 = list2.next;
                result = result.next;
            }
            else{
                r = new ListNode(y);
                s = new ListNode(x);
                result.next = r;
                result = result.next;
                result.next = s;
                result = result.next;                    
                list1 = list1.next;
                list2 = list2.next;   
            }
        }
        if(list2 != null){
            result.next = list2;
        }
        if(list1 != null){
            result.next = list1;
        }
        return result2.next.next;
    }
}
