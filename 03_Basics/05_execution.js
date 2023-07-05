     /*Understanding EXecution of javascript file*/

     /*Javascript execution context*/

     //there are two excution context

     // 1. Global execution context
     // 2. Function execution context 

     /*Javascript file runs in two phase*/
     // 1. Memory creation phase 
     // 2. execution phase


     let val_1=10
     let val_2=5
     function addnum(num1,num2){
        let total = num1+num2
        return total
     }
     let result1 = addnum(val_1,val_2)
     let result2 = addnum(10,2)

     // 1.Global execution (which is assign in this variable)
     // Now in 2. memory creation phase (collect all varaibles and take place in memory)

     /* val_1 -> undefined */
     /* val_2 -> undefined */
     /* addnum -> defination */
     /* result1 -> undefined */
     /* result2 -> undefined */

     // 3.Execution phase

     /* val_1 -> 10 */
     /* val_2 -> 5 */
     /* addnum -> it is just hold func. defi. (nothing there is no value for execution) */
     /* result1 -> hold func. so new (new varaible environment + execution thread)*/
     // now new memory phase create for result1 val_1 -> undefined , val_2 -> undefined and total -> undefined
    // new execution context for result1
    // val_1->10 , val_2 ->5 and total -> 15
    // return it to golbal context

    // now the new envoronment which is created for result1 is deleted 

    /* result2 -> Similar to result1 */

    /*  Call Stack Working */
    // Global execution fall in call stack
    // it work in lifo base sinerio a function which come in last out it first