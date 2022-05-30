import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Taking shopping cart contents as input from the user
rl.question('Enter the Shopping Cart Contents: ', (answer) => {
  // spliting the string input into an array
  let ans = answer.split(" ");
  console.log(ans);
 
  //initializing the start, tax, total bill 
  var start = 0;
  var tax = 0;
  var total = 0;
 
  //storing assumptions into respective arrays
  var food = ["chocolate","chocolates"];
  var books = ["book","books"];
  var medicine = ["pills"];

 //iterating through the array 
  for(var i =0;i<ans.length;i++){
    
    if(ans[i]=="at"){
      var quant = Number(ans[start]);
      var price = Number(ans[i+1]);
      var check = 0;
      var str = "";
      console.log("Bill Receipt :")
      //Storing the cart item into a variable str and checking if the item is imported
      for(var j=start;j<i;j++){
        if (j == start){
          str = str + ans[j];
        }else{
          str = str +" " + ans[j];
        }
        if(ans[j]=="imported"){
          check=j;
        }
      }
      //calculating tax and final price for the item if it is imported and printing
      if(check>0){
        var t = parseFloat(String(((quant*price)*5)/100)).toFixed(2);
        tax= tax + Number(t);
        var fprice = (quant*price) + Number(t);
        total = total + fprice;
        console.log(str +": "+fprice);

      }else{
        var check2 = 0 ;
        //checking if the item is book,food or medicine
        for(var x=start;x<i;x++){
          if(books.includes(ans[x])||food.includes(ans[x])||medicine.includes(ans[x])){
            check2++;
          }
        }
        //calculating final price for the item without any tax and printing
        if(check2>0){
          var fprice = quant*price;
          total = total + fprice;
          console.log(str +": "+fprice); 
        }else{
          //calculating tax and final price for the item and printing
          var t = parseFloat(String(((quant*price)*10)/100)).toFixed(2);
          tax= tax + Number(t);
          var fprice = (quant*price) + Number(t);
          total = total + fprice;
          console.log(str +": "+fprice);
        }
      }
      //incrementing the start point for the new item in the cart
      start = i + 2;
      
    }
  }
  // parsing the final tax and final total amount and printing
  var ftax= parseFloat(String(tax)).toFixed(2);
  var ftotal = parseFloat(String(total)).toFixed(2);
  console.log("Tax: "+ ftax);
  console.log("Total: "+ ftotal);
 
  rl.close();
}); 

