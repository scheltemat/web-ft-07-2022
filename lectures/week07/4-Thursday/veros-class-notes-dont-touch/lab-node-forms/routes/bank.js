const express = require("express");
const router = express.Router();



let db = {
    checking: 200,
    savings: 1500,
    transactions: [{
        type: 'savings/deposit', 
        amount:245, 
        date: (new Date()).toLocaleString()
    },
    {
        type: 'checking/deposit', 
        amount: 123, 
        date: (new Date()).toLocaleString()
    }
    ]
}

router.get("/banking", (req, res) => {
    res.render("bank");
  });
  
  router.get('/checkingbalance', (req, res) => {
      
    // get checking balance of our acccount

    res.json({checkingbalance: db.checking})
      
  });
  
  router.get('/savingsbalance', (req, res) => {
      
      // get the savings balance of our account
      res.json({savingsbalance: db.savings})
  });
  
  router.post('/deposits', (req, res) => {
      
      // depposit an amountto either saving or cheking

      //get information out of req.body 
      let {amount, transType} = req.body

    //   console.log(req.body);

    
    amount = parseFloat(amount);  // this is a float now instead of a string
    

    if(transType === "checking/deposit"){
        db.checking = db.checking + amount;
    }
    else if(transType === "savings/deposit"){
        db.savings = db.savings + amount;
    }

    //create an object with transaction info and push to beginning of transaction array 

    let transaction = {
        type: transType, 
        amount: amount, 
        date: (new Date()).toLocaleString()
    }
  
    //add this object to beginning of our transaction array 
    
    db.transactions.unshift(transaction)  

    res.json({checking: db.checking, savings: db.savings})
  
  })
  
  
  module.exports = router;