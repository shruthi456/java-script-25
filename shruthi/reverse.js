var n,rem,rev=0;
n=parseInt(prompt("enter a number"));
console.log("number is" +n+"<br>"+"<br>");
while(n>0)
{
    rem=n%10;
    rev=rev*10+rem;
    n=parseInt(n/10);
}
console.log("reverse is" + rev);