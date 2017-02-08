
<?php
session_start();
include "connect.php";
if(isset($_POST['submit']))
{
                $name=$_POST['name'];
                $ph_no=$_POST['phone_no'];
                $college=$_POST['college'];
                $email_id=$_POST['email_id'];


                $_SESSION['name']=$name;
                $_SESSION['ph_no']=$ph_no;
                $_SESSION['college']=$college;
                $_SESSION['email_id']=$email_id;

                /*whether the email is already is in the db*/

                $q=mysqli_query($con,"select email_id from bmw_workshop")or die(mysqli_error($con));
                while($row =mysqli_fetch_assoc($q))
                {
                        $e_id=$row['email_id'];
                        if($e_id == $email_id)
                        {
                                die(header("location:already_registered.php"));
                        }
                }



                /* validate the email   */
                $to=$email_id;
                $subject='Manusys BMW workshop';
                $rand_value=rand(500000,600000);
                $_SESSION['rand_value']=$rand_value;
                $_SESSION['time']=3;
                $body='Your confirmation code for Manusys registration is '.$rand_value;
                $header='From Manusys team';
//              echo  $rand_value;

                //here vijay  API


 if(mail($to,$subject,$body,$header)!=false)
                {
                        echo "email has been sent to ",$to;
                        echo "<br>If you donot see receive an email see the spam the list";
                }
                else
                {
                        die("there was an error sending this message tr again <a href='index.html'> Registration</a> ");
                }


//the below form is only given when server is able to send the mail to the specified email else redirect to reg_fom.php
        ?>

        <form action="register.php" method='POST'>

                Enter the code :<input name="confirm_code" type="text" >
        <input type="submit" name="confirm" value="confirm`and pay">
        </form>


<?php

}

        elseif(isset($_POST['confirm']) && $_SESSION['time']>0 )
        {
                $time=$_SESSION['time'];
                if($_POST['confirm_code']==$_SESSION['rand_value'])
                {
                                echo "sakthi";
                                header("location:email_validation.php");
                }
                else if($time > 1 )
                {
                        $time=$time-1;
                        $_SESSION['time']=$time;

                        if($time<3 )
                        {
                                echo "You have entered worng confirmation code.<br> still $time attempts left ";
                        }
 if(mail($to,$subject,$body,$header)!=false)
                {
                        echo "email has been sent to ",$to;
                        echo "<br>If you donot see receive an email see the spam the list";
                }
                else
                {
                        die("there was an error sending this message tr again <a href='index.html'> Registration</a> ");
                }


//the below form is only given when server is able to send the mail to the specified email else redirect to reg_fom.php
        ?>

        <form action="register.php" method='POST'>

                Enter the code :<input name="confirm_code" type="text" >
        <input type="submit" name="confirm" value="confirm`and pay">
        </form>


<?php

}

        elseif(isset($_POST['confirm']) && $_SESSION['time']>0 )
        {
                $time=$_SESSION['time'];
                if($_POST['confirm_code']==$_SESSION['rand_value'])
                {
                                echo "sakthi";
                                header("location:email_validation.php");
                }
                else if($time > 1 )
                {
                        $time=$time-1;
                        $_SESSION['time']=$time;

                        if($time<3 )
                        {
                                echo "You have entered worng confirmation code.<br> still $time attempts left ";
                        }
                                                                                                                                



