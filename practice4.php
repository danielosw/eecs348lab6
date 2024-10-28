<style>
table{
border: 2rem;
}
</style>
<?php 
$size = $_POST["size"];
echo "<table>";
    for ($i=1; $i < $size+1; $i++) { 
	echo "<tr>";
	for ($g=1; $g < $size+1; $g++) { 
	    $temp = $g*$i;
	    echo "<td>$temp</td>";
	}
	echo "</tr>";
    }
echo "<table>"
?>

