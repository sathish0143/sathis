//Evaluate a postfix expression using stack
console.clear();
function evaluatePostfix(exp)
{
    //create a stack
        let stack=[];
        for(let i=0;i<exp.length;i++)
        {
            let c=exp[i];
            if(! isNaN( parseInt(c) ))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
            else
            {
                let val1 = stack.pop();
                let val2 = stack.pop();
                  
                switch(c)
                {
                    case '+':
                    stack.push(val2+val1);
                    break;
                      
                    case '-':
                    stack.push(val2- val1);
                    break;
                      
                    case '/':
                    stack.push(val2/val1);
                    break;
                      
                    case '*':
                    stack.push(val2*val1);
                    break;
              }
            }
        }
        return stack.pop();  
}
let exp="231*+9-";
console.log("postfix evaluation: "+evaluatePostfix(exp));
 