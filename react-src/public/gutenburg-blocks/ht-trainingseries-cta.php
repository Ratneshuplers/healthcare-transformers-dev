<?php
if (!isset($block)) {
    return;
}
$acf = get_fields();
if (!$acf['cta_label'] || !$acf['popup_form'] || !$acf['popup_form']['marketo_form_id']) {
    return;
}
$accessAssetUrl = $acf['popup_form']['access_asset'] === 'url' ? $acf['popup_form']['url'] : $acf['popup_form']['upload_file'];
$blockId = $block['anchor'] && strlen($block['anchor']) > 0 ? $block['anchor'] : $block['id'];
?>

<div class="post-button <?php echo $block['className'] ?? ''; ?>" id="<?php echo $blockId; ?>">
    <a href="javascript:void(0)" class="btn-main min-width" data-toggle="modal" data-target="#modal-<?php echo $block['id']; ?>"><?php echo $acf['cta_label']; ?></a>
</div>

<!-- Modal -->
<div class="modal fade" id="modal-<?php echo $block['id']; ?>" tabindex="-1" role="dialog" aria-labelledby="modal-<?php echo $block['id']; ?>Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ht-training-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body cta-modal-wrapper">
                <button type="button" class="close popup-close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><img src="<?php echo get_template_directory_uri() ?>/assets/images/close-popup.svg" </span>
                </button>
                <div class="cta-form">
                    <h5 class="modal-title" id="modal-<?php echo $block['id']; ?>Label"><?php echo $acf['popup_form']['title'] ?? 'Complete the form to access your free content'; ?></h5>
                    <form id="mktoForm_<?php echo $acf['popup_form']['marketo_form_id']; ?>"></form>
                    <div ht-access-formId="<?php echo $acf['popup_form']['marketo_form_id']; ?>" ht-access="<?php echo $accessAssetUrl; ?>" ht-access-postType="<?php echo get_post_type( get_the_ID() ); ?>" ht-access-postId="<?php echo get_the_ID() ?>" ht-access-ajaxUrl="<?php echo admin_url( 'admin-ajax.php' ); ?>"></div>
                </div>
                <div class="cta-thank-you" style="display: none">
                    <?php if(is_singular('ht-training')){
                        ?>
                        <h3>Thank You</h3>
                        <p>We hope you enjoy learning from our industry leading experts.</p>
                        <?php
                    }else{
                        ?>
                        <h3>Thank You</h3>
                        <p>Continue exploring our resource center</p>
                        <a href="<?php echo get_category_link(1); ?>" class="btn-main">Resource center</a>
                        <?php
                    } ?>
                </div>
            </div>
        </div>
    </div>
</div>