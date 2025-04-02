<?php
if (!isset($block)) {
    return;
}
$acf = get_fields();
$blockId = $block['anchor'] && strlen($block['anchor']) > 0 ? $block['anchor'] : $block['id'];
?>
<blockquote class="<?php echo $block['className'] ?? ''; ?> quote-small" id="<?php echo $blockId; ?>">
    “<?php echo $acf['quote']; ?>”
    <div class="quote-meta">
        <?php
        if ($acf['author']) {
            if ($acf['author']['picture'] && $acf['author']['picture']['sizes']['thumbnail']) {
                echo '<img src="'.$acf['author']['picture']['sizes']['thumbnail'].'" alt="" />';
            }
            ?>
            <span><?php echo $acf['author']['name']; ?><small><?php echo $acf['author']['title']; ?></small></span>
            <?php
        }
        ?>
    </div>
</blockquote>
