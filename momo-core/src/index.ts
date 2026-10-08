type Operator = "MTN" | "ORANGE"
type BaseTx = {
    id: string;
    amount:number;
    operator:Operator;
    createdAt:Date;
}
type Transaction = |(BaseTx & {status : "PENDING"}) | (BaseTx & {status : "SUCCESSFUL"; reference:string; completedAt:Date}) | (BaseTx & {status :"FAILED"; reason:string}) | (BaseTx & {status :"EXPIRED"; expiredAt:Date});
function describe(tx:Transaction): string {
    switch (tx.status) {
        case "PENDING":
            return `waitting for ${tx.operator} confirmation`
            
        case "SUCCESSFUL":
            return `paid  ${tx.amount} cfa with reference : ${tx.reference}`
        case "FAILED":
            return `Failed because of   ${tx.reason}`

        case "EXPIRED":
            return ` expired at   ${tx.expiredAt}`
    
    }
}

const tx : Transaction ={
    id: "001",
    amount:5000,
    operator:"MTN",
    createdAt:new Date(),
    status: "EXPIRED",
    //reference:"jMpt001",
    //completedAt:new Date()
    expiredAt:new Date()




}

const txss: Transaction[] = [
  { id: "a", amount: 5000, operator: "MTN", createdAt: new Date(), status: "SUCCESSFUL", reference: "R1", completedAt: new Date() },
  { id: "b", amount: 3000, operator: "ORANGE", createdAt: new Date(), status: "FAILED", reason: "Timeout" },
  { id: "c", amount: 2500, operator: "ORANGE", createdAt: new Date(), status: "SUCCESSFUL", reference: "R2", completedAt: new Date() },
  { id: "d", amount: 1000, operator: "MTN", createdAt: new Date(), status: "PENDING" },
];



function totalSuccessful(txs: Transaction[]): number{

    let total = 0;
    for ( const tx of txs) {
        if(tx.status === "SUCCESSFUL") {
            total += tx.amount
            console.log(tx.reference);

        };

        
    }
    return total;
}

const sumOfSuccessful = (txs: Transaction []): number => return txs.filter(tx => tx.status === "SUCCESSFUL").reduce((accumulator, currentItem) =>{
        return accumulator += currentItem.amount
    },0)



console.log(sumOfSuccessful(txss)); // expected: 7500


// const broken1: Transaction = {
//   id: "tx_002",
//   amount: 2000,
//   operator: "ORANGE",
//   createdAt: new Date(),
//   status: "FAILED",
//   reason: "Insufficient balance",
//   reference: "OM123", // a failed transaction should NOT have a reference
// };

// const broken2: Transaction = {
//   id: "tx_003",
//   amount: 1000,
//   operator: "MTN",
//   createdAt: new Date(),
//   status: "sucessful", // typo on purpose
// };


// console.log(describe(broken1))
// console.log(describe(broken2))
console.log(describe(tx))