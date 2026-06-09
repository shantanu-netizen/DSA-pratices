//21 Merge two sorted list 
var mergeTwoLists = function (list1, list2) {
  if (list1 == null || list2 == null) {
    return list1 == null ? list2 : list1;
  }
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
//206 Reverse Linked List
var reverseList = function (head) {
  let res = null;
  while (head != null) {
    let temp = head;
    head = head.next;
    temp.next = res;
    res = temp;
  }
  return res;
};
//876 Middle of LinkedList
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};