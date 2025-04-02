<?php

/**
 * Post Type: Events.
 */
function registerEventsCpt() {
    $labels = [
        "name" => esc_html__( "Events", THEME_TEXTDOMAIN ),
        "singular_name" => esc_html__( "Event", THEME_TEXTDOMAIN ),
    ];
    $args = [
        "label" => esc_html__( "Events", THEME_TEXTDOMAIN ),
        "labels" => $labels,
        "description" => "",
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "has_archive" => 'healthcare-events',
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => false,
        "can_export" => true,
        "rewrite" => [
            "slug" => "healthcare-event",
            "with_front" => true
        ],
        "query_var" => true,
        "supports" => [ "title", "thumbnail" ],
        "show_in_graphql" => false,
    ];
    register_post_type( "ht-event", $args );
}
add_action( 'init', 'registerEventsCpt' );


/**
 * Post Type: Authors.
 */
function registerAuthorsCpt() {
    $labels = [
        "name" => esc_html__( "Authors", THEME_TEXTDOMAIN ),
        "singular_name" => esc_html__( "Author", THEME_TEXTDOMAIN ),
    ];
    $args = [
        "label" => esc_html__( "Authors", THEME_TEXTDOMAIN ),
        "labels" => $labels,
        "description" => "",
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "has_archive" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => false,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => false,
        "can_export" => true,
        "rewrite" => [
            "slug" => "our-authors",
            "with_front" => true
        ],
        "query_var" => true,
        "supports" => [ "title", "thumbnail" ],
        "show_in_graphql" => false,
    ];

    register_post_type( "ht-author", $args );
}

add_action( 'init', 'registerAuthorsCpt' );

/**
 * Post Type: Training.
 */
function registerTrainingCpt() {
    $labels = [
        "name" => esc_html__( "Trainings", THEME_TEXTDOMAIN ),
        "singular_name" => esc_html__( "Training", THEME_TEXTDOMAIN ),
    ];
    $args = [
        "label" => esc_html__( "Training", THEME_TEXTDOMAIN ),
        "labels" => $labels,
        "description" => "",
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "has_archive" => 'training-series',
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        'show_in_rest' => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => false,
        "can_export" => true,
        "rewrite" => [
            "slug" => "training-series",
            "with_front" => true
        ],
        "query_var" => true,
        "supports" => [ "title", "thumbnail", "editor" ],
        "show_in_graphql" => false,
    ];
    register_post_type( "ht-training", $args );
}
add_action( 'init', 'registerTrainingCpt' );
