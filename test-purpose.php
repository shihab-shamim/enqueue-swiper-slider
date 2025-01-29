<?php
/**
 * Plugin Name: enqueue slider
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'PREFIX_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'PREFIX_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'PREFIX_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'PREFIXPlugin' ) ){
	class PREFIXPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			add_action('enqueue_block_assets', 'enqueue_assets_for_both');
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
			function enqueue_assets_for_both() {
				// Swiper CSS
				wp_enqueue_style(
					'swiper-css',
					'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
					[],
					null
				);
			
				// Swiper JS
				wp_enqueue_script(
					'swiper-js',
					'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
					[],
					null,
					true
				);
			}
		}
	}
	new PREFIXPlugin();
}