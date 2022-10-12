<?php

/* Environment */
define( 'WP_ENVIRONMENT_TYPE', 'production' );

/* Database connection */
define( 'DB_NAME', 'heroku_24407b1830caad3' );
define( 'DB_USER', 'b499eae5ef0a25' );
define( 'DB_PASSWORD', '728b1d51' );
define( 'DB_HOST', 'eu-cdbr-west-03.cleardb.net' );
define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', 'utf8mb4_general_ci' );
/* mysql://b499eae5ef0a25:728b1d51@eu-cdbr-west-03.cleardb.net/heroku_24407b1830caad3?reconnect=true */

/* Tables */
$table_prefix = 'wp0stm95_';

/* Security */
/* Security Keys */
define( 'AUTH_KEY', 'zU<mrwDbEPKt|.]bE9M3{NJ?>a2=b^bZuK*]^,rB7#7Ri9%#ZKi(+kQRMvf_Fx)z' );
define( 'SECURE_AUTH_KEY', 'N{01<0Jy%?)|d1=l~&$ufjDv)IkdyX#ilnj%@H{OpQ@l!ED}Yxf^X8WN&_i7UjsQ' );
define( 'LOGGED_IN_KEY', ';t%u#?>.7.uFc/=[RHa(Rfz|R6$J1zD_mOadXjsRy424&;BTs8Qwm,tGf=f6.NVD' );
define( 'NONCE_KEY', 'sg2Q6t<AMURSb>m,0N+lg1c/(3MBh03}:OH0:,rQcq_6_J>@p@S%g(YU=EqSIFtS' );
define( 'AUTH_SALT', 'aF-;@f]~=v9;|i!.y);a^zQ*mZu:NdK*]bnR%BhNNGZY/|$%qe/Z*!i[2J{?Tq{V' );
define( 'SECURE_AUTH_SALT', 'x?I>T$@.ly?JYCi&@RXIr+^IyGt0{<;B|qxKDBV}L@OOb8rqDWEr}#TZ>2EVORL*' );
define( 'LOGGED_IN_SALT', 'LcKjEAI^A{yTGhnF8G,.~8_Zi{|$>emL,$ICaLY?|v?,b02d@_x;|40jpfa>iwWd' );
define( 'NONCE_SALT', 'u=:mepA:1_=P#5Ti(A(H:*SD(sg9#HYD4R^tv)xEcwssx&.KY68b$fsi8+~Xdfx)' );
/* HTTPS */
define( 'WP_DISABLE_FATAL_ERROR_HANDLER', false );
define( 'WP_DISABLE_ADMIN_EMAIL_VERIFY_SCREEN', false );

/* URL / Path */

/* Cookies */
define( 'TEST_COOKIE', 'wordpress_test_cookie' );
define( 'COOKIEHASH', 'zmjYZZzbLb8G6Q4A0fPL8MLb94u4BJcEEpcRWcX9kXt9hwcutZyz5nkZgeCpYGs3' );
define( 'LOGGED_IN_COOKIE', 'wordpress_logged_in_zmjYZZzbLb8G6Q4A0fPL8MLb94u4BJcEEpcRWcX9kXt9hwcutZyz5nkZgeCpYGs3' );
define( 'SECURE_AUTH_COOKIE', 'wordpress_logged_in_zmjYZZzbLb8G6Q4A0fPL8MLb94u4BJcEEpcRWcX9kXt9hwcutZyz5nkZgeCpYGs3' );
define( 'AUTH_COOKIE', 'wordpress_zmjYZZzbLb8G6Q4A0fPL8MLb94u4BJcEEpcRWcX9kXt9hwcutZyz5nkZgeCpYGs3' );
define( 'PASS_COOKIE', 'wordpresspass_zmjYZZzbLb8G6Q4A0fPL8MLb94u4BJcEEpcRWcX9kXt9hwcutZyz5nkZgeCpYGs3' );
define( 'USER_COOKIE', 'wordpressuser_zmjYZZzbLb8G6Q4A0fPL8MLb94u4BJcEEpcRWcX9kXt9hwcutZyz5nkZgeCpYGs3' );
define( 'RECOVERY_MODE_COOKIE', 'wordpress_rec_zmjYZZzbLb8G6Q4A0fPL8MLb94u4BJcEEpcRWcX9kXt9hwcutZyz5nkZgeCpYGs3' );

/* Content */
define( 'AUTOSAVE_INTERVAL', 30 );
define( 'WP_POST_REVISIONS', 5 );
define( 'MEDIA_TRASH', true );
define( 'EMPTY_TRASH_DAYS', 7 );
define( 'WP_MAIL_INTERVAL', 86400 );

/* Memory */
define( 'WP_MEMORY_LIMIT', '128M' );
define( 'WP_MAX_MEMORY_LIMIT', '256M' );

/* Updating */
define( 'AUTOMATIC_UPDATER_DISABLED', false );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
define( 'CORE_UPGRADE_SKIP_NEW_BUNDLED', true );

/* File edition */
define( 'DISALLOW_FILE_MODS', false );
define( 'DISALLOW_FILE_EDIT', true );
define( 'IMAGE_EDIT_OVERWRITE', true );

/* Performance */
define( 'WP_CACHE', true );
define( 'WP_CACHE_KEY_SALT', '83jq0xiwpjtxqey8qc:' );
define( 'COMPRESS_CSS', true );
define( 'COMPRESS_SCRIPTS', true );
define( 'CONCATENATE_SCRIPTS', false );
define( 'ENFORCE_GZIP', true );

/* Cron */
define( 'DISABLE_WP_CRON', false );
define( 'ALTERNATE_WP_CRON', false );
define( 'WP_CRON_LOCK_TIMEOUT', 60 );

/* FTP Access */

/* Plugins Must-Use */

/* Filtering */
define( 'DISALLOW_UNFILTERED_HTML', false );
define( 'ALLOW_UNFILTERED_UPLOADS', false );

/* Feed reader */
define( 'MAGPIE_CACHE_ON', true );
define( 'MAGPIE_CACHE_DIR', 'cache' );
define( 'MAGPIE_CACHE_AGE', 3600 );
define( 'MAGPIE_CACHE_FRESH_ONLY', false );
define( 'MAGPIE_DEBUG', false );
define( 'MAGPIE_USER_AGENT', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0' );
define( 'MAGPIE_FETCH_TIME_OUT', 5 );
define( 'MAGPIE_USE_GZIP', true );

/* MultiSite */
define( 'WP_ALLOW_MULTISITE', false );
define( 'WP_DEFAULT_THEME', 'twentytwenty' );

/* External URL Requests */
define( 'WP_HTTP_BLOCK_EXTERNAL', false );
if ( WP_HTTP_BLOCK_EXTERNAL ) {
    define( 'WP_ACCESSIBLE_HOSTS', '*.wordpress.org,*.github.com' );
}

/* File permissions */

/* Proxy */

/* Debug */
define( 'WP_DEBUG', false );
if ( WP_DEBUG ) {
    define( 'WP_DEBUG_DISPLAY', false );
    define( 'WP_DEBUG_LOG', false );
}
define( 'SCRIPT_DEBUG', false );
define( 'SAVEQUERIES', false );

/* Do not change anything else after this line! Thank you! */

if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );
require_once ABSPATH . 'wp-settings.php';
?>