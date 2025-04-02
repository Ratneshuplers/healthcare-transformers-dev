<?php
if (!isset($block)) {
    return;
}
$acf = get_fields();
$blockId = $block['anchor'] && strlen($block['anchor']) > 0 ? $block['anchor'] : $block['id'];
?>

<div class="externallink <?php echo $block['className'] ?? ''; ?>" id="<?php echo $blockId; ?>">
    <?php echo $acf['text']; ?>
</div>