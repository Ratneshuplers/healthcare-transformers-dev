<?php
if (!isset($block)) {
    return;
}
$acf = get_fields();
$blockId = $block['anchor'] && strlen($block['anchor']) > 0 ? $block['anchor'] : $block['id'];
?>
<div class="keystatics <?php echo $block['className'] ?? ''; ?>" id="<?php echo $blockId; ?>">
    <div class="keystatics-inner">
        <?php
            echo $acf['headline'] ? '<h4>'.$acf['headline'].'</h4>' : '';
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
</div>
