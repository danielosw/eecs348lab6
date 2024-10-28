
<?php 
$size = $_POST["size"];
echo "<table>";
    for ($i=0; $i < $size; $i++) { 
	echo "<tr>";
	for ($g=0; $g < $size; $g) { 
	    $temp = $g*$i;
	    echo "<td>$temp</td>";
	}
	echo "</tr>";
}
?>

