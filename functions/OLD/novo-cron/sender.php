<?php    
    $name = $_POST['name'];
    $number = $_POST['number'];
    $text = $_POST['text'];

    if(isset($_POST['start'])) {
        $action = 'start';
        //echo("node controler.js Lucas senha $name $number $text $action");
        $saida = shell_exec("bash teste1.sh");
        print_r($saida);
    }
    if(isset($_POST['stop'])) {
        $action = 'stop';
        echo("$name, $number, $text, $action");
        shell_exec("node controler.js Lucas senha $name $number $text $action");
    }
    if(isset($_POST['delete'])) {
        $action = 'delete';
        echo("$name, $number, $text, $action");
        shell_exec("node controler.js Lucas senha $name $number $text $action");
    }
?>
<!-- <script>
    alert("Ação Realizada!");
    window.location.href = "./index.html";
</script> -->