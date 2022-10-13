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
//mysql://b499eae5ef0a25:728b1d51@eu-cdbr-west-03.cleardb.net/heroku_24407b1830caad3?reconnect=true
define( 'DB_NAME', 'wp_covid' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         ';7=sf[pg$A!id#N>5<)$XY&C[dk+VNZqHP$PY+kbFVX5}d(F<g@[WZ%{[0CQ.kew' );
define( 'SECURE_AUTH_KEY',  ':si&6[*$xq*qreg}P^LjK${an[iIoJpNLPgzMjLFvw7Uxy{G;]^f?{{Dfip.A]v1' );
define( 'LOGGED_IN_KEY',    '0>UEIJA@6X7?WQ2,NRZgfwV2GbV_w$R3e^bp711w/47inXBTS@fZE+}<Hgf8wAS6' );
define( 'NONCE_KEY',        '3v;FKM)p{c1wrd#)yjrT`]Py+Dcao=8_.?m.M37|s[j]K/ZN?VeoVoQ9)_X%vYbi' );
define( 'AUTH_SALT',        ',3;7_jkN-/m0n;f`MXIza<)l4mB},WdU!VQ]nF%Gj)lS&tN`@}.*SW=<Y(7._BHp' );
define( 'SECURE_AUTH_SALT', 'v0EU)vS?MH$FP?DX=/Eq.Iibb]3h;N&tGW_[!=xp^EN~:Ipnzh[&_xN|oi>QFwHX' );
define( 'LOGGED_IN_SALT',   ' dQo`-azK*R}Z_DK#6(TF:p{$D^-r/U9pr 0$5&[MEe5r~>>B.h/>#j}]P|W*dG5' );
define( 'NONCE_SALT',       '}^`;a+TQ7V T<Ca<4KxQMXXp[5RKcPz7gTgj-2Svt8m1tmdz|Fs/Ha501&nD)Wdh' );

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

define( 'WP_HOME', 'https://vaccinstudi.herokuapp.com' );
define( 'WP_SITEURL', 'https://vaccinstudi.herokuapp.com' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
