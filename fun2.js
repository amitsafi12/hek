// WAP to print even number between 1 to 100 using function and do loop
function fun2()
{
    let c=0;
    let i=1;
        do
        {
         if (i%2==0)
        {
            console.log("even number are="+i);
            c=c+1;}

            i++;
        }while(i<=100)
    console.log("total number of even number between 1 to 100 is ="+c);
}
fun2();