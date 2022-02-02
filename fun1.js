// WAP to print even number between 1 to 100 using function and while loop
function fun1()
{
    let c=0;
    let i=1;
        while(i<=100)
        {
         if (i%2==0)
        {
            console.log("even number are="+i);
            c=c+1;}
            i++;}
    console.log("total number of even number between 1 to 100 is ="+c);
}
fun1();