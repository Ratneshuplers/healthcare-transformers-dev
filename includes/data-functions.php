<?php

function getSingularBreadcrumb($objectId) {
    $postType = get_post_type($objectId);
    $breadcrumb = [
        [
            'url' => home_url(),
            'title' => 'Home',
        ]
    ];
    if ($postType === 'post') {
        $transformedPost = transformPost(get_post($objectId));
        if ($transformedPost['contentType'] === 'Article') {
            $categories = get_the_category($objectId);
            if ($categories && $categories[0]) {
                $categories = array_reverse(get_the_category($objectId));
                if($categories[0]->parent){
                    $parentCat = get_category($categories[0]->parent);
                    if($parentCat && $parentCat->term_id){
                        $breadcrumb[] = [
                            'url' => get_category_link($parentCat->term_id),
                            'title' => html_entity_decode($parentCat->name)
                        ];
                    }
                }
                $breadcrumb[] = [
                    'url' => get_category_link($categories[0]->term_id),
                    'title' => html_entity_decode($categories[0]->name)
                ];
            }
        }
        else {
            $resourceCenter = get_category(1);
            $breadcrumb[] = [
                'url' => get_category_link($resourceCenter->term_id),
                'title' => html_entity_decode($resourceCenter->name)
            ];
        }
    }
    else if ($postType === 'page' && is_page('thank-you')) {
        $newsletterPage = get_page_by_path('newsletter');
        if ($newsletterPage) {
            $breadcrumb[] = [
                'url' => get_permalink($newsletterPage->ID),
                'title' => html_entity_decode($newsletterPage->post_title)
            ];
        }
    }
    else if ($postType === 'ht-event') {
        $breadcrumb[] = [
            'url' => get_post_type_archive_link('ht-event'),
            'title' => 'Events',
        ];
    }
    else if ($postType === 'ht-training') {
        $breadcrumb[] = [
            'url' => get_post_type_archive_link('ht-training'),
            'title' => 'Training',
        ];
    }
    else if ($postType === 'ht-author') {
        $authorFields = get_fields('ht-author_options');
        $pageTitle = $authorFields['page_title'] ?? 'Healthcare Transformers authors';
        $breadcrumb[] = [
            'url' => get_post_type_archive_link('ht-author'),
            'title' => $pageTitle,
        ];
    }
    $breadcrumb[] = [
        'url' => false,
        'title' => html_entity_decode(get_the_title($objectId)),
    ];
    return $breadcrumb;
}

/**
 * @param $categoryId
 *
 * @return array
 */
function getPopularArticlesForNavMenuLinks($categoryId) {
    $popularPosts = getPosts(5, '', '', [$categoryId]);
    $items = [];
    foreach ($popularPosts['posts'] as $post) {
        $items[] = [
            'has_submenu' => false,
            'nav_menu_link' => [
                'url' => $post['url'],
                'title' => $post['title'],
                'target' => ''
            ]
        ];
    }
    return $items;
}

/**
 * @param $author
 *
 * @return array
 */
function transformAuthor($author) {
    $acf = get_fields($author->ID);
    return [
        'id' => $author->ID,
        'title' => html_entity_decode($author->post_title),
        'url' => get_permalink($author->ID),
        'authorDegree' => $acf['author_degree'],
        'authorProfession' => $acf['author_profession'],
        'authorDescription' => $acf['author_description'],
        'images' => [
            '472x265' => get_the_post_thumbnail_url($author->ID, '472x265'),
            '724x407' => get_the_post_thumbnail_url($author->ID, '724x407'),
        ],
    ];
}

/**
 * @param $event
 *
 * @return array
 */
function transformEvent($event) {
    $acf = get_fields($event->ID);
    $authors = [];
    if ($acf['authors'] && is_array($acf['authors'])) {
        foreach ($acf['authors'] as $acfAuthor) {
            if ($acfAuthor['author']) {
                $authors[] = [
                    'role' => $acfAuthor['role'],
                    'wpAuthor' => transformAuthor($acfAuthor['author'])
                ];
            }

        }
    }

    $isEventInPast = false;
    try{
        $eventDateTime = new DateTime($acf['event_date'], new DateTimeZone(wp_timezone_string()));
        $now = new DateTime(date('Y-m-d'), new DateTimeZone(wp_timezone_string()));
        $isEventInPast = $eventDateTime < $now;
    } catch (\Exception $e) {}


    return [
        'id' => $event->ID,
        'title' => get_the_title($event->ID),
        'url' => get_permalink($event->ID),
        'eventDate' => isset($eventDateTime) ? $eventDateTime->format('M j, Y') : '',
        'eventTime' => $acf['event_time'],
        'headline' => $acf['headline'],
        'description' => $acf['description'],
        'duration' => $acf['duration'],
        'registration' => $acf['registration'],
        'authors' => $authors,
        'agenda' => $acf['agenda'] && is_array($acf['agenda']) ? $acf['agenda'] : [],
        'images' => [
            '1440x450' => get_the_post_thumbnail_url($event->ID, '1440x450'),
            '288x162' => get_the_post_thumbnail_url($event->ID, '288x162'),
        ],
        'past' => $isEventInPast
    ];
}

/**
 * @param $event
 *
 * @return array
 */
function transformTraining($training) {

    ob_start();
    the_content($training->ID);
    $content = ob_get_contents();
    ob_end_clean();

    $acf = get_fields($training->ID);
    $authors = [];
    if ($acf['authors'] && is_array($acf['authors'])) {
        foreach ($acf['authors'] as $acfAuthor) {
            if ($acfAuthor['author']) {
                $authors[] = [
                    'role' => $acfAuthor['role'],
                    'wpAuthor' => transformAuthor($acfAuthor['author'])
                ];
            }

        }
    }
    $trainingAtendeesCountData = get_post_meta( $training->ID, 'training_atendees_count', true );
    $trainingAtendeesCount = $trainingAtendeesCountData ? $trainingAtendeesCountData : 0;
    return [
        'id' => $training->ID,
        'title' => get_the_title($training->ID),
        'url' => get_permalink($training->ID),
        'htmlContent' => $content,
        'audio' => $acf['audio'],
        'time' => $acf['time'],
        'access_training_series_link' => $acf['access_training_series_link'],
        'training_atendees_count' => $trainingAtendeesCount,
        'authors' => $authors,
        'images' => [
            '821x462' => get_the_post_thumbnail_url($training->ID, '821x462'),
            '288x162' => get_the_post_thumbnail_url($training->ID, '288x162'),
            '346x194' => get_the_post_thumbnail_url($training->ID, '346x194'),
        ],
        'publishedDate' => get_the_date('j F Y', $training->ID),
    ];
}

/**
 * @param $authors
 *
 * @return array
 */
function transformAuthors($authors) {
    $items = [];
    if ($authors && count($authors) > 0) {
        foreach ($authors as $author) {
            $items[] = transformAuthor($author);
        }
    }
    return $items;
}

/**
 * @param $events
 *
 * @return array
 */
function transformEvents($events) {
    $items = [];
    if ($events && count($events) > 0) {
        foreach ($events as $event) {
            $items[] = transformEvent($event);
        }
    }
    return $items;
}

/**
 * @param $training
 *
 * @return array
 */
function transformTrainings($trainings) {
    $items = [];
    if ($trainings && count($trainings) > 0) {
        foreach ($trainings as $training) {
            $items[] = transformTraining($training);
        }
    }
    return $items;
}


/**
 * @param $post
 *
 * @return array
 */
function transformPost($post) {
    $authors = transformAuthors(get_field('select_authors', $post->ID));
    $postCategories = wp_get_post_categories($post->ID, [
        'fields' => 'all',
        //'parent' => 0,
        'exclude' => 1
    ]);
    $categoryNames = [];
    $primaryCategory = '';
    $categories = [];
    foreach ($postCategories as $postCategory) {
        $categories[] = [
            'id' => $postCategory->term_id,
            'title' => html_entity_decode($postCategory->name),
            'url' => get_term_link($postCategory)
        ];
        $categoryNames[] = html_entity_decode($postCategory->name);
    }
    $primaryCatId = get_post_meta($post->ID, '_yoast_wpseo_primary_category',true);
    if($primaryCatId){
        $primaryCat = get_term($primaryCatId, 'category');
        if(isset($primaryCat->name)){
            $primaryCategory = html_entity_decode($primaryCat->name);
        }
    }
    return [
        'id' => $post->ID,
        'title' => html_entity_decode($post->post_title),
        'url' => get_permalink($post->ID),
        'contentType' => get_field('content_type', $post->ID),
        //'content' => $post->post_content,
        'categoryNames' => $categoryNames,
        'primaryCategory' => $primaryCategory,
        'categories' =>$categories,
        'authors' => $authors,
        'images' => [
            '1440x616' => get_the_post_thumbnail_url($post->ID, '1440x616'),
            '1440x450' => get_the_post_thumbnail_url($post->ID, '1440x450'),
            '346x194' => get_the_post_thumbnail_url($post->ID, '346x194'),
            '288x162' => get_the_post_thumbnail_url($post->ID, '288x162'),
        ],
        'publishedDate' => get_the_date('j F Y', $post->ID),
        'avgReadingTime' => get_field('avg_reading_time', $post->ID)
    ];
}

function transformPosts($posts) {
    $items = [];
    if ($posts && count($posts) > 0) {
        foreach ($posts as $post) {
            $items[] = transformPost($post);
        }
    }
    return $items;
}

/**
 * @return array|false
 */
function getPosts(
    $count,
    $type = '',
    $sort = 'latest',
    $categoriesOr = [],
    $categoriesAnd = [],
    $authors = [],
    $page = 1,
    $search = '',
    $excludeIds = [],
    $argTypes = []
) {
    if ($type === 'article') {
        $types = ['Article'];
    }
    else if ($type === 'resources') {
        $types = ['eBook', 'Video', 'Podcast', 'Webinar', 'Recording', 'White Paper'];
    }
    else {
        $types = ['Article', 'eBook', 'Video', 'Podcast', 'Webinar', 'Recording', 'White Paper'];
    }
    if (count($argTypes) > 0) {
        $types = array_intersect($types, $argTypes);
    }
    $args = [
        //'s' => $search,
        'paged' => $page,
        'posts_per_page' => $count,
        'orderby' => 'date',
        'order' => 'DESC',
        'post_type' => 'post',
        'post_status' => 'publish',
        'meta_query' => [
            'relation'      => 'AND',
            [
                'key'       => 'content_type',
                'value'     => $types,
                'compare'   => 'IN',
            ],
        ],
    ];
    if($search && $search != ''){
        $args['s'] = $search;
    }
    if (count($authors) > 0) {
        $authorsMeta = [
            'relation'      => 'OR',
        ];
        foreach ($authors as $author) {
            $authorsMeta[] = [
                'key' => 'select_authors',
                'value' => '"' . $author . '"',
                'compare' => 'LIKE'
            ];
        }
        $args['meta_query'][] = $authorsMeta;
    }
    if ($sort === 'popular') {
        /*$args['date_query'] = [
            [
                'after' => '-1 year'
            ]
        ];*/
        $args['meta_key'] = 'post_views';
        $args['orderby'] = 'meta_value_num';
    }
    if (count($categoriesOr) > 0) {
        $args['cat'] = implode(',', $categoriesOr);
    }
    if (count($categoriesAnd) > 0) {
        $args['category__and'] = $categoriesAnd;
    }
    if (count($excludeIds) > 0) {
        $args['post__not_in'] = $excludeIds;
    }
    $query = new WP_Query( $args );
    return [
        'foundPosts' => $query->found_posts,
        'posts' => transformPosts($query->posts),
        'lastPage' => $page,
        'perPage' => $count,
    ];
}

/**
 * @return array|false
 */
function getAuthors() {
    $args = [
        'posts_per_page' => -1,
        'orderby' => 'title',
        'order' => 'ASC',
        'post_type' => 'ht-author',
        'post_status' => 'publish',
    ];
    $query = new WP_Query( $args );
    return transformAuthors($query->posts);
}


/**
 * @return array|false
 */
function getEvents($type = 'all', $count = 20, $page = 1) {
    $date_now = date('Y-m-d H:i:s');
    $args = [
        'paged' => $page,
        'posts_per_page' => $count,
        'post_type'      => 'ht-event',
        'post_status'    => 'publish',
        'order'          => 'ASC',
        'orderby'        => 'meta_value',
        'meta_key'       => 'event_date',
        'meta_type'      => 'DATETIME',
    ];
    if ($type === 'upcoming') {
        $args['meta_query'] = [
            [
                'key'           => 'event_date',
                'compare'       => '>=',
                'value'         => $date_now,
                'type'          => 'DATETIME',
            ]
        ];
    }
    if ($type === 'past') {
        $args['order'] = 'DESC';
        $args['meta_query'] = [
            [
                'key'           => 'event_date',
                'compare'       => '<',
                'value'         => $date_now,
                'type'          => 'DATETIME',
            ]
        ];
    }
    $query = new WP_Query( $args );
    return [
        'foundPosts' => $query->found_posts,
        'posts' => transformEvents($query->posts),
        'lastPage' => $page,
        'perPage' => $count,
    ];
}


/**
 * @return array|false
 */
function getTrainings($count = 20, $excludeIds = [], $page = 1) {
    $args = [
        'paged' => $page,
        'posts_per_page' => $count,
        'post_type'      => 'ht-training',
        'post_status'    => 'publish',
        'order'          => 'DESC',
        'orderby'        => 'date'
    ];
    if (count($excludeIds) > 0) {
        $args['post__not_in'] = $excludeIds;
    }
    $query = new WP_Query( $args );
    return [
        'foundPosts' => $query->found_posts,
        'posts' => transformTrainings($query->posts),
        'lastPage' => $page,
        'perPage' => $count,
    ];
}

/**
 * @param $baseCategoryId
 * @param $postsPerCategory
 *
 * @return array[]
 */
function getCategorisedArticles($baseCategoryId = null, $postsPerCategory = 20, $latestPostId = null) {
    $args = [
        'hide_empty' => true,
        'exclude' => 1, // Exclude 'resource-center',
        'parent' => 0
    ];
    if ($baseCategoryId) {
        $args['parent'] = $baseCategoryId;
    }

    $topLevelCategories = get_categories($args);

    if ($baseCategoryId) {
        $allPosts = getPosts($postsPerCategory, '', 'latest', [], [$baseCategoryId]);
    }
    else {
        $allPosts = getPosts($postsPerCategory, '', 'latest', [], [], [], 1, '', [$latestPostId]);
    }
    $list = [
        [
            'id' => $baseCategoryId ? $baseCategoryId : 0,
            'title' => 'All',
            'posts' => $allPosts['posts'],
            'foundPosts' => $allPosts['foundPosts'],
            'lastPage' => $allPosts['lastPage'],
            'perPage' => $allPosts['perPage']
        ]
    ];
    foreach ($topLevelCategories as $topLevelCategory) {
        $catPosts = getPosts($postsPerCategory, '', 'latest', [], [$topLevelCategory->term_id]);
        $list[] = [
            'id' => $topLevelCategory->term_id,
            'title' => html_entity_decode($topLevelCategory->name),
            'posts' => $catPosts['posts'],
            'foundPosts' => $catPosts['foundPosts'],
            'lastPage' => $catPosts['lastPage'],
            'perPage' => $catPosts['perPage']
        ];
    }
    return $list;
}

function getRelatedArticles($transformedPost) {
    $list = [];
    foreach ($transformedPost['categories'] as $category) {
        $catPosts = getPosts(20, '', 'latest', [$category['id']], [], [], 1, '', [$transformedPost['id']]);
        if ($catPosts['foundPosts'] > 0) {
            $list[] = [
                'id' => $category['id'],
                'title' => $category['title'],
                'posts' => $catPosts['posts'],
                'foundPosts' => $catPosts['foundPosts'],
                'lastPage' => $catPosts['lastPage'],
                'perPage' => $catPosts['perPage']
            ];
        }

    }
    $authorIds = [];
    foreach ($transformedPost['authors'] as $author) {
        $authorIds[] = $author['id'];
    }
    if (count($authorIds) > 0) {
        $authorPosts = getPosts(20, '', 'latest', [], [], $authorIds, 1, '', [$transformedPost['id']]);
        if ($authorPosts['foundPosts'] > 0) {
            $list[] = [
                'id' => 0,
                'title' => 'Author',
                'posts' => $authorPosts['posts'],
                'foundPosts' => $authorPosts['foundPosts'],
                'lastPage' => $authorPosts['lastPage'],
                'perPage' => $authorPosts['perPage']
            ];
        }
    }
    return $list;
}

/**
 * @param $count
 *
 * @return array|false
 */
function getPopularArticles($count = 3) {
    $popularArticles = getPosts($count, '', 'popular');
    return $popularArticles['posts'];
}