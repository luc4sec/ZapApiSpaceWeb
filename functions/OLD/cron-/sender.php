<?php    
    $name = $_POST['name'];
    $number = $_POST['number'];
    $text = $_POST['text'];

    if(isset($_POST['start'])) {
        shell_exec("pm2 start --name $name index.js -- Lucas senha $number $text");
        echo("Lucas senha $number $text $name");
    }
    if(isset($_POST['stop'])) {
        shell_exec("pm2 stop index.js --name $name");
    }
    if(isset($_POST['delete'])) {
        shell_exec("pm2 delete index.js --name $name");
    }
?>
<!-- <script>
    alert("Ação Realizada!");
    window.location.href = "./index.html";
</script> ->