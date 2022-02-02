<?php    
    $name = $_POST['name'];
    $number = $_POST['number'];

    if(isset($_POST['start'])) {
        $r = shell_exec("node cron.js Lucas senha $number $name > logEnvios.log &");
        print_r($r);
	echo("Lucas senha $number $text $name");
    }
?>
<!-- <script>
    alert("Ação Realizada!");
    window.location.href = "./index.html";
</script> -->
