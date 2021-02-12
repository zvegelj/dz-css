<?php

/**
 * Plugin Name: DZ-CSS
 * Plugin URI: https://z4.si
 * Description: New style blocks for Gutenberg.
 * Version: 1.0.3
 * Author: Denis Zvegelj
 *
 * @package dz-css
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action( 'init', 'dz-css-blocks_jezik' );

function dz_css_blocks_jezik() {
        load_plugin_textdomain( 'dz-css', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function dz_css_register_block() {
        // automatically load dependencies and version
        $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

        wp_register_script(
                'dz-css-blocks-script',
                plugins_url( 'build/index.js', __FILE__ ),
                $asset_file['dependencies'],
                $asset_file['version']
        );

        wp_register_style(
                'dz-css-blocks-editor',
                plugins_url( 'css/editor.css', __FILE__ ),
                array( 'wp-edit-blocks' ),
                filemtime( plugin_dir_path( __FILE__ ) . 'css/editor.css' )
        );

        wp_register_style(
                'dz-css-blocks',
                plugins_url( 'css/style.css', __FILE__ ),
                array( ),
                filemtime( plugin_dir_path( __FILE__ ) . 'css/style.css' )
        );

        register_block_type( 'w3/blocks-editable', array(
                'style' => 'dz-css-blocks',
                'editor_style' => 'dz-css-blocks-editor',
                'editor_script' => 'dz-css-blocks-script',
        ) );

        register_block_type( 'w3/btn', array(
                'style' => 'dz-css-blocks',
                'editor_style' => 'dz-css-blocks-editor',
                'editor_script' => 'dz-css-blocks-script',
        ) );
        register_block_type( 'w3/container', array(
                'style' => 'dz-css-blocks',
                'editor_style' => 'dz-css-blocks-editor',
                'editor_script' => 'dz-css-blocks-script',
        ) );
        register_block_type( 'w3/h1', array(
                'style' => 'dz-css-blocks',
                'editor_style' => 'dz-css-blocks-editor',
                'editor_script' => 'dz-css-blocks-script',
        ) );
        register_block_type( 'w3/h2', array(
                'style' => 'dz-css-blocks',
                'editor_style' => 'dz-css-blocks-editor',
                'editor_script' => 'dz-css-blocks-script',
        ) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'dz-css-blocks-script', 'w3' );
  }

}
add_action( 'init', 'dz_css_register_block' );
