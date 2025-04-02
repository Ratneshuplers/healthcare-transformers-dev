<?php
if (!isset($block)) {
    return;
}
$acf = get_fields();
$blockId = $block['anchor'] && strlen($block['anchor']) > 0 ? $block['anchor'] : $block['id'];
?>

<div class="inlinebanner2 <?php echo $block['className'] ?? ''; ?>" id="<?php echo $blockId; ?>">
    <div class="innerbanner-top">
        <div class="innerbanner-heading">
            <div class="row align-items-center d-flex flex-md-row-reverse">
                <div class="col-12 col-md-4 align-middle text-center round-image-div">
                    <img src="<?php echo $acf['circle_image']['sizes']['182x182']; ?>" alt="" class="roundImage">
                </div>
                <div class="col-12 col-md-8">
                    <h5><?php echo $acf['asset_class']; ?></h5>
                    <h4><?php echo $acf['heading']['headline']; ?> <small><?php echo $acf['heading']['subheadline']; ?></small></h4>
                    <p><?php echo $acf['text']; ?></p>
                </div>
            </div>
        </div>
    </div>
    <!--<div class="innerbanner-top">
        <div class="innerbanner-heading">
            <h6><?php /*echo $acf['asset_class']; */?></h6>
            <div class="row">
                <div class="col-12">
                    <img src="<?php /*echo $acf['circle_image']['sizes']['thumbnail']; */?>" alt="" class="centerimg">
                </div>
                <div class="col-12 col-md-6">
                    <h5><?php /*echo $acf['heading']['headline']; */?><small><?php /*echo $acf['heading']['subheadline']; */?></small></h5>
                </div>
                <div class="col-12 col-md-6">
                    <?php /*echo $acf['text']; */?>
                </div>
            </div>
        </div>
    </div>-->
    <?php
    if ($acf['marketo_form'] && $acf['marketo_form']['marketo_form_id']) {
        ?>
        <div class="formwrap">
            <form id="mktoForm_<?php echo $acf['marketo_form']['marketo_form_id']; ?>"></form>
        </div>
        <?php
    }
    ?>
</div>