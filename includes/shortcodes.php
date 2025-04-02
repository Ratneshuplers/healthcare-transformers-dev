<?php

add_shortcode('CURRENT_YEAR', 'shortcode_current_year_output');
function shortcode_current_year_output() {
	ob_start();
	echo date('Y');
	return ob_get_clean();
}


add_shortcode('mktoForm', 'mktoFormOutput');
function mktoFormOutput($attrs) {
    $attrs = shortcode_atts(['id' => ''], $attrs, 'mktoForm' );
    ob_start();
    if ($attrs['id'] && strlen($attrs['id']) > 0) {
        echo '<form id="mktoForm_'.$attrs['id'].'"></form>';
    }
    return ob_get_clean();
}