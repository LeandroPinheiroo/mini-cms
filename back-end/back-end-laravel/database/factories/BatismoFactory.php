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


$factory->define(App\Batismo::class, function (Faker $faker) {
    $gender = $faker->randomElement(['Masculino', 'Feminino']);
    $localidade = $faker->randomElement(['Igreja Matriz', 'Igreja Sagrado','Igreja Nossa Senhora de Lourdes','Igreja São Paulo Apostolo']);
    $naturalidade =  $faker->randomElement(['Formiga','Arcos','Corrego Fundo','Divinopolis','Belo Horizonte']);
    $data = $faker->dateTimeBetween('1994-01-01', '2019-12-31')->format('Y-m-d');
    return [
        'nome' => $faker->name,
        'sexo' => $gender,
        'pai' => $faker->name,
        'mae' => $faker->name,
        'localidade' => $localidade,
        'naturalidade' => $naturalidade,
        'dataBatismo' => $data,
        'dataNascimento' => $data,
        'padrinho1' =>$faker->name,
        'padrinho2' =>$faker->name,
        'celebrante' => $faker->name,
        'paroco' => $faker->name,
        'paroquia_id' => 1,
    ];
});
