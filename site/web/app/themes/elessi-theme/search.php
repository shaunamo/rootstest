<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package nasatheme
 */
if (!isset($nasa_opt['blog_layout'])) :
    $nasa_opt['blog_layout'] = '';
endif;

$hasSidebar = true;
$left = false;
switch ($nasa_opt['blog_layout']):
    case 'right':
        $attr = 'large-9 left columns';
        break;
    case 'left':
        $left = true;
        $attr = 'large-9 right columns';
        break;
    default:
        $hasSidebar = false;
        $attr = 'large-10 columns large-offset-1';
        break;
endswitch;
get_header();
?>
<div class="container-wrap page-<?php echo ($nasa_opt['blog_layout']) ? esc_attr($nasa_opt['blog_layout']) : 'right-sidebar'; ?>">

    <?php if ($hasSidebar): ?>
        <div class="div-toggle-sidebar center"><a class="toggle-sidebar" href="javascript:void(0);"><i class="fa fa-bars"></i> <?php esc_html_e('Sidebar', 'elessi-theme'); ?></a></div>
    <?php endif; ?>

    <div class="row">
        <div id="content" class="<?php echo esc_attr($attr); ?>">
            <div class="page-inner margin-bottom-50">
                <?php if (have_posts()) : ?>
                    <header class="page-header">
                        <h1 class="page-title"><?php printf(esc_html__('Search Results for: %s', 'elessi-theme'), '<span>' . get_search_query() . '</span>'); ?></h1>
                    </header>

                <?php
                    get_template_part('content', get_post_format());
                    elessi_content_nav('nav-below');
                else :
                    get_template_part('no-results', 'search');
                endif;
                ?>
            </div>
        </div>

        <?php if ($nasa_opt['blog_layout'] == 'left' || $nasa_opt['blog_layout'] == 'right'): ?>
            <div class="large-3 columns <?php echo ($left) ? 'left' : 'right'; ?> col-sidebar">
                <?php get_sidebar(); ?>
            </div>
        <?php endif; ?>

    </div>	
</div>

<?php
get_footer();
