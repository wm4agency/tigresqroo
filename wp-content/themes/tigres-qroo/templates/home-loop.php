<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<section id="main-info-section" class="d-all m-all t-all">
		<div class="d-1of4 t-1of3 m-all container">
			<figure id="impulso">

			</figure>
			<div id="socials">
				<h2>¡Comparte tu pasión!</h2>
				<span></span>
			</div>

		</div>
		<div id="slider" class="d-1of2 t-1of3 m-all container">
			<div class="my-slider">
				<ul>
					<li>My slide</li>
					<li>Another slide</li>
					<li>My last slide</li>
				</ul>
			</div>
		</div>
		<div id="notas-destacadas" class="d-1of4 t-1of3 m-all container">
			<div class="inner">

			</div>
		</div>

	</section>
	<section id="full-width-banner" style="background-image:url(<?php echo get_site_url(); ?>/wp-content/uploads/tigres_de_quintana_roo-textura.svg)">
		<div class="big-message">
			<h1 class="shadowed-text" style="color:white!important; font-size: 8em;line-height: 10em;">#TigresPorTí</h1>
		</div>
	</section>

	<!-- <article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

		<header class="article-header">

			<?php get_template_part( 'templates/header', 'pages'); ?>

			<?php // Delete or comment out if you don't need this on your page or post. Edit in /templates/byline.php ?>
			<?php get_template_part( 'templates/byline'); ?>

		</header> <?php // end article header ?>

		<section class="entry-content cf" itemprop="articleBody">

			<?php the_content(); ?>

		</section> <?php // end article section ?>

		<footer class="article-footer cf">

		</footer>

		<?php comments_template(); ?>

	</article> -->

<?php endwhile; endif; ?>
