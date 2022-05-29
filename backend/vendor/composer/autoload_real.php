<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit7e1a2c73fae2d2bf5a6bdcc858608766
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInit7e1a2c73fae2d2bf5a6bdcc858608766', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit7e1a2c73fae2d2bf5a6bdcc858608766', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit7e1a2c73fae2d2bf5a6bdcc858608766::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
