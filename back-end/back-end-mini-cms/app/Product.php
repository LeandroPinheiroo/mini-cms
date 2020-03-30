<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = [
        'id',
        'name',
        'price',
        'stock',
        'description',
    ];
    public $timestamps = false;

}
