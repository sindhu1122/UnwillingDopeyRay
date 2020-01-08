function add(a,b)
{
  return a+b
}
function sub(a,b)
{
  return a-b
}
function profit(cp,sp)
{
  return sub(sp,cp)
}
x=10
y=20
z=add(x,y)
cp=5000
sp=10000
console.log(sub(x,y))
console.log(z)
console.log(profit(cp,sp))