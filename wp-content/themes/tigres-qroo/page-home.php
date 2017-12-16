<?php
/*
 Template Name: Home Page
 *
 * Use this template for a static home page.
 * If you don't need the main loop, remove it
 * and get busy.
*/
?>

<?php get_header(); ?>
			<div id="content" class="homepage">
				<div id="inner-content" class="wrap cf">

						<main id="main" class="m-all t-all d-all cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

							<?php // Edit the loop in /templates/loop. Or roll your own. ?>
							<?php get_template_part( 'templates/home-loop'); ?>

						</main>

						<?php //get_sidebar(); ?>

				</div>

			</div>


<?php get_footer(); ?>
