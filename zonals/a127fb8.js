$(document).ready(function(){
var name,email,url,id,city,collge,contact="";
 $.ajax({                                      
      url: 'loader.php',   
      type: 'POST',              
      data:  "",                 
      dataType: 'json',    
      success: function(data)
      {
if(data!="false")
{

   $.each(data, function(index, element) {

name=element.name;
email=element.email;
url=element.url;
city=element.city;
college=element.college;
contact=element.contact;
id=element.id;
$('#login_in').remove();
$('#login').removeClass('register');
$('#login').append('<a id="login_in" style="padding-top: 10px;width: 100px;padding-bottom: 0px;" href="/register1/profile.php"><img style="width: 50%;border-radius: 44%;" src="'+url+'"></img></a>');

})
}
else
{

}

}
});
$('#dehradun,#raipur,#bangalore,#allahabad,#hyderabad,#indore,#jabalpur,#bhubhaneshwar,#banda,#mathura,#trivandrum,#agra,#pune,#vadodara,#gwalior,#ahmedabad,#pune,#gwalior,#bhopal,#kolkata,#chennai,#jaipur').css('display','none');
$('a.live').on('click',function(){
$('#bhubhaneshwar,#banda,#mathura,#trivandrum,#agra,#pune,#vadodara,#gwalior,#ahmedabad,#noida,#lucknow,#jaipur,#chennai,#kolkata,#bhopal,.ahmedabad_talks,#bhopal_talks,#jaipur_talks').removeClass('active');
$('#bhubhaneshwar,#vadodara,#gwalior,#banda,#mathura,#trivandrum,#agra,#pune,#ahmedabad,#noida,#lucknow,#jaipur,#chennai,#kolkata,#bhopal,.ahmedabad_talks,.bhopal_talks,.jaipur_talks').css('display','none');
$('.bhubhaneshwar1,.vadodara1,.gwalior1,.mathura1,.ahmedabad1,.banda1,.trivandrum1,.agra1,.pune1,.noida1,.lucknow1,.jaipur1,.chennai1,.kolkata1,.bhopal1,#ahmedabad_talks,#bhopal_talks,#jaipur_talks').removeClass('active');
$('.bhubhaneshwar1,.ahmedabad1,.banda1,.trivandrum1,.mathura1,.agra1,.pune1,.vadodara1,.gwalior1,.noida1,.lucknow1,.jaipur1,.chennai1,.kolkata1,.bhopal1,#ahmedabad_talks,#bhopal_talks,#jaipur_talks').css('display','none');
$('.y').css('display','block');
$('.z').css('display','block');
$('.iotC,.androidC,.flyingC,.ethicalC,.sixthC').css('display','none');
$('.iarc,.man,.sky,.soc').css('display','none');
$('.iarc,.man,.sky,.soc,.iotC,.androidC,.flyingC,.ethicalC,.sixthC').removeClass('active');
$('.iotC1,.androidC1,.flyingC1,.ethicalC1,.sixthC1').css('display','none');
$('.iarc1,.man1,.sky1,.soc1').css('display','none');
 if($(this).attr('data-city') == 'BHUBHANESHWAR')
{
$('#bhubhaneshwar').addClass('active');
$('#bhubhaneshwar').css('display','block');
$('.bhubhaneshwar1').addClass('active');
     $('.bhubhaneshwar1').css('display','block');
$('.androidC').css('display','block');
$('.iotC').css('display','block');

$('.y').css('display','none');
$('.z').css('display','none');

}

 if($(this).attr('data-city') == 'BHUBHANESHWAR')
{
$('#bhubhaneshwar').addClass('active');
$('#bhubhaneshwar').css('display','block');
$('.bhubhaneshwar1').addClass('active');
     $('.bhubhaneshwar1').css('display','block');
$('.androidC').css('display','block');
$('.iotC').css('display','block');

$('.y').css('display','none');
$('.z').css('display','none');

}
 if($(this).attr('data-city') == 'BHUBHANESHWAR')
{
$('#bhubhaneshwar').addClass('active');
$('#bhubhaneshwar').css('display','block');
$('.bhubhaneshwar1').addClass('active');
     $('.bhubhaneshwar1').css('display','block');
$('.androidC').css('display','block');
$('.iotC').css('display','block');

$('.y').css('display','none');
$('.z').css('display','none');

} if($(this).attr('data-city') == 'BANDA')
{
$('#banda').addClass('active');
$('#banda').css('display','block');
$('.banda1').addClass('active');
     $('.banda1').css('display','block');
$('.sixthC').css('display','block');
$('.iotC').css('display','block');

$('.y').css('display','none');
$('.z').css('display','none');

}
if($(this).attr('data-city') == 'MATHURA')
{
$('#mathura').addClass('active');
$('#mathura').css('display','block');
$('.mathura1').addClass('active');
     $('.mathura1').css('display','block');
$('.sixthC').css('display','block');
$('.ethicalC').css('display','block');
$('.flyingC').css('display','block');
$('.y').css('display','none');
$('.z').css('display','none');

}
if($(this).attr('data-city') == 'AGRA')
{
$('#agra').addClass('active');
$('#agra').css('display','block');
$('.agra1').addClass('active');
     $('.agra1').css('display','block');
$('.ethicalC').css('display','block');
$('.iotC').css('display','block');

$('.y').css('display','none');
$('.z').css('display','none');

}
if($(this).attr('data-city') == 'PUNE')
{
$('#pune').addClass('active');
$('#pune').css('display','block');
$('.pune1').addClass('active');
     $('.pune1').css('display','block');
$('.ethicalC').css('display','block');
$('.iotC').css('display','block');

$('.y').css('display','none');
$('.z').css('display','none');

}
if($(this).attr('data-city') == 'TRIVANDRUM')
{
$('#trivandrum').addClass('active');
$('#trivandrum').css('display','block');
$('.trivandrum1').addClass('active');
     $('.trivandrum1').css('display','block');
$('.ethicalC').css('display','block');
$('.iotC').css('display','block');

$('.y').css('display','none');
$('.z').css('display','none');

}
 if($(this).attr('data-city') == 'VADODARA')
{
$('#vadodara').addClass('active');
$('#vadodara').css('display','block');
$('.vadodara1').addClass('active');
     $('.vadodara1').css('display','block');
$('.androidC').css('display','block');
$('.iotC').css('display','block');
$('.ethicalC').css('display','block');
$('.y').css('display','none');
$('.z').css('display','none');

}

 if($(this).attr('data-city') == 'GWALIOR')
{
$('#gwalior').addClass('active');
$('#gwalior').css('display','block');
$('.gwalior1').addClass('active');
     $('.gwalior1').css('display','block');
$('.sixthC').css('display','block');

$('.ethicalC').css('display','block');
$('.y').css('display','none');
$('.z').css('display','none');

}

 if($(this).attr('data-city') == 'AHMEDABAD')
{
$('#ahmedabad').addClass('active');
$('#ahmedabad').css('display','block');
 $('.ahmedabad1').addClass('active');
     $('.ahmedabad1').css('display','block');
$('.iotC,.androidC,.flyingC,.ethicalC,.sixthC').css('display','block');
$('.iarc,.man,.sky,.soc').css('display','block');
$('#ahmedabad_talks').css('display','block');


}
if($(this).attr('data-city') == 'NOIDA')
{
$('#noida').addClass('active');
$('#noida').css('display','block');
 $('.noida1').addClass('active');
     $('.noida1').css('display','block');
$('.iotC,.androidC,.flyingC,.ethicalC,.sixthC').css('display','block');
$('.iarc,.man,.sky,.soc').css('display','block');

$('.z').css('display','none');
}

if($(this).attr('data-city') == 'CHENNAI')
{
$('#chennai').addClass('active');
$('#chennai').css('display','block');
 $('.chennai1').addClass('active');
     $('.chennai1').css('display','block');
$('.iotC,.androidC,.ethicalC,.sixthC').css('display','block');
$('.iarc,.man,.sky,.soc').css('display','block');
$('.z').css('display','none');

}
if($(this).attr('data-city') == 'BHOPAL')
{
$('#bhopal').addClass('active');
$('#bhopal').css('display','block');
 $('.bhopal1').addClass('active');
     $('.bhopal1').css('display','block');
$('.iotC,.androidC,.flyingC,.ethicalC,.sixthC').css('display','block');
$('.iarc,.man,.sky,.soc').css('display','block');
$('#bhopal_talks').css('display','block');

}

if($(this).attr('data-city') == 'LUCKNOW')
{
$('#lucknow').addClass('active');
$('#lucknow').css('display','block');
 $('.lucknow1').addClass('active');
     $('.lucknow1').css('display','block');
$('.iotC,.androidC,.flyingC,.ethicalC,.sixthC').css('display','block');
$('.iarc,.man,.sky,.soc').css('display','block');
$('.z').css('display','none');

}
if($(this).attr('data-city') == 'JAIPUR')
{
$('#jaipur').addClass('active');
$('#jaipur').css('display','block');
 $('.jaipur1').addClass('active');
     $('.jaipur1').css('display','block');
$('.iotC,.androidC,.flyingC,.ethicalC,.sixthC').css('display','block');
$('.iarc,.man,.sky,.soc').css('display','block');

$('#jaipur_talks').css('display','block');

}


if($(this).attr('data-city') == 'KOLKATA')
{
$('#kolkata').addClass('active');
$('#kolkata').css('display','block');
 $('.kolkata1').addClass('active');
     $('.kolkata1').css('display','block');
$('.iotC,.androidC,.flyingC,.ethicalC,.sixthC').css('display','block');
$('.iarc,.man,.sky,.soc').css('display','block');

$('.z').css('display','none');
}



});
$('#ahmedabad,#bhubhaneshwar,#banda,#mathura,#trivandrum,#agra,#pune,#vadodara,#gwalior,#noida,#lucknow,#jaipur,#chennai,#kolkata,#bhopal').on('click',function(e){
  e.preventDefault();
$(this).addClass('active');
$('.iarc,.man,.sky,.soc,.iotC,.androidC,.flyingC,.ethicalC,.sixthC').removeClass('active');
$('.iarc1,.man1,.sky1,.soc1,.iotC1,.androidC1,.flyingC1,.ethicalC1,.sixthC1').css('display','none');
$('.bhubhaneshwar1,.vadodara1,.banda1,.mathura1,.trivandrum1,.agra1,.pune1,.gwalior1,.ahmedabad1,.noida1,.lucknow1,.jaipur1,.chennai1,.kolkata1,.bhopal1,.ahmedabad_talks,#ahmedabad_talks,#bhopal_talks,#jaipur_talks,.bhopal_talks,.jaipur_talks').removeClass('active');
     $('.bhubhaneshwar1,.ahmedabad1,.banda1,.mathura1,.trivandrum1,.agra1,.pune1,.vadodara1,.gwalior1,.noida1,.lucknow1,.jaipur1,.chennai1,.kolkata1,.bhopal1,.ahmedabad_talks,.bhopal_talks,.jaipur_talks').css('display','none');
var id=$(this).attr('id');

$('.'+id+'1').css('display','block');
});
$('.iarc,.man,.sky,.soc,.iotC,.androidC,.flyingC,.ethicalC,.sixthC').on('click',function(e){
  e.preventDefault();
var id=$(this).attr('id');
$('.iarc,.man,.sky,.soc,.iotC,.androidC,.flyingC,.ethicalC,.sixthC').removeClass('active');
$(this).addClass('active');
$('.iarc1,.man1,.sky1,.soc1,.iotC1,.androidC1,.flyingC1,.ethicalC1,.sixthC1').css('display','none');


$('.'+id+'1').css('display','block');
console.log('.'+id+'1');
$('#bhubhaneshwar,#banda,#mathura,#trivandrum,#agra,#pune,#vadodara,#gwalior,#ahmedabad,#noida,#lucknow,#jaipur,#chennai,#kolkata,#bhopal,#ahmedabad_talks,#bhopal_talks,#jaipur_talks').removeClass('active');


$('.bhubhaneshwar1,.ahmedabad1,.banda1,.mathura1,.trivandrum1,.agra1,.pune1,.vadodara1,.gwalior1,.noida1,.lucknow1,.jaipur1,.chennai1,.kolkata1,.bhopal1,.ahmedabad_talks,.bhopal_talks,.jaipur_talks').removeClass('active');
     $('.bhubhaneshwar1,.ahmedabad1,.vadodara1,.banda1,.mathura1,.trivandrum1,.agra1,.pune1,.gwalior1,.noida1,.lucknow1,.jaipur1,.chennai1,.kolkata1,.bhopal1,.ahmedabad_talks,.bhopal_talks,.jaipur_talks').css('display','none');


});

$('#ahmedabad_talks,#bhopal_talks,#jaipur_talks').on('click',function(e){
  e.preventDefault();
var id=$(this).attr('id');
$('.iarc,.man,.sky,.soc,.iotC,.androidC,.flyingC,.ethicalC,.sixthC').removeClass('active');
$(this).addClass('active');
$('.iarc1,.man1,.sky1,.soc1,.iotC1,.androidC1,.flyingC1,.ethicalC1,.sixthC1').css('display','none');


$('.'+id).css('display','block');
console.log('.'+id+'1');
$('#bhubhaneshwar,#ahmedabad,#banda,#mathura,#trivandrum,#agra,#pune,#vadodara,#gwalior,#noida,#lucknow,#jaipur,#chennai,#kolkata,#bhopal').removeClass('active');


$('.bhubhaneshwar1,.vadodara1,.gwalior1,.banda1,.mathura1,.trivandrum1,.agra1,.pune1,.ahmedabad1,.noida1,.lucknow1,.jaipur1,.chennai1,.kolkata1,.bhopal1').removeClass('active');
     $('.bhubhaneshwar1,.vadodara1,.banda1,.trivandrum1,.mathura1,.agra1,.pune1,.gwalior1,.ahmedabad1,.noida1,.lucknow1,.jaipur1,.chennai1,.kolkata1,.bhopal1').css('display','none');


});







$('.iarc-event').on('click',function(e){
$('.iarc-event').removeClass('active');
$(this).addClass('active');
});
$('.rule-event').on('click',function(e){
$('.rule-event').removeClass('active');
$(this).addClass('active');
});$('.man-event').on('click',function(e){
$('.man-event').removeClass('active');
$(this).addClass('active');
});$('.soc-event').on('click',function(e){
$('.soc-event').removeClass('active');
$(this).addClass('active');
});$('.ethical-event').on('click',function(e){
$('.ethical-event').removeClass('active');
$(this).addClass('active');
});$('.iot-event').on('click',function(e){
$('.iot-event').removeClass('active');
$(this).addClass('active');
});$('.android-event').on('click',function(e){
$('.android-event').removeClass('active');
$(this).addClass('active');
});
$('.sixth-event').on('click',function(e){
$('.sixth-event').removeClass('active');
$(this).addClass('active');
});$('.flying-event').on('click',function(e){
$('.flying-event').removeClass('active');
$(this).addClass('active');
});

});
