<?php

/**
 * Loud front-end JavaScript and CSS for blocks
 */
function caldera_learn_alert_block_enqueue_block_front_assets() {
    $dir = dirname( __FILE__ );
    $block_js = '/build/index.js';
    $editor_css = '/build/style.css';
    $handle = 'caldera-learn/alert-block';

    //These are dependencies for
    $dependencies = array(
        'wp-i18n',
        'wp-blocks',
        'wp-element'
    );

    foreach ( $dependencies as $dependency ){
        wp_enqueue_script( $dependency );
    }

    wp_enqueue_script( $handle, plugins_url( $block_js, __FILE__ ), array(
        'wp-i18n',
        'wp-blocks',
        'wp-element'
    ), md5(filemtime( "$dir/$block_js" ) ));

    wp_enqueue_style( $handle, plugins_url( $editor_css, __FILE__ ), array(
    ), filemtime( "$dir/$editor_css" ) );
}
add_action( 'wp_enqueue_scripts', 'caldera_learn_alert_block_enqueue_block_front_assets' );
