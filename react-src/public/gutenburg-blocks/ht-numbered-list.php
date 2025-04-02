<?php
if (!isset($block)) {
    return;
}
$acf = get_fields();
$blockId = $block['anchor'] && strlen($block['anchor']) > 0 ? $block['anchor'] : $block['id'];
?>
<div class="ht-numbered-list <?php echo $block['className'] ?? ''; ?>" id="<?php echo $blockId; ?>">
    <?php
    echo $acf['headline'] ? '<h3>'.$acf['headline'].'</h3>' : '';
    echo $acf['text'] ?: '';
    if ($acf['list'] && count($acf['list']) > 0) {
        echo '<ol>';
        foreach ($acf['list'] as $listItem) {
            echo '<li>'.$listItem['item'].'</li>';
        }
        echo '</ol>';
    }
    ?>
</div>

