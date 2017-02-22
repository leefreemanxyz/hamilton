<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Hamilton
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area" role="complementary">
	<div class="middle-header">
		<div id="profile-image"><a href="https://leefreeman.xyz"><img src="https://leefreeman.xyz/wp-content/uploads/2017/02/me_new-cropped.jpg"></a></div>
		<h1>Lee Freeman</h1>
		<div class="social-icons">
			<ul>
				<li><a href="https://github.com/leefreemanxyz"><i class="fa fa-github fa-2x"></i></a></li><!--GitHub-->
				<li><a href="https://www.linkedin.com/in/leefreemanxyz"><i class="fa fa-linkedin-square fa-2x"></i></a></li> <!--LinkedIn-->
				<li><a href="https://www.codepen.io/leefreemanxyz"><i class="fa fa-codepen fa-2x"></i></a></li> <!--CodePen-->
			</ul>
		</div>
</aside>
