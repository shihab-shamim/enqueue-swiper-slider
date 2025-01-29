
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
			// add_action('wp_enqueue_scripts', [$this, 'mytheme_enqueue_assets']);
			add_action('enqueue_block_assets', [$this, 'mytheme_enqueue_assets']);
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}


		function mytheme_enqueue_assets() {
			wp_enqueue_style(
                'swiper-css',
                'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
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
	new PREFIXPlugin();
}

// wp_enqueue_scripts == (frontend)
// admin_enqueue_scripts == (backend)
// enqueue_block_assets == (backend and frontend)
//enqueue_block_editor_assets == (gutenberg editor)

