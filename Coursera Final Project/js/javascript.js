function billingFunction()
{
    if(document.getElementById('same').checked)
    {
        var temp=document.getElementById("shippingName").value;
        document.getElementById("billingName").value=temp;
        var temp1=document.getElementById("shippingZip").value;
        document.getElementById("billingZip").value=temp1;
    }
    else
    {
        document.getElementById("billingName").value=null;
        document.getElementById("billingZip").value=null;
    }
   
}