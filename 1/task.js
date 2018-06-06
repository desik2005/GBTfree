var str1 = process.argv[2]; //входные данные
var n = str1.length;        //длина входных данных
if ((n>=1)&&(n<=10000))
{
    var str2 = "";          //результатирующая переменная
    for (var i=0; i<n; i++)
    {
        if ((str1.charAt(i).toLowerCase() != "р")&&(str1.charAt(i).toLowerCase() != "к")&&(str1.charAt(i).toLowerCase() != "н"))
        {
            str2=str2+str1[i]
        }
    }
    console.log(str2);
}
else {console.log("Error");}