<?php

session_start();
include "connect.php";
        $name=$_SESSION['name'];
        $ph_no=$_SESSION['ph_no'];
        $college=$_SESSION['college'];
        $email_id=$_SESSION['email_id'];

        /*
        {
                //code for payment gate way starts here
                // if payment is successful
                $to=$email_id;
                $subject='Manusys BMW workshop';
                $body='Manusys BMW workshop registration successful';
                $header='From Manusys team';
                if(mail($to,$subject,$body,$header))
                {
                        echo "email has been sent to",$to;
                }
                else
                {
                        echo "there was an error sending this message";
                }
        }*/

        $q=mysqli_query($con,"select count from bmw_count")or die(mysqli_error("COUNTING ERROR"));
        echo "after";
        while($row =mysqli_fetch_assoc($q))
        {
                $count=$row['count'];
        }
                $count=$count+1;

                //echo "<br> curret bmw_count value ".$count;
                $_SESSION['id']="BMW".$count;
                $bmw_id=$_SESSION['id'];
        echo "working";
        echo $count;
	 mysqli_query($con,"insert into bmw_workshop values ('$name','$email_id','$ph_no','$college',$count,'$bmw_id')" )  or die(mysqli_error($con));
        echo "here";
        mysqli_query($con,"update bmw_count set count= '$count' ")or die(mysqli_error($con));

        header("location:successfully_registered.php");


        ?>






