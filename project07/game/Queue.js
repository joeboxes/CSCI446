// Queue.js
function Queue(){
	var length = 0;
	var head = null;
	var tail = null;
// -------------------------------------------------
	this.isEmpty = isEmpty;
	function isEmpty(){
		return length==0;
	}
	this.clear = clear;
	function clear(){
		while(head!=null){
			pop();
		}
	}
	this.getLength = getLength;
	function getLength(){
		return length;
	}
// -------------------------------------------------
	this.push = push;
	function push(o){
		var temp = new LLNode(o);
		if(head==null){
			head = temp;
			tail = temp;
		}else{
			temp.prev = tail;
			tail.next = temp;
			tail = temp;
		}
		++length;
		temp = null;
	}
	this.pop = pop;
	function pop(){
		if(head==null){
			return null;
		}
		var temp = head;
		head = head.next;
		if(head==null){
			tail = null;
		}else{
			head.prev = null;
		}
		var o = temp.obj;
		temp.next = null; temp.prev = null; temp.obj = null; temp = null;
		--length;
		return o;
	}
}



