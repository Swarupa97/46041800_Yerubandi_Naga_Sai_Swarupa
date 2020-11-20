function bunnyBailMoneyReceipt(bunnyName, bailoutCash) {
    var bunnyTip = 100;
    
    console.log(
      `
      Greetings ${bunnyName.toUpperCase()}, you have been bailed out!
      
        Total: $${bailoutCash}
        Tip: $${bunnyTip}
        ------------
        Grand Total: $${bailoutCash + bunnyTip}
      
      We hope you a pleasant carrot nip-free day!  
      
    `
    );
  
  }
  
  bunnyBailMoneyReceipt('Bunny Burgerkins', 200);
  