function fib(n){
    if(n==1){
        return 0;
    }
    else if(n==2){
        return 1;
    }
    else{
        num1 = fib(n-2);
        num2 = fib(n-1);
        return num1 + num2;
    }
}
fib(3); // 3 
fib(4); // 5
fib(5); // 7
fib(10); //17