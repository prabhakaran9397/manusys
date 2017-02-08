$(document).ready(function(){

$.ajax({                                      
      url: 'get_name.php',   
      type: 'POST',
      dataType: 'json',    
      success: function(data2)
{
if((data2!='false') && (data2!='false1'))
{
$(".name_to_appear").text(data2);
//$('#just_check1').html(data2);
}
else
{

}

}
});



});
