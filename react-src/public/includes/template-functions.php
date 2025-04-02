<?php
/*
 * Disable emoji scripts
 */
function theme_disable_scripts_styles() {
	remove_action('wp_head', 'print_emoji_detection_script',7);
	remove_action('admin_print_scripts', 'print_emoji_detection_script');
	remove_action('wp_print_styles', 'print_emoji_styles');
	remove_action('admin_print_styles', 'print_emoji_styles');
}
add_action( 'init', 'theme_disable_scripts_styles' );

/**
 * Theme setup
 */
function theme_setup() {
	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 */
	add_theme_support('post-thumbnails');
	set_post_thumbnail_size(1920, 1080);

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support('title-tag');

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'script',
			'style',
		)
	);

	// This theme uses wp_nav_menu() in one location.
	/*register_nav_menus( array(
		'header' => __('Header Menu', THEME_TEXTDOMAIN),
	) );*/

	// Add support for responsive embedded content.
	add_theme_support( 'responsive-embeds' );

	/**
	 * Add custom image sizes
	 */
	add_image_size( '1440x616', 1440, 616, true ); // home latest article
	add_image_size( '1440x450', 1440, 450, true ); // article detail header
    add_image_size( '724x407', 724, 407, true ); //  article detail author, home about us
    add_image_size( '472x265', 472, 265, true ); // Author detail main, author list thumb, Event detail author
    add_image_size( '346x194', 346, 194, true ); // article thumb
    add_image_size( '288x162', 288, 162, true ); // article popular, event thumb,
    add_image_size( '182x182', 182, 182, true ); // article free ebbok,
    add_image_size( '821x462', 821, 462, true ); // Training series header,
}
add_action( 'after_setup_theme', 'theme_setup' );

/**
 * Enqueue scripts and styles for front-end.
 *
 */
function theme_scripts_styles() {
	wp_enqueue_style('style', get_stylesheet_uri(), [], wp_get_theme()->get('Version'));
	//wp_enqueue_style('bootstrap','//cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css', [], '4.6.2');
	wp_enqueue_script('bootstrap', '//cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js', ['jquery'], '4.6.2', true);
    wp_enqueue_script( 'jquery');
    $rootReactComponentData = getRootReactComponentData();
    wp_localize_script( 'jquery', 'frontend',
        array(
            'homeUrl' => home_url(),
            'pageJson' => $rootReactComponentData,
        )
    );
    $marketoFormBaseUrl = get_field('marketo_base_url', 'options');
    $marketoFormCode = get_field('marketo_code', 'options');
    if ($marketoFormBaseUrl && $marketoFormCode) {
        wp_localize_script( 'jquery', 'marketoSettings',
            array(
                'baseUrl' => $marketoFormBaseUrl,
                'marketoCode' => $marketoFormCode,
            )
        );
    }
    if (is_single()) {
        wp_enqueue_script('twitterWidget', '//platform.twitter.com/widgets.js', ['jquery'], '1.0', true);
    }
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-blocks-style' );
    wp_dequeue_style( 'classic-theme-styles' );
    //wp_dequeue_script( 'jquery');
    //wp_deregister_script( 'jquery');


}
add_action( 'wp_enqueue_scripts', 'theme_scripts_styles' );


/*function pastEventsPageRedirect() {
    if (is_singular('ht-event')) {
        global $post;
        $event = transformEvent($post);
        if ($event['past']) {
            wp_safe_redirect(get_post_type_archive_link('ht-event'));
            exit;
        }
    }
}
add_action( 'template_redirect', 'pastEventsPageRedirect' );*/

/**
 * Add ACF theme options support
 */
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> 'Theme Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> true,
		'position' 		=> '2',
	));
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Theme General Settings',
        'menu_title'	=> 'General',
        'parent_slug'	=> 'theme-settings',
    ));
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Header Settings',
		'menu_title'	=> 'Header',
		'parent_slug'	=> 'theme-settings',
	));
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Footer Settings',
		'menu_title'	=> 'Footer',
		'parent_slug'	=> 'theme-settings',
	));
}

/*
 * Add upload support
 */
function extraUploadMimes($uploadMimes){
	$uploadMimes['svg']  = 'image/svg+xml';
	$uploadMimes['svgz'] = 'image/svg+xml';

	return $uploadMimes;
}
add_filter('upload_mimes', 'extraUploadMimes');

/**
 *  Changed Admin Logo
 */
function showLogoOnAdminLoginPage() {
	$logoUrl = get_field('header_logo', 'options');
    $logoUrl = $logoUrl ? $logoUrl : get_template_directory_uri() . '/assets/img/big_logo.svg';
	?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo $logoUrl; ?>);
			height:65px;
			width:320px;
			background-size: 320px 65px;
			background-repeat: no-repeat;
			padding-bottom: 30px;
        }
    </style>
	<?php
}
add_action( 'login_enqueue_scripts', 'showLogoOnAdminLoginPage' );

/***
 * Admin logo URL
 */
function adminLogoUrl(){
	return home_url();
}
add_filter( 'login_headerurl', 'adminLogoUrl' );

/*
 * a href from ACF Link
 */
function a_href_from_link($link, $class = '', $echo = false) {
    $linkHtml = '<a href="'.$link['url'].'" target="'.$link['target'].'" class="'.$class.'">'.$link['title'].'</a>';
    if ($echo) {
        echo $linkHtml;
    }
    else {
        return $linkHtml;
    }
}

/**
 * @param $buttons
 * @return mixed
 */
function my_mce_buttons_2( $buttons ) {
    /**
     * Add in a core button that's disabled by default
     */
    $buttons[] = 'superscript';
    $buttons[] = 'subscript';

    return $buttons;
}
add_filter( 'mce_buttons_2', 'my_mce_buttons_2' );


/**
 * Save post views
 */
function savePostVisits() {
    if( is_single() ) {
        global $post;
        $key = 'post_views';
        $views = get_post_meta( $post->ID, $key, true );
        if( $views == '' ) {
            update_post_meta( $post->ID, $key, '1' );
        } else {
            $views_no = intval( $views );
            update_post_meta( $post->ID, $key, ++$views_no );
        }
    }
}
add_action( 'wp_head', 'savePostVisits' );

// delete frontPage transient
function frontPageBlocks_delete_transient() {
    delete_transient( 'frontPageBlocks' );
}
add_action( 'edit_post', 'frontPageBlocks_delete_transient' );


function modifyBodyClasses($classes) {
    unset( $classes[array_search('search-results', $classes)] );
    $classes[] = 'p-fixed scrolldown scrollup';
    return $classes;
}
add_filter('body_class','modifyBodyClasses');

function excerptMoreEnding( $more ) {
    return '...';
}
add_filter('excerpt_more', 'excerptMoreEnding');



/**
 * @return void
 */
function loadMorePosts(){
    $search = $_REQUEST['s'] ?? '';
    $categoryIds = $_REQUEST['category'] ?? null;
    $contentTypes = $_REQUEST['contentType'] ?? null;
    $page = $_REQUEST['page'] ?? 1;
    $perPage = $_REQUEST['perPage'] ?? 8;
    $fromResourcesOnly = (bool)$_REQUEST['resources'];
    $contentTypeArg = [];
    if (strlen($contentTypes) > 0) {
        $contentTypeArg = explode(',', $contentTypes);
    }
    $type = '';
    $categoryIdArg = [];
    if (strlen($categoryIds) > 0) {
        $categoryIdArg = explode(',', $categoryIds);
    }
    if ($fromResourcesOnly) {
        $type = 'resources';
    }
    $categoryIdArg = array_unique($categoryIdArg);
    $data = getPosts(intval($perPage), $type, 'latest', $categoryIdArg, [], [], intval($page), $search, [], $contentTypeArg);
    echo json_encode($data);
    die;
}
add_action('wp_ajax_nopriv_loadMorePosts', 'loadMorePosts');
add_action('wp_ajax_loadMorePosts', 'loadMorePosts');

/**
 * @return void
 */
function loadMorePastEvents(){
    $page = $_REQUEST['page'] ?? 1;
    $perPage = $_REQUEST['perPage'] ?? 4;
    $data = getEvents('past', intval($perPage), intval($page));
    echo json_encode($data);
    die;
}
add_action('wp_ajax_nopriv_loadMorePastEvents', 'loadMorePastEvents');
add_action('wp_ajax_loadMorePastEvents', 'loadMorePastEvents');

/**
 * @return void
 */
function loadMoreTrainings(){
    $page = $_REQUEST['page'] ?? 1;
    $perPage = $_REQUEST['perPage'] ?? 4;
    $data = getTrainings(intval($perPage), [], intval($page));
    echo json_encode($data);
    die;
}
add_action('wp_ajax_nopriv_loadMoreTrainings', 'loadMoreTrainings');
add_action('wp_ajax_loadMoreTrainings', 'loadMoreTrainings');

//add_filter('acf/update_value/name=select_authors', 'fn_update_hidden_author_field', 100, 3);
/*function fn_update_hidden_author_field($value, $post_id, $field) {
    delete_post_meta($post_id, 'hidden_select_authors');
    delete_post_meta($post_id, 'hidden_select_authors');
    if (!empty($value)) {
        $posts = $value;
        $authorsNameList = [];
        if (!is_array($posts)) {
            $posts = array($posts);
        }
        foreach ($posts as $post) {
            $authorsNameList[] = get_the_title($post);
        }
        //update_field('hidden_select_authors', implode(" ",$authorsNameList), $post_id);
        //add_post_meta($post_id, 'hidden_select_authors', implode(" ",$authorsNameList), false);
    }
    return $value;
}*/

/*function fn_update_hidden_author_field_values($post_id, $post_after, $post_before){
    $value = get_field('select_authors', $post_id);
    delete_field('hidden_select_authors', $post_id);
    if (!empty($value)) {
        $posts = $value;
        $authorsNameList = [];
        if (!is_array($posts)) {
            $posts = array($posts);
        }
        foreach ($posts as $post) {
            $authorsNameList[] = get_the_title($post);
        }
        update_field('hidden_select_authors', implode(" ",$authorsNameList), $post_id);
    }
}*/

//add_action( 'post_updated', 'fn_update_hidden_author_field_values', 10, 3 );

// if you don't add 3 as as 4th argument, this will not work as expected
//add_action( 'save_post', 'fn_update_hidden_author_field_values', 10, 3 );

function fn_update_hidden_author_field_values( $post_ID, $post, $update ) {
    $msg = 'Is this un update? ';
    $msg .= $update ? 'Yes.a' : 'No.b';

    $value = get_field('select_authors', $post_ID);
    delete_field('hidden_select_authors', $post_ID);
    if (!empty($value)) {
        $posts = $value;
        $authorsNameList = [];
        if (!is_array($posts)) {
            $posts = array($posts);
        }
        foreach ($posts as $post) {
            $authorsNameList[] = get_the_title($post);
        }
        update_field('hidden_select_authors', implode(" ",$authorsNameList), $post_ID);
    }

    wp_die( implode(" ",$authorsNameList) );
}

add_action('acf/save_post', 'set_coach_email');

function set_coach_email($post_id)
{
    $value = get_field('select_authors', $post_id);
    delete_field('hidden_select_authors', $post_id);
    if (!empty($value)) {
        $posts = $value;
        $authorsNameList = [];
        if (!is_array($posts)) {
            $posts = array($posts);
        }
        foreach ($posts as $post) {
            $authorsNameList[] = get_the_title($post);
        }
        update_field('hidden_select_authors', implode(" ",$authorsNameList), $post_id);
    }
}

function auto_assign_parent_cat($post_ID){
    //var_dump($post_ID);
    $postCategories = wp_get_post_categories($post_ID, [
        'fields' => 'all',
        'exclude' => 1
    ]);
    $categoriesList = [];
    foreach ($postCategories as $postCategory) {
        $categoriesList[] = $postCategory->term_id;
        if($postCategory->parent){
            $categoriesList[] = $postCategory->parent;
        }
    }
    wp_set_post_categories( $post_ID, $categoriesList );

}
//add_action( 'post_updated', 'auto_assign_parent_cat', 100, 3 );
add_action( 'save_post', 'auto_assign_parent_cat', 100 );
add_action( 'new_to_publish', 'auto_assign_parent_cat', 100 );


add_filter( 'rest_pre_echo_response', function( $response, $object, $request ) {
    $post_id = get_the_ID();
    if( 'post' !== get_post_type( $post_id ) ) return $response;
    $postCategories = wp_get_post_categories($post_id, [
        'fields' => 'all',
        'exclude' => 1
    ]);
    $categoriesList = [];
    foreach ($postCategories as $postCategory) {
        $categoriesList[] = $postCategory->term_id;
        if($postCategory->parent){
            $categoriesList[] = $postCategory->parent;
        }
    }
    $response['categories'] = $categoriesList;
    return $response;
}, 10, 3 );

/**
 * @return void
 */
function trainingAttendeesFormSubmitted(){
    $trainingId = $_REQUEST['trainingId'] ?? null;
    $trainingAtendeesCount = get_post_meta( $trainingId, 'training_atendees_count', true );
    if(!$trainingAtendeesCount){
        $trainingAtendeesCount = 0;
    }
    update_post_meta( $trainingId, 'training_atendees_count', $trainingAtendeesCount + 1 );
    echo json_encode(['success' => true]);
    die;
}
add_action('wp_ajax_nopriv_trainingAttendeesFormSubmitted', 'trainingAttendeesFormSubmitted');
add_action('wp_ajax_trainingAttendeesFormSubmitted', 'trainingAttendeesFormSubmitted');




// Add a custom column for "Content Type"
add_filter('manage_posts_columns', 'add_content_type_column');
function add_content_type_column($columns) {
    $columns['content_type'] = __('Content Type', 'text-domain'); // Name of the column
    return $columns;
}


// Populate the custom column with data from the "content_type" ACF field
add_action('manage_posts_custom_column', 'populate_content_type_column_data', 10, 2);
function populate_content_type_column_data($column, $post_id) {
    if ($column === 'content_type') {
        // Fetch the value of the "content_type" ACF field
        $content_type = get_field('content_type', $post_id); // Replace 'content_type' with your actual ACF field key

        // Display the value or a fallback (e.g., a dash) if empty
        echo !empty($content_type) ? esc_html($content_type) : __('—', 'text-domain');
    }
}


// Make the "Content Type" column sortable
add_filter('manage_edit-post_sortable_columns', 'make_content_type_column_sortable');
function make_content_type_column_sortable($columns) {
    $columns['content_type'] = 'content_type';
    return $columns;
}

// Handle sorting by the "content_type" ACF field
add_action('pre_get_posts', 'handle_content_type_column_sorting');
function handle_content_type_column_sorting($query) {
    if (!is_admin() || !$query->is_main_query()) {
        return;
    }

    $orderby = $query->get('orderby');
    if ($orderby === 'content_type') {
        $query->set('meta_key', 'content_type'); // Replace 'content_type' with your actual ACF field key
        $query->set('orderby', 'meta_value');
    }
}




// // 1. Add a custom rewrite rule to prepend 'resource-center' to the default category/post structure:
// add_action('init', function() {
//     // Match URLs like /resource-center/category1/category2/sample-post/
//     add_rewrite_rule('^resource-center/(.+?)/([^/]+)/?$', 'index.php?category_name=$matches[1]&name=$matches[2]', 'top');
// }, 10, 0);

// // 2. Filter the post link to prepend 'resource-center' to the default permalink:
// add_filter('post_link', function($post_link, $post, $leave_name = false, $sample = false) {
//     if ($post->post_type === 'post') {
//         // Prepend 'resource-center' to the existing permalink
//         $post_link = str_replace(home_url('/'), home_url('/resource-center/'), $post_link);
//     }

//     return $post_link;
// }, 10, 4);

// // 3. Flush rewrite rules on plugin/theme activation to ensure the new rule is applied:
// add_action('after_switch_theme', function() {
//     flush_rewrite_rules();
// });
// add_action('activate_plugin', function() {
//     flush_rewrite_rules();
// });




