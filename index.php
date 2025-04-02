<?php
$TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
$faviconIcon = get_field('favicon_icon', 'options');
$faviconIcon = $faviconIcon ? $faviconIcon :  $TEMPLATE_PATH.'/assets/img/favicon.ico';
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

    <base href="<?php echo get_template_directory_uri(); ?>/" />
    <!-- Required meta tags -->
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="<?php echo $faviconIcon; ?>" type="image/x-icon">
    <?php wp_head(); ?>
    <?php the_field('header_scripts', 'options'); ?>
<link href="/wp-content/themes/healthcare-transformers/static/css/main.chunk.css?45dc33698d502071f998" rel="stylesheet"></head>
<body <?php body_class(); ?>>
<?php the_field('body_script', 'options'); ?>
<?php wp_body_open(); ?>

<noscript>
    You need to enable JavaScript to run this app.
</noscript>

<div id="root">
    <style>
        #root {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .lds-ring {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }
        .lds-ring div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 64px;
            height: 64px;
            margin: 8px;
            border: 8px solid #000;
            border-radius: 50%;
            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: #000 transparent transparent transparent;
        }
        .lds-ring div:nth-child(1) {
            animation-delay: -0.45s;
        }
        .lds-ring div:nth-child(2) {
            animation-delay: -0.3s;
        }
        .lds-ring div:nth-child(3) {
            animation-delay: -0.15s;
        }
        @keyframes lds-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

    </style>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</div>

<?php wp_footer(); ?>
<?php the_field('footer_scripts', 'options'); ?>
<script>
	window.dataLayer = window.dataLayer || [];
	let searchParams = new URLSearchParams(window.location.search);
	if(searchParams.has('FormSubmissionID')){
		dataLayer.push({'FormSubmissionID': searchParams.get('FormSubmissionID')});
		if(searchParams.has('formId')){
			dataLayer.push({'formId': searchParams.get('formId')});
		}
	}
	jQuery(document).on("click", '.ot-close-icon', function(event) {
		setTimeout(function () {
			jQuery('#onetrust-consent-sdk .ot-fade-in').hide()
		}, 500)
	});
</script>
<script src="/wp-content/themes/healthcare-transformers/static/js/bundle.js?45dc33698d502071f998"></script><script src="/wp-content/themes/healthcare-transformers/static/js/0.chunk.js?45dc33698d502071f998"></script><script src="/wp-content/themes/healthcare-transformers/static/js/main.chunk.js?45dc33698d502071f998"></script></body>
</html>
