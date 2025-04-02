<?php
if (!isset($block)) {
    return;
}
$acf = get_fields();
$blockId = $block['anchor'] && strlen($block['anchor']) > 0 ? $block['anchor'] : $block['id'];
?>
<div class="inlinebanner <?php echo $block['className'] ?? ''; ?>" id="<?php echo $blockId; ?>">
    <div class="inlinebanner-text">
        <?php
        echo $acf['headline'] ? '<h2>'.$acf['headline'].'</h2>' : '';
        echo $acf['subheadline'] ? '<p>'.$acf['subheadline'].'</p>' : '';
        echo $acf['link'] ? a_href_from_link($acf['link'], 'btn-main') : '';
        ?>
    </div>
</div>
