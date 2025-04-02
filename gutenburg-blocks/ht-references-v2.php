<?php
if (!isset($block)) {
    return;
}
global $post;
$acf = get_fields();
if ($acf['section_title'] && $acf['content']) {
    $blockId = $block['anchor'] && strlen($block['anchor']) > 0 ? $block['anchor'] : $block['id'];
    ?>
    <div class="ht-references accordion <?php echo $block['className'] ?? ''; ?>" id="<?php echo $blockId; ?>">
        <div class='accordion-content'>
            <div id="<?php echo $blockId; ?>-heading-1">
                <button class="btn-collapse collapsed" type="button" data-toggle="collapse" data-target="#<?php echo $blockId; ?>-content-1" aria-expanded="true" aria-controls="<?php echo $blockId; ?>-content-1">
                    <?php echo $acf['section_title'] ?? 'References'; ?>
                </button>
            </div>
            <div id="<?php echo $blockId; ?>-content-1" class="collapse" aria-labelledby="<?php echo $blockId; ?>-heading-1" data-parent="#<?php echo $blockId; ?>">
                <div class='text'>
                    <?php echo $acf['content']; ?>
                </div>
            </div>
        </div>
    </div>
    <?php
}
?>

