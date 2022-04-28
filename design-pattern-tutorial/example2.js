// 假設有某電商，現在提供先訂購500元就送優惠卷100元、訂購200元就送優惠卷50元
// 的活動，若沒有提前訂購就必須在倉庫有貨的狀況下才能買到:

/////////////////////////////
// Chain of Responsibility //
/////////////////////////////
class Node {
  constructor(fn) {
    this.task = fn;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
    return node;
  }

  getNext() {
    return this.next;
  }

  handleRequest(req) {
    let tmpNode = this;
    while (tmpNode && tmpNode.task(req) === "hasNext") {
      tmpNode = tmpNode.getNext();
    }
  }
}

const order500 = (req) => {
  if (req.orderType === 1 && req.isPaid)
    console.log("訂購500元，得到一張100元優惠卷");
  else return "hasNext";
};

const order200 = (req) => {
  if (req.orderType === 2 && req.isPaid)
    console.log("訂購200元，得到一張50元優惠卷");
  else return "hasNext";
};

const orderNormal = (req) => {
  if (req.stock > 0) console.log("有貨，但無任何優惠");
  else console.log("缺貨");
};

const test = () => {
  const order500Node = new Node(order500);
  const order200Node = new Node(order200);
  const orderNormalNode = new Node(orderNormal);

  order500Node.setNext(order200Node).setNext(orderNormalNode);

  const req = { orderType: 1, isPaid: true, stock: 10 };
  order500Node.handleRequest(req);
};

test();

export default Node;
