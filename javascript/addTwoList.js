class Node {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
}

// function listToInteger(list) {
// 	let node = list;
// 	let result = "";
// 	while (node) {
// 		result = node.val + result;
// 		node = node.next;
// 	}
// 	return parseInt(result);
// }

function listToInteger(list) {
	if (!list.next) {
		return list.val;
	}

	let result = list.val.toString();

	return parseInt(listToInteger(list.next) + result);

}

function integerToList(integer) {
	let str = integer.toString();
	let node;
	let next_node = null;;
	for (let i = 0; i < str.length; i++) {
		node = new Node(parseInt(str[i]));
		node.next = next_node;
		next_node = node;
	}
	return node;
}

function addTwoList(l1, l2) {
	let sum = listToInteger(l1) + listToInteger(l2);
	return integerToList(sum);
}

if (require.main === module) {
// add your own tests in here
// console.log("Expecting: { val: 0, next: null }");
// console.log("=>", addTwoNumbers({ val: 0, next: null }, { val: 0, next: null }));
const l1 = new Node(2, new Node(4, new Node(3)));
const l2 = new Node(5, new Node(6, new Node(4)));
console.log(addTwoList(l1, l2));
}

module.exports = {
    Node,
    addTwoList
};

// Please add your pseudocode to this file
// And a written explanation of your solution