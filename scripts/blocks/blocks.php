<?php

/**
 * Enqueue assets needed for the admin editor.
 *
 * Use the "enqueue_block_assets" action to enqueue
 * assets on the front-end of your website.
 */
function caldera_learn_alert_block_enqueue_block_editor_assets() {
    $dir = dirname( __FILE__ );
    $block_js = '/build/index.js';
    $editor_css = '/build/style.css';
    $handle = 'caldera-learn/alert-block';

    global $wp_version;
    wp_enqueue_script( $handle, plugins_url( $block_js, __FILE__ ), array(
        'wp-blocks',
    ), md5(md5_file( "$dir/$block_js" ) ) . $wp_version );

    wp_enqueue_style( $handle, plugins_url( $editor_css, __FILE__ ), array(
        'wp-blocks',
        //CSS for components, we're re-using them.
        'wp-components'
    ), filemtime( "$dir/$editor_css" ) );
}
add_action( 'enqueue_block_editor_assets', 'caldera_learn_alert_block_enqueue_block_editor_assets' );


add_action( 'init', function(){
    if( function_exists( 'register_block_type' ) ){
        register_block_type( 'caldera-learn/alert-block', [
            [
                'message' => [
                    'type'=> 'array',
                    'source'=> 'children',
                    'selector'=> 'alertMessage',
                    'default' => 'Hi Roy'
                ],
                'alertType' => [
                    'source'=> 'attribute',
                    'selector' => 'p',
                    'attribute' => 'type',
                ],
                'postId' =>  [
                    'type' => 'integer'
                ]
            ],
            // Create front-end display
            //Also this is basically what JSX does
            'render_callback' => function( $attr ){
                $type = isset( $attr[ 'type' ]) ? $attr[ 'type' ]:  'warning';
                $message = isset( $attr[ 'message' ]) ? $attr[ 'message' ]:  __( 'No message' );
            return "<div class=\"wp-block-caldera-learn-alert-block\">
                <div role=\"alert\" class=\"alert alert-$type\">
                    <p class=\"alertMessage\">$message</p>
                </div>
            </div>";
            }
        ]);
    }
});