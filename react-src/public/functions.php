<?php

/*
 * Define THEME_TEXTDOMAIN Constant
 */
if (!defined('THEME_TEXTDOMAIN')) {
	define('THEME_TEXTDOMAIN', 'healthcareTransformers'); // Theme Name
}

/*
 * Custom Post Types & Taxonomies
 */
require_once 'includes/cpt.php';

/*
 * Template Functions
 */
require_once 'includes/template-functions.php';

/*
 * Data Functions
 */
require_once 'includes/data-functions.php';


/*
 * Template Functions
 */
require_once 'includes/shortcodes.php';


/*
 * Template Functions
 */
require_once 'includes/blocks.php';


/*
 * Debug
 */
function pre_print_pre($data, $exit = false)
{
	echo '<pre>';
	print_r($data);
	echo '</pre>';
	if($exit) {
		exit();
	}
}

add_filter('http_request_args', 'custom_pre_http_request');
function custom_pre_http_request($args) {
    $args['sslverify'] = false;
    $args['reject_unsafe_urls'] = false;
    return $args;
}
