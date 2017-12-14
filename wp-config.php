<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'tigresqroo');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', 'root');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '=F6JQRQFZa_{APvvVFAr~,XWrGMk-((B98=Rjl1;`mCj up-`99rIq3{2srqB.b ');
define('SECURE_AUTH_KEY', ')#jK6i.^NH4*H+AN~H5wrkbbq7B:nR,51:+IwEWi%2?RXg<H%fiO66:Jp^Fa!gLC');
define('LOGGED_IN_KEY', '^selVMib]ifBQ3rn+)KT7p:y+sx+=,e]aZpS)s~UUBl2!D[o)Z[}{&UFSvK`oono');
define('NONCE_KEY', ':Bob,nMEDc&<tQ~)#RM/HM6OHgZLOnQmi|.)s FQkIe9XhqW`lI{Zd1yhv_D@qDv');
define('AUTH_SALT', '|;;<Ae4&o]Q<lWECf:gvh#nheT*o=?~5zN+-AF}lnd: ur}tEMHPzNjnB=@-o_8e');
define('SECURE_AUTH_SALT', '8^OC|MKwmrVv.|5i:[Qa%*O!dqZHQ@r;&r:G`.doUkue$QS;YGEK,A4Bgb(Ag]0v');
define('LOGGED_IN_SALT', ']Peb<L+r17SC2( bk_4WGc  #-UyLX< ?1 :{@G1oHN9Z}pQ!AfU2g3K6ro`&i.B');
define('NONCE_SALT', '#dM0i}t,s$ltUwVY8oDjb1DC#NpC>ieaRfd0j.d10FAKH6mO]:c$-fH<~HU;S-g9');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wp_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

