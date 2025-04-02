<?php


function getRootReactComponentData() {
    $blocks = getHeader();
    if (is_front_page()) {
        if ( false === ( $homePageBlocks = get_transient( 'frontPageBlocks' ) ) ) {
            $homePageBlocks = getHomePage();
            set_transient( 'frontPageBlocks', $homePageBlocks, 2 * HOUR_IN_SECONDS );
        }
        $blocks = array_merge($blocks, $homePageBlocks);
    }
    else if (is_category()) {
        $blocks = array_merge($blocks, getCategory(get_queried_object()));
    }
    else if (is_post_type_archive('ht-author')) {
        $blocks = array_merge($blocks, getAuthorsArchive());
    }
    else if (is_post_type_archive('ht-event')) {
        $blocks = array_merge($blocks, getEventsArchive());
    }
    else if (is_post_type_archive('ht-training')) {
        $blocks = array_merge($blocks, getTrainingsArchive());
    }
    else if (is_singular('ht-author')) {
        $blocks = array_merge($blocks, getAuthorDetail());
    }
    else if (is_singular('ht-event')) {
        $blocks = array_merge($blocks, getEventDetail());
    }
    else if (is_singular('ht-training')) {
        $blocks = array_merge($blocks, getTrainingDetail());
    }
    else if (is_singular('post')) {
        $blocks = array_merge($blocks, getPostDetail());
    }
    else if (is_page('about-us') || is_page('newsletter')) {
        $blocks = array_merge($blocks, getAboutUsNewsletterPage());
    }
    else if (is_page_template('template-newsletter-thank-you.php')) {
        $blocks = array_merge($blocks, getNewsletterThankYouPage());
    }
    else if (is_page_template('template-thank-you.php')) {
        $blocks = array_merge($blocks, getThankYouPage());
    }
    else if (is_page()) {
        $blocks = array_merge($blocks, getPage());
    }
    else if (is_search()) {
        $blocks = array_merge($blocks, getSearchPage());
    }
    else {
        $blocks = array_merge($blocks, get404());
    }
    $blocks = array_merge($blocks, getFooter());
    return [
        'blocks' => $blocks
    ];
}

function getHeader() {
    $acfOptionData = get_fields('option');
    foreach ($acfOptionData['navbar_menu'] as &$menu) {
        if ($menu['submenu_level_1'] && count($menu['submenu_level_1']) > 0) {
            foreach ($menu['submenu_level_1'] as &$level1Menu) {
                $level1Menu['nav_menu_link'] = [
                    'url' => get_category_link($level1Menu['select_category']->term_id),
                    'title' => html_entity_decode($level1Menu['select_category']->name),
                    'target' => ''
                ];
                if ($level1Menu['menu_level_2_link_types'] === 'PopularArticles') {
                    $level1Menu['submenu_level_2'] = getPopularArticlesForNavMenuLinks($level1Menu['select_category']->term_id);
                }
                else if ($level1Menu['menu_level_2_link_types'] === 'CustomLinks') {
                    foreach ($level1Menu['submenu_level_2'] as &$level2Menu) {
                        $level2Menu['nav_menu_link'] = [
                            'url' => get_category_link($level2Menu['select_sub_category']->term_id),
                            'title' => html_entity_decode($level2Menu['select_sub_category']->name),
                            'target' => ''
                        ];
                        if ($level2Menu['menu_level_3_link_types'] === 'PopularArticles') {
                            $level2Menu['submenu_level_3'] = getPopularArticlesForNavMenuLinks($level2Menu['select_sub_category']->term_id);
                        }
                    }
                }
                $level1MenuRightBorder = false;
                if ($level1Menu['submenu_level_2'] && count($level1Menu['submenu_level_2']) > 0) {
                    foreach ($level1Menu['submenu_level_2'] as &$level2Menu) {
                        if (
                            $level1MenuRightBorder === false
                            && ($level2Menu['has_submenu'] && $level2Menu['submenu_level_3'] && is_array($level2Menu['submenu_level_3']) && count($level2Menu['submenu_level_3']) > 0)
                        )
                        $level1MenuRightBorder = true;
                    }
                }
                $level1Menu['rightBorder'] = $level1MenuRightBorder;
            }
        }
    }
    return  [
        'Header' => [
            'homeUrl' => home_url(),
            'siteTitle' => get_bloginfo('title'),
            'logo' => $acfOptionData['header_logo'],
            'menu' => $acfOptionData['navbar_menu'],
            'smallMenu' => $acfOptionData['right_side_links'],
            'topRightIcons' => $acfOptionData['right_side_icons'],
        ],
    ];
}

function getFooter() {
    $acfOptionData = get_fields('option');
    return  [
        'Footer' => [
            'homeUrl' => home_url(),
            'siteTitle' => get_bloginfo('title'),
            'column1' => [
                'links' => $acfOptionData['fc_links_list']
            ],
            'column2' => [
                'title' => $acfOptionData['sc_title'],
                'links' => $acfOptionData['sc_links_list'],
            ],
            'column3' => [
                'title' => $acfOptionData['tc_title'],
                'links' => $acfOptionData['tc_links_list'],
            ],
            'column4' => [
                'logo' => $acfOptionData['footer_logo'],
            ],
            'bottom' => [
                'social' => $acfOptionData['social_links'],
                'menu' => $acfOptionData['bf_links_list'],
                'show_cookie_preference_link' => $acfOptionData['show_cookie_preference_link'],
                'us_supplemental_privacy_policy' => $acfOptionData['us_supplemental_privacy_policy'],
                'copyright' => do_shortcode($acfOptionData['copyrights']),
                'description' => do_shortcode($acfOptionData['footer_description']),
            ]
        ]
    ];
}

function getHomePage() {
    $latestPosts = getPosts(1, 'article');
    $frontPageId = get_option('page_on_front');
    $homeAboutUsAcf = get_field('about_us', $frontPageId);
    $homeAboutUsAcf['left_block']['imageSrc'] = wp_get_attachment_image_url($homeAboutUsAcf['left_block']['image'], '724x407');
    $popularArticlesAcf = get_field('popular_articles', $frontPageId);
    $latestPostId=$latestPosts['posts'] && count($latestPosts['posts']) > 0 ? $latestPosts['posts'][0]['id'] : null;
    return [
        'Headline' => [
            'acf' => get_field('headline', $frontPageId)
        ],
        'LatestArticle' => $latestPosts['posts'] && count($latestPosts['posts']) > 0 ? $latestPosts['posts'][0] : null,
        'CategorisedArticles' => [
            'orangeBg' => true,
            'filteredArticles' => getCategorisedArticles(null, 20, $latestPostId)
        ],
        'PopularArticles' => [
            'acf' => [
                'sectionTitle' => $popularArticlesAcf && $popularArticlesAcf['section_title'] ? $popularArticlesAcf['section_title'] : ''
            ],
            'posts' => getPopularArticles($popularArticlesAcf && $popularArticlesAcf['number_of_articles_to_show'] ? $popularArticlesAcf['number_of_articles_to_show'] : 3)
        ],
        'HomeNewsletter' => [
            'acf' => get_field('subscribe_to_newsletter', $frontPageId)
        ],
        'HomeAboutUs' => [
            'acf' => $homeAboutUsAcf
        ],
    ];
}

function getCategory($category) {
    $breadcrumb = [
        [
            'url' => home_url(),
            'title' => 'Home',
        ]
    ];
    if ($category->category_parent !== 0) {
        $breadcrumb[] = [
            'url' => get_category_link($category->category_parent),
            'title' => get_cat_name($category->category_parent),
        ];
    }
    $breadcrumb[] = [
        'url' => false,
        'title' => html_entity_decode($category->name),
    ];
    $blocks = [
        'SectionHeading' => [
            'title' => html_entity_decode($category->name),
            'description' => html_entity_decode($category->description),
            'breadcrumb' => $breadcrumb,
        ]
    ];

    if ($category->term_id === 1) { // resource-center
        $blocks = array_merge($blocks, [
            'ResourceCenterArticles' => getResourceCenterBlockContent()
        ]);
    }
    else {
        $queryCategoriesId = $category->term_id;
        if ($category->category_parent !== 0) {
            //$queryCategoriesId = $category->category_parent;
        }
        $blocks = array_merge($blocks, [
            'CategoryArticles' => [
                'heading' => 'Articles',
                'ajaxUrl' => admin_url( 'admin-ajax.php' ),
                'selectedCategoryId' => $category->term_id,
                'categories' => getCategorisedArticles($queryCategoriesId, 8)
            ]
        ]);
    }
    return $blocks;
}

function getResourceCenterBlockContent($postData = null) {
    $args = [
        //'hide_empty' => true,
        'exclude' => 1, // Exclude 'resource-center',
        'parent' => 0
    ];
    $topLevelCategories = get_categories($args);
    $filterCategories = [];
    foreach ($topLevelCategories as $topLevelCategory) {
        $filterCategories[] = [
            'id' => $topLevelCategory->term_id,
            'title' => html_entity_decode($topLevelCategory->name),
        ];
    }
    $items = [
        'filterTitle' => 'Filter resources',
        'filterCategories' => $filterCategories,
        'filterContentTypes' => [
            'eBook',
            'Video',
            'Podcast',
            'Webinar',
            //'Recording',
            'White Paper'
        ],
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'filteredItems' => getPosts(6, 'resources'),
    ];
    if ($postData) {
        $items['singleResourceArticleDetail'] = $postData;
    }
    return $items;
}

function getAuthorsArchive() {
    $authorFields = get_fields('ht-author_options');
    $pageTitle = $authorFields['page_title'] ?? 'Healthcare Transformers authors';
    return [
        'SectionHeading' => [
            'title' => $pageTitle,
            'description' =>  $authorFields['description'] ?? '',
            'breadcrumb' => [
                [
                    'url' => home_url(),
                    'title' => 'Home',
                ],
                [
                    'url' => false,
                    'title' => $pageTitle,
                ]
            ],
            'className' => 'author-list-banner',
        ],
        'AuthorList' => [
            'authors' => getAuthors()
        ]
    ];
}

function getAuthorDetail() {
    global $post;
    $author = transformAuthor($post);
    return [
        'AuthorHeading' => [
            'breadcrumb' => getSingularBreadcrumb($post->ID),
            'author' => $author
        ],
        'AuthorArticles' => [
            'filteredItems' => getPosts(20, '', 'latest', [], [], [$post->ID])
        ]
    ];
}

function getThankYouPage() {
    global $post;
    $acf = get_fields();
    $pastObjectId = url_to_postid(wp_get_referer());
    return [
        'ThankYouPage' => [
            'breadcrumb' => $pastObjectId && $pastObjectId > 0 ? getSingularBreadcrumb($pastObjectId) : [],
            'featuredImage' => get_the_post_thumbnail_url($post->ID, '1440x450'),
            'ThankYouHeading' => [
                'title' => $acf['heading_area']['page_title'],
                'description' => $acf['heading_area']['description'],
                'links' => $acf['heading_area']['links'],
                'breadcrumb' => [
                    [
                        'url' => home_url(),
                        'title' => 'Home',
                    ],
                    [
                        'url' => false,
                        'title' => get_the_title($post),
                    ]
                ],
            ],
            'ThankYouSocial' => [
                'image' => $acf['social_section']['image'] ? $acf['social_section']['image']['sizes']['724x407'] : null,
                'title' => $acf['social_section']['title'],
                'description' => $acf['social_section']['description'],
                'socialLinks' => $acf['social_section']['social_links'],
                'downloadContent' => $acf['social_section']['download_content'] ?? '',
                'downloadLink' => $acf['social_section']['download_link'] ?? false,
            ],
            'LatestArticles' => [
                'filteredItems' => getPosts(20)
            ]
        ]
    ];
}

function getAboutUsNewsletterPage() {
    global $post;
    $acf = get_fields($post->ID);
    return [
        'SectionHeading' => [
            'title' => $acf['heading_area']['page_title'],
            'description' => $acf['heading_area']['description'],
            'breadcrumb' => [
                [
                    'url' => home_url(),
                    'title' => 'Home',
                ],
                [
                    'url' => false,
                    'title' => get_the_title($post),
                ]
            ],
        ],
        'AboutUsContent' => [
            'content' => $acf['content_area'],
            'popularPosts' => getPosts(3, '', 'popular')
        ]
    ];
}

function getNewsletterThankYouPage() {
    global $post;
    $acf = get_fields($post->ID);
    return [
        'SectionHeading' => [
            'title' => $acf['heading_area']['page_title'],
            'description' => $acf['heading_area']['description'],
            'breadcrumb' => getSingularBreadcrumb($post->ID),
            'link' => $acf['heading_area']['link']
        ],
        'CategorisedArticles' => [
            'orangeBg' => false,
            'filteredArticles' => getCategorisedArticles()
        ],
    ];
}

function getPage() {
    global $post;
    return [
        'PageContent' => [
            'html' => $post->post_content
        ]
    ];
}

function getPostDetail() {
    global $post;
    ob_start();
    the_content();
    $content = ob_get_contents();
    ob_end_clean();
    $transformedPost = transformPost($post);
    $blocks = [];

    $bottom_box_area_artical_page = get_field( 'bottom_box_area_artical_page', 'options' );

    $pattern = '/<a(.*?)?href=[\'"]?[\'"]?(.*?)?>/i';
    $content = preg_replace_callback($pattern, function($m){
        $tpl = array_shift($m);
        $hrf = isset($m[1]) ? $m[1] : null;
        if ( preg_match('/target=[\'"]?(.*?)[\'"]?/i', $tpl) ) {
            return $tpl;
        }
        if ( trim($hrf) && 0 === strpos($hrf, '#') ) {
            return $tpl; // anchor links
        }
        return preg_replace_callback('/href=/i', function($m2){
            return sprintf('target="_blank" %s', array_shift($m2));
        }, $tpl);
    }, $content);

    if (is_preview()) {
        $transformedPost['contentType'] = get_post_meta($post->ID, 'content_type', true);
        $transformedPost['avgReadingTime'] = get_post_meta($post->ID, 'avg_reading_time', true);
    }
    if ($transformedPost['contentType'] === 'Article') {
        $blocks['PostContent'] = [
            'popularPosts' => getPosts(3, '', 'popular'),
            'breadcrumb' => getSingularBreadcrumb($post->ID),
            'post' => $transformedPost,
            'htmlContent' => $content,
            'bottomhtml' => $bottom_box_area_artical_page,
            'relatedArticles' => getRelatedArticles($transformedPost),
        ];
      
    }
    else {
        $blocks['BreadcrumbOnly'] = [
            'breadcrumb' => getSingularBreadcrumb($post->ID),
        ];
        $blocks['ResourceCenterArticles'] = getResourceCenterBlockContent([
            'post' => $transformedPost,
            'htmlContent' => $content,
        ]);
    }
    return $blocks;
}

function getEventsArchive() {
    $authorFields = get_fields('ht-event_options');
    $pageTitle = $authorFields['page_title'] ?? 'Healthcare transformers events';
    return [
        'SectionHeading' => [
            'title' => $pageTitle,
            'description' =>  $authorFields['description'] ?? '',
            'breadcrumb' => [
                [
                    'url' => home_url(),
                    'title' => 'Home',
                ],
                [
                    'url' => false,
                    'title' => 'Events',
                ]
            ],
        ],
        'UpcomingEvents' => [
            'sectionTitle' => 'Upcoming events',
            'upcomingEvents' => getEvents('upcoming', 999)
        ],
        'PastEvents' => [
            'sectionTitle' => 'Past events',
            'ajaxUrl' => admin_url( 'admin-ajax.php' ),
            'pastEvents' => getEvents('past', 4)
        ]
    ];
}

function getTrainingsArchive() {
    $authorFields = get_fields('ht-training_options');
    $pageTitle = $authorFields['page_title'] ?? 'Healthcare transformers trainings';
    return [
        'SectionHeading' => [
            'title' => $pageTitle,
            'description' =>  $authorFields['description'] ?? '',
            'breadcrumb' => [
                [
                    'url' => home_url(),
                    'title' => 'Home',
                ],
                [
                    'url' => false,
                    'title' => 'Training',
                ]
            ],
        ],
        'LatestTrainings' => [
            'sectionTitle' => 'Latest training series',
            'ajaxUrl' => admin_url( 'admin-ajax.php' ),
            'latestTrainings' => getTrainings(4)
        ]
    ];
}

function getEventDetail() {
    global $post;
    return [
        'EventDetail' => [
            'upcomingEvents' => getEvents('upcoming', 3),
            'breadcrumb' => getSingularBreadcrumb($post->ID),
            'event' => transformEvent($post)
        ],
    ];
}

function getTrainingDetail() {
    global $post;

    $relatedContentCategory = get_field('related_content_category');
    $relatedContentCategory = $relatedContentCategory ? $relatedContentCategory : null;
    return [
        'TrainingDetail' => [
            'relatedTrainings' => [
                'filteredItems' => getTrainings(4, [$post->ID])
            ],
            'CategorisedArticles' => [
                'orangeBg' => true,
                'filteredArticles' => getCategorisedArticles($relatedContentCategory, 20)
            ],
            'breadcrumb' => getSingularBreadcrumb($post->ID),
            'training' => transformTraining($post),
            'ajaxUrl' => admin_url( 'admin-ajax.php' ),
            'trainingId' => $post->ID,
        ],
    ];
}

function getSearchPage() {
    global $wp_query;
    $items = [];
    $authorFields = get_fields('ht-author_options');
    $authorPageTitle = $authorFields['page_title'] ?? 'Healthcare Transformers authors';
    foreach ($wp_query->posts as $post) {
        $excludePageFromSearch = false;
        if($post->post_type == 'page'){
            $page_template = get_page_template_slug( $post->ID );
            if($page_template === 'template-thank-you.php'){
                $excludePageFromSearch = true;
            }
        }
        if($excludePageFromSearch){
            continue;
        }
        $item = [
            'id' => $post->ID,
            'type' => $post->post_type,
            'title' => $post->post_title,
            'url' => get_permalink($post->ID),
            'breadcrumb' => [
                [
                    'url' => home_url(),
                    'title' => 'Home',
                ]
            ],
            'shortContent' => "",
        ];
        $useResult = true;
        switch ($post->post_type) {
            case 'post':
                $categories = get_the_category($post->ID);
                if ($categories && $categories[0]) {
                    $item['breadcrumb'][] = [
                        'url' => get_category_link($categories[0]->term_id),
                        'title' => html_entity_decode($categories[0]->name)
                    ];
                }
                $acfAuthors = get_field('select_authors', $post->ID);
                $authors = [];
                if ($acfAuthors && is_array($acfAuthors)) {
                    foreach ($acfAuthors as $acfAuthor) {
                        $authors[] = $acfAuthor->post_title;
                    }
                }
                $item['shortContent'] = apply_filters('the_content', get_the_excerpt($post));
                $item['authors'] = $authors;
                break;
            case 'ht-author':
                $item['breadcrumb'][] = [
                    'url' => get_post_type_archive_link('ht-author'),
                    'title' => $authorPageTitle
                ];
                $item['shortContent'] = get_field('author_description', $post->ID);
                break;
            case 'ht-event':
                $acfAuthors = get_field('authors', $post->ID);
                $authors = [];
                if ($acfAuthors && is_array($acfAuthors)) {
                    foreach ($acfAuthors as $acfAuthor) {
                        $authors[] = $acfAuthor['author']->post_title;
                    }
                }
                $item['authors'] = $authors;
                $item['breadcrumb'][] = [
                    'url' => get_post_type_archive_link('ht-event'),
                    'title' => 'Events'
                ];
                $item['shortContent'] = get_field('description', $post->ID);
                break;
            case 'page':
                break;
            default:
                $useResult = false;
                break;
        }
        $item['shortContent'] = strip_tags($item['shortContent']);
        $item['shortContent'] = wp_trim_words(($item['shortContent']), 30);
        $item['shortContent'] = html_entity_decode($item['shortContent']);
        if ($useResult) {
            $items[] = $item;
        }
    }

    $currentPage = $wp_query->query_vars['paged'] ? $wp_query->query_vars['paged'] : 1;
    return [
        'SearchResults' => [
            'searchQuery' => get_search_query(),
            'currentPage' => $currentPage,
            'maxPages' => $wp_query->max_num_pages,
            'prevPageLink' => $currentPage > 1 ? get_previous_posts_page_link($wp_query->max_num_pages) : null,
            'nextPageLink' => $currentPage < $wp_query->max_num_pages ? get_next_posts_page_link($wp_query->max_num_pages) : null,
            'items' => $items
        ],
    ];
}

function get404() {
    return [
        'NotFound' => [
            'title' => 'Not Found',
            'description' => 'The page you are looking does no exist.'
        ]
    ];
}

