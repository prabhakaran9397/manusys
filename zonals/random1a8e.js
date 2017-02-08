$(document).ready(function(){
$('#slide-out').css('opacity','0');
if(window.location.hash.substr(1)!='')
{

var flying=window.location.hash.substr(1);
flying=decodeURIComponent(flying);
if(flying=='flying wing')
{


$('html,body').animate({
        scrollTop: $("#features").offset().top},
        'slow');
$('#myModal99').css('display','block');
$('.modal-backdrop').css('display','block');


}
}
$('#sp_close').on('click',function()
{

$('#myModal99').css('display','none');
$('.modal-backdrop').css('display','none');
});
var title=[];
var desc=[];
var titl="";
var title_arr=[];
var k=0;
var max_size=0;
var tech_id=0;
var start="";
var centre=$('#centre').val();
if((centre=='BHUVANESHVAR')||(centre=='VADODARA')||(centre=='GWALIOR')||(centre=='BANDA')||(centre=='AGRA')||(centre=='PUNE')||(centre=="TRIVANDRUM"))
{
$('#fuck_all').css('display','none');
}
/* From here*/
$.ajax({                                      
      url: 'get_name.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data3)
{
if((data3!='false') && (data3!='false1'))
{
$('#just_check').html(data3);


var name="",email="",college="",phone="",techid="";
$.ajax({                                      
      url: 'profile_user.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if((data2!='false'))
{
$.each(data2, function(index, element2) {

name=element2.name;

email=element2.email;
phone=element2.phone;//fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
college=element2.college;
techid=element2.techid;
$('#person1').val(techid);
$('#tbody0').append("<tr><td>Name</td><td>"+name+"</td></tr>");
$('#tbody0').append("<tr><td>Email</td><td>"+email+"</td></tr>");
$('#tbody0').append("<tr><td>Phone</td><td>"+phone+"</td></tr>");
$('#tbody0').append("<tr><td>College</td><td>"+college+"</td></tr>");
$('#tbody0').append("<tr><td>TechId</td><td>"+techid+"</td></tr>");

});
}
}
});


var competition="",members="";
$.ajax({                                      
      url: 'profile.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody').append("<tr><td>Competition</td><td>Members</td></tr>");
$.each(data2, function(index, element2) {
console.log(element2.competition);
competition=element2.competition;
members=element2.names;
var cell1='<td>'+competition+'</td>';
var cell2='<td>'+members+'</td>';
var final='<tr>'+cell1+cell2+'</tr>'

 $('#tbody').append(final);



});
}
}
});//////for new profile

var workshop="",centre="",pay=0;
$.ajax({                                      
      url: 'profile_workshop.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{


 $('#tbody1').append("<tr><td>Workshop</td><td>Centre</td></tr>");
$.each(data2, function(index, element2) {

workshop=element2.workshop;
centre=element2.centre;
pay=element2.pay;

var cell1='<td>'+workshop+'</td>';
var cell2='<td>'+centre+'</td>';
if((centre=='CHENNAI')||(centre=='AGRA')||(centre=='PUNE')||(centre=='TRIVANDRUM'))
{
var final='<tr>'+cell1+cell2+'</tr>';
}
else if(pay==1)
{
var cell3='<td><div class="butts">Paid</div></td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>';
}

else
{
var cell3='<td><div class="butts pay_work" data-centre='+centre+' data-work='+workshop+'>Pay</div></td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>';
}


 $('#tbody1').append(final);



});
}
}
});//////for new profile

var members="",centre="";event="";
$.ajax({                                      
      url: 'profile_zonals.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody2').append("<tr><td>EVENT</td><td>Centre</td><td>Members</td></tr>");
$.each(data2, function(index, element2) {

competition=element2.competition;
centre=element2.centre;
names=element2.names;
var cell1='<td>'+competition+'</td>';
var cell2='<td>'+centre+'</td>';
var cell3='<td>'+names+'</td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>'

 $('#tbody2').append(final);



});
}
}
});//


}
else if(data3=='false1')
{
location.reload(true);
}
else
{
$('#abcd').removeClass('dropdown');

$('#logout2').removeClass('just_ad');
$('#logout2').addClass('just_is');

}

}

});//till here

var modal = document.getElementById('myModal');//login
var modal1=document.getElementById('myModal1');//signup
var modal2=document.getElementById('myModal2');//forgot
var modal3=document.getElementById('myModal3');//zonal_register
var modal4=document.getElementById('myModal4');//check_mail
var modal5=document.getElementById('myModal5');//profile
var modal6=document.getElementById('myModal6');//Change Password
var modal7=document.getElementById('myModal7');//Resend Email
var btn = document.getElementById("myBtn");
var signup=document.getElementById("signup_login");
var signup_login_btn=document.getElementById("signup_login_button");
var resend=document.getElementById("resend");
var forgot=document.getElementById("forgot_login");
var change_pass=document.getElementById("change_pass");
var just_profile=document.getElementById("just_profile");

// Get the <span> element that closes the modal

var span = document.getElementById("close0");
var span1 = document.getElementById("close1");var span2 = document.getElementById("close2");var span3 = document.getElementById("close3");var span4 = document.getElementById("close4");var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6")
var span7 = document.getElementById("close7")
$('#abcd').on('click',function()
{

var str=$(this).hasClass('dropdown');

if(str == false)

{
$('.modal').css('display','none');
modal.style.display = 'block';
$('#abcd').attr('data', '1');

}

});
// When the user clicks on the button, open the modal 
btn.onclick = function() {
$('.modal').css('display','none');
$.ajax({                                      
      url: 'check.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{

    modal3.style.display = "block";
}

else
{
    modal.style.display = "block";
}
}

});
 

}

$('.common_reg').on('click',function()
{
$('.modal').css('display','none');
$.ajax({                                      
      url: 'check.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{

    modal3.style.display = "block";
}

else
{
    modal.style.display = "block";
}
}

});
 

});
signup.onclick = function() {
    modal1.style.display = "block";
    modal.style.display = "none";
}
signup_login_btn.onclick = function() {
    modal.style.display = "block";
    modal1.style.display = "none";
}


forgot.onclick = function() {
    modal2.style.display = "block";
    modal.style.display = "none";
}
resend.onclick = function() {
    modal7.style.display = "block";
    modal.style.display = "none";
}
just_profile.onclick = function() {
    modal5.style.display = "block";

}
change_pass.onclick = function() {
    modal6.style.display = "block";
    modal5.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";



}

span1.onclick = function() {
    modal1.style.display = "none";



}
span2.onclick = function() {
    modal2.style.display = "none";



}
span3.onclick = function() {
    modal3.style.display = "none";



}
span4.onclick = function() {
    modal4.style.display = "none";



}
span5.onclick = function() {
    modal5.style.display = "none";



}
span6.onclick = function() {
    modal6.style.display = "none";



}
span7.onclick = function() {
    modal7.style.display = "none";



}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



$('#logout,#logout2').on('click',function()
{
$.ajax({                                      
      url: 'logout.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data)
      {

}

});
location.reload(true)
});



$('#submit').on('click',function()
{
var username=$('#user').val();
var password=$('#pwd').val();

var dataString="username="+username+"&pass="+password+"&gender=male";
console.log(dataString);
$.ajax({                                      
      url: 'login.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{

var name="",email="",college="",phone="",techid="";
$.ajax({                                      
      url: 'profile_user.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if((data2!='false'))
{
$.each(data2, function(index, element2) {

name=element2.name;
email=element2.email;
phone=element2.phone;//fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
college=element2.college;
techid=element2.techid;
$('#person1').val(techid);
$('#tbody0').append("<tr><td>Name</td><td>"+name+"</td></tr>");
$('#tbody0').append("<tr><td>Email</td><td>"+email+"</td></tr>");
$('#tbody0').append("<tr><td>Phone</td><td>"+phone+"</td></tr>");
$('#tbody0').append("<tr><td>College</td><td>"+college+"</td></tr>");
$('#tbody0').append("<tr><td>TechId</td><td>"+techid+"</td></tr>");

});
}
}
});


var competition="",members="";
$.ajax({                                      
      url: 'profile.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody').append("<tr><td>Competition</td><td>Members</td></tr>");
$.each(data2, function(index, element2) {
console.log(element2.competition);
competition=element2.competition;
members=element2.names;
var cell1='<td>'+competition+'</td>';
var cell2='<td>'+members+'</td>';
var final='<tr>'+cell1+cell2+'</tr>'

 $('#tbody').append(final);



});
}
}
});//////for new profile

var workshop="",centre="",pay=0;
$.ajax({                                      
      url: 'profile_workshop.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody1').append("<tr><td>Workshop</td><td>Centre</td></tr>");
$.each(data2, function(index, element2) {

workshop=element2.workshop;
centre=element2.centre;
pay=element2.pay;

var cell1='<td>'+workshop+'</td>';
var cell2='<td>'+centre+'</td>';
if((centre=='CHENNAI')||(centre=='AGRA')||(centre=='PUNE')||(centre=='TRIVANDRUM'))
{
var final='<tr>'+cell1+cell2+'</tr>';
}
else if(pay==1)
{
var cell3='<td><div class="butts" >Paid</div></td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>';
}
else
{
var cell3='<td><div class="butts pay_work" data-centre='+centre+' data-work='+workshop+'>Pay</div></td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>';
}


 $('#tbody1').append(final);



});
}
}
});//////for new profile

var members="",centre="";event="";
$.ajax({                                      
      url: 'profile_zonals.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
console.log(data2);
 $('#tbody2').append("<tr><td>EVENT</td><td>Centre</td><td>Members</td></tr>");
$.each(data2, function(index, element2) {

competition=element2.competition;
centre=element2.centre;
names=element2.names;
var cell1='<td>'+competition+'</td>';
var cell2='<td>'+centre+'</td>';
var cell3='<td>'+names+'</td>';
var final='<tr>'+cell1+cell2+cell3+'</tr>'

 $('#tbody2').append(final);



});
}
}
});//


$('#abcd').addClass('dropdown');
$('#logout2').removeClass('just_is');
$('#logout2').addClass('just_ad');

$('#just_check').html(data2);
$('#just_check1').html(data2);
modal.style.display='none';

if($('#abcd').attr('data')=='1')
{
$('#abcd').attr('data')='0';


}
else
{
modal3.style.display='block';}
}
else
{
$('#error').html('INVALID credentials or mail not confirmed');
}
}

});
})


$('#tbody1').on('click','.pay_work',function()
{
var centre=$(this).attr('data-centre');
var workshop=$(this).attr('data-work');
$.ajax({                                      
      url: 'profile_user.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
if(data2!='false')
{
$.each(data2, function(index, element2) {

name=element2.name;
email=element2.email;
phone=element2.phone;//fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
college=element2.college;
techid=element2.techid;
if(workshop=='flying_wing')
{
window.location='https://www.townscript.com/e/workshops1-224324/booking?Workshop2=1&name='+name+'&emailid='+email+'&cq1='+techid+'&cq2='+workshop+'&cq3='+centre;
}
else if(centre=='VADODARA')
{
window.location='https://www.townscript.com/e/workshopvadodara-232413/booking?Vadodara=1&name='+name+'&emailid='+email+'&cq1='+techid+'&cq2='+workshop+'&cq3='+centre;

}
else
{


window.location='https://www.townscript.com/e/workshop2-242140/booking?WORKSHOP=1&name='+name+'&emailid='+email+'&cq1='+techid+'&cq2='+workshop+'&cq3='+centre;

}

});



}
}

});





});



$('#compie').on('click','#com_register',function()
{
var team=$('#team').val();
var k=0,str="";
$( ".fixed_comp" ).each(function(index,element) {
if(k==0)
{
str=str+$(this).val();
}
else
{str=str+","+$(this).val();}
k=k+1;

});
var dataString="team="+team+"&members="+str+"&competition="+competition;
console.log(dataString);
$.ajax({                                      
      url: 'reg_comp.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
modal3.style.display='none';
}
else
{
$('#error3').html(data2);
}
}

});
});
$('#username').change(function()
{
var username=$('#username').val();
var dataString="username="+username;
$.ajax({                                      
      url: 'username.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
$('#error11').html(data2);
}

});




});

$('#compie').on('change','.fixed_comp',function()
{
var id=$(this).val();
var attr=$(this).attr('data');


$.ajax({                                      
      url: 'available.php',   
      type: 'POST',              
      data:  "id="+id,                 
      dataType: 'json',    
      success: function(data2)
{
$('#error3'+attr).html(data2);
}

});




});
$('#profile').on('click',function()
{
var competition="",members="",centre="";
$.ajax({                                      
      url: 'profile.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
$('#list_comp').append("<span>Your competitions</span>");
if(data2!='false')
{
$.each(data2, function(index, element2) {
console.log(element2.competition);
competition=element2.competition;
members=element2.members;
$('#list_comp').append("<span>"+competition+"</span><span>"+members+"</span>");


});
}
}
});
$.ajax({                                      
      url: 'profile_zonals.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
$('#list_comp').append("<span>Registered Events</span>");
if(data2!='false')
{
$.each(data2, function(index, element2) {
console.log(element2.competition);
competition=element2.competition;
members=element2.members;
centre=element2.centre;
$('#list_comp').append("<span>"+competition+"</span><span>"+members+"</span><span>"+centre+"</span>");


});
}
}
})
var workshop="";
$.ajax({                                      
      url: 'profile_workshop.php',   
      type: 'POST',              
      dataType: 'json',    
      success: function(data2)
{
$('#list_comp').append("<span>Registered Workshops</span>");
if(data2!='false')
{
$.each(data2, function(index, element2) {
console.log(element2.workshop);
workshop=element2.workshop;

centre=element2.centre;
$('#list_comp').append("<span>"+workshop+"</span><<span>"+centre+"</span>");


});
}
}
})


});


$('#forgot').on('click',function()
{
var email=$('#forgot_email').val();
var username=$('#forgot_username').val()
var dataString="email="+email+"&username="+username;
$.ajax({                                      
      url: 'forgot.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
modal2.style.display='none';
modal4.style.display='block';
}

else
{
$('#error2').html(data2);
}
}

});
});
$('#changes').on('click',function()
{
var old_pass=$('#old_pass').val();
var new_pass=$('#new_pass').val()
var dataString="old_pass="+old_pass+"&new_pass="+new_pass;
$.ajax({                                      
      url: 'change_pass.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
modal6.style.display='none';

}

else
{
$('#error6').html(data2);
}
}

});
});




$('#signup').on('click',function()
{
var name=$('#names').val();
var username=$('#username').val();
var email=$('#email').val();
var gender=$("input[name=gender").val();
var facebook=$('#facebook').val();
var phone=$('#contact').val();
var pass=$('#password').val();
var college=$('#college').val();

var dataString="college="+college+"&email="+email+"&facebook="+facebook+"&gender="+gender+"&name="+name+"&pass="+pass+"&phone="+phone+"&username="+username;
$.ajax({                                      
      url: 'signup.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
modal4.style.display='block';
modal1.style.display='none';
}

else
{
$('#error1').html(data2);
}
}

});
});
$('#resend_submit').on('click',function()
{
var email=$('#resend_email').val();

var dataString="email="+email;
$.ajax({                                      
      url: 'resend_email.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
modal7.style.display='none';
modal4.style.display='block';
}

else
{
$('#error7').html(data2);
}
}

});
});
$('#centre').change(function()
{$('#event').empty();

$('#fuck_all').css('display','block');
var types=$("input[name=types]:checked").val();
var k=0;
var centre=$('#centre').val();
if((centre=='BHUVANESHVAR')||(centre=='VADODARA')||(centre=='GWALIOR')||(centre=='BANDA')||(centre=='AGRA')||(centre=='PUNE')||(centre=="TRIVANDRUM"))
{
$('#fuck_all').css('display','none');
$("#types2").prop("checked", true)

$('#workie').css('display','block');
$('#compie').css('display','none');
}
var dataString='types='+types+'&centre='+centre;
console.log(dataString);
 $.ajax({                                      
      url: 'getit.php',   
      type: 'POST',              
      data: dataString,                    
      dataType: 'json',    
      success: function(data)
      {

 
                $.each(data, function(index, element) {
if(k==0)
{
$('#event').append("<option selected value='" + element.name + "'>"+element.name+"</option>");
}
else
{
$('#event').append("<option value='" + element.name + "'>"+element.name+"</option>");
}
k=k+1;




});
}
});



$('#person_toadd').empty();
var i=0;
var event=$('#event').val();

var event="";
if((centre=='AHMEDABAD')||(centre=='MATHURA')||(centre=='JAIPUR')||(centre=='KOLKATA')||(centre=='LUCKNOW')||(centre=='CHENNAI')||(centre=='BHOPAL')||(centre=='NOIDA'))
{
event='soccon';
}
if((centre=='BHUVANESHVAR')||(centre=='VADODARA')||(centre=='GWALIOR')||(centre=='BANDA')||(centre=='AGRA')||(centre=='PUNE')||(centre=="TRIVANDRUM"))
{
event='';
}

console.log(event);
var max_size=1;
if(event=='soccon')
{
max_size=5;
}
if(event=='iarc')
{
max_size=5;
}
if(event=='rule the sky')
{
max_size=5;
}
if(event=='manoeuvre')
{
max_size=5;
}
for(i=1;i<=max_size;i++)
{

if(i==1)
{
$.ajax({                                      
      url: 'check.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data3)
{
if(data3!='false')
{

$('#person1').val(data3);
}
}

});



}
else
{
$('#person_toadd').append(" <div class='group'><input  data='"+i+"' class='inputMaterial fixed_comp' required type='text' name='name' id='person"+i+"'><span class='highlight'></span><span class='bar'></span><label>Person"+i+"<span>*</span></label><span class='error'  id='error3"+i+"'></span></div>");

}
}//for





















});

$('#event').change(function()
{

var types=$("input[name=types]:checked").val();
if(types=='event')
{

$('#person_toadd').empty();
var i=0;
var event=$('#event').val();
var max_size=1;
if(event=='soccon')
{
max_size=5;
}
if(event=='iarc')
{
max_size=5;
}
if(event=='rule the sky')
{
max_size=5;
}if(event=='manoeuvre')
{
max_size=5;
}

for(i=1;i<=max_size;i++)
{

if(i==1)
{
$.ajax({                                      
      url: 'check.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data3)
{
if(data3!='false')
{

$('#person1').val(data3);
}
}

});



}
else
{
$('#person_toadd').append(" <div class='group'><input  data='"+i+"' class='inputMaterial fixed_comp' required type='text' name='name' id='person"+i+"'><span class='highlight'></span><span class='bar'></span><label>Person"+i+"<span>*</span></label><span class='error'  id='error3"+i+"'></span></div>");

}
}//for












}




});

$('input[name=types]').change(function()
{$('#event').empty();


var types=$("input[name=types]:checked").val();
if(types=='event')
{
console.log("event");
$('#workie').css('display','none');
$('#compie').css('display','block');

}
if(types=='workshop')
{console.log("workshop");
$('#workie').css('display','block');
$('#compie').css('display','none');

}
var centre=$('#centre').val();
var dataString='types='+types+'&centre='+centre;
console.log(dataString);
 $.ajax({                                      
      url: 'getit.php',   
      type: 'POST',              
      data: dataString,                    
      dataType: 'json',    
      success: function(data)
      {

 
                $.each(data, function(index, element) {

$('#event').append("<option value='" + element.name + "'>"+element.name+"</option>");




});
}
});

});

$('#work_reg').on('click',function()
{

var types=$("input[name=types]:checked").val();
if(types=='workshop')
{
var centre=$('#centre').val();
var workshop=$('#event').val();
var dataString="centre="+centre+"&workshop="+workshop;

 $.ajax({                                      
      url: 'reg_work.php',   
      type: 'POST',              
      data: dataString,                    
      dataType: 'json',    
      success: function(data)
      {

if(data=='true')

{

$('#what_info').text("Go to your profile to pay");
modal3.style.display='none';
modal4.style.display='block';
setInterval(function() {
location.reload(true);
}, 3000);

}

else
{
$('#error3').html(data);
}

}
});

}

});

$('#compie').on('click','#event_register',function()
{
var centre=$('#centre').val();
var team=$('#team').val();
var competition=$('#event').val();
var k=0,str="";
$( ".fixed_comp" ).each(function(index,element) {
if(($(this).val())!="")
{
if(k==0)
{
str=str+$(this).val();
}
else
{str=str+","+$(this).val();}}
k=k+1;

});
var dataString="team="+team+"&members="+str+"&competition="+competition+"&centre="+centre;
console.log(dataString);
$.ajax({                                      
      url: 'reg_event.php',   
      type: 'POST',              
      data:  dataString,                 
      dataType: 'json',    
      success: function(data2)
{
if(data2=='true')
{
location.reload(true);
}
else
{
$('#error03').html(data2);

}
}

});
});


});




