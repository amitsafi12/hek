// WAP to print even number between 1 to 100 using function and for loop
function fun()
{
    let c=0;
        for (var i=1;i<=100;i++)
    {
        if (i%2==0)
        {
            console.log("even number are="+i);
            c=c+1;} }
    console.log("total number of even number between 1 to 100 is ="+c);
}
fun();