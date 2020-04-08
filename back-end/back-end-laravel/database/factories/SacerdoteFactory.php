<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/


$factory->define(App\Sacerdote::class, function (Faker $faker) {
    $naturalidade = $faker->randomElement(['Formiga', 'Arcos','Divinópolis','Belo Horizonte','São Paulo','Rio de Janeiro']);
    $data = $faker->dateTimeBetween('1994-01-01', '2019-12-31')->format('Y-m-d');
    $data2 = $faker->dateTimeBetween('1950-01-01', '1993-12-31')->format('Y-m-d');
    return [
        'nome' => $faker->name,
        'dataAniversario' => $data2,
        'dataOrdenacao' => $data,
        'naturalidade' => $naturalidade,
        'nacionalidade' => 'Brasileiro',
        'paroquia_id' => 4,
        'diocese_id' => 2,
    ];
});
