<?php 
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $num01 = filter_input(INPUT_POST, 'num01', FILTER_SANITIZE_NUMBER_FLOAT);
        $num02 = filter_input(INPUT_POST, 'num02', FILTER_SANITIZE_NUMBER_FLOAT);
                
        $error = false;
        if(empty($num01) || empty($num02)){
            echo '<p class="calc-error">Fill every field</p>';
                $error = true;
            }
                    
            if(!$error){
                $value = 0;
                echo '<p class="calc-error"> Wrong happend!</p>';                       
                }  
            } 
?>