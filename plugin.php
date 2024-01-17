<?php

/**
 * Plugin Name: FemArt Custom Block - 02
 * Description: FemArt Custom Block - 02: Horizontal block with neutral background containing media gallery, title, text, and a button.
 */

function femart_custom_block_02()
{
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'femart_custom_block_02');
