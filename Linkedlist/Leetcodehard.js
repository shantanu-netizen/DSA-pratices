// 24 swap-nodes-in-pairs
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let first = head;
  let sec = head.next;
  let prev = null;

  while (first != null && sec != null) {
    let third = sec.next;

    sec.next = first;
    first.next = third; // Missing line

    if (prev != null) {
      prev.next = sec;
    } else {
      head = sec;
    }

    prev = first;
    first = third;

    if (third != null) {
      sec = third.next;
    } else {
      sec = null;
    }
  }

  return head;
};

// 25 Reverse node in pair
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let first = head;
  let sec = head.next;
  let prev = null;

  while (first != null && sec != null) {
    let third = sec.next;

    sec.next = first;
    first.next = third; // Missing line

    if (prev != null) {
      prev.next = sec;
    } else {
      head = sec;
    }

    prev = first;
    first = third;

    if (third != null) {
      sec = third.next;
    } else {
      sec = null;
    }
  }

  return head;
};