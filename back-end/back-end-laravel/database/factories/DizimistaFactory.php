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


$factory->define(App\Dizimista::class, function (Faker $faker) {
    $gender = $faker->randomElement(['Masculino', 'Feminino']);
    $status = $faker->randomElement(['Ativo','Inativo']);
    $data = $faker->dateTimeBetween('1994-01-01', '2019-12-31')->format('Y-m-d');
    $estado_civil = $faker->randomElement(['Solteiro(a)','Casado(a)','Viúvo(a)s']);
    return [
        'nome' => $faker->name,
        'sexo' => $gender,
        'email' => $faker->unique()->safeEmail,
        'status' => $status,
        'aniversario' => $data,
        'casamento' => $data,
        'estado_civil' => $estado_civil,
        'comunidade_id' => 19,
    ];
});
