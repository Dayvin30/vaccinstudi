<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'FKYr42ryKt' );

/** Database username */
define( 'DB_USER', 'FKYr42ryKt' );

/** Database password */
define( 'DB_PASSWORD', 'FNZNN9i6BH' );

/** Database hostname */
define( 'DB_HOST', 'remotemysql.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'rp#w^6DE#]H(f[oXZp?xgH0FMHn(}QcI#6xOeOC7h5p|@l>w$:9l!fkmMUFc{sD+' );
define( 'SECURE_AUTH_KEY',  'U<}KE[YroauN2jhZ#{tGtsa*Qu!b@V]RKEiLa~tD7MyGxKn0OyyI,pvwnuf6|]j9' );
define( 'LOGGED_IN_KEY',    'tN 8Vb/8CG ^`r@o-E37CK*z$!GF6UqX:}eRP(: ]lD`T5YPF(b<,P<M,^VTO+kI' );
define( 'NONCE_KEY',        '`*]YGC8 `|YD/h;K![nAq=9DyshmU@u?IY*.{1}<:E,h>q)MN}8TCtZV#O7/.*+<' );
define( 'AUTH_SALT',        'Ze~^]wb^R4UZ3/PuAXq8DL~~MaL@y_4M;>ots?ZkX-&/3E`.#iVBYO-_ []%SR;#' );
define( 'SECURE_AUTH_SALT', 'ey&NTpG5_b6^zQJf&|e/y7X79[P;s0@s,HZ&1_Hk0dupNQ&n%kPqIk_KI-2GdF>t' );
define( 'LOGGED_IN_SALT',   '$t1eL=h7EY H6>n!F}KGrfM%&}/F^b99#Uv[r3#Aa,~MUfoL3uh_~hL&|UUkAy+`' );
define( 'NONCE_SALT',       'g69a# ]iFX_93kEcCjRhgC].$y07;@CdH&;WsXIs1Wg*[Hq)QQIg+Za6xTy-Jog`' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
