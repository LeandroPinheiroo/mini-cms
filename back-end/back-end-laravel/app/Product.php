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
        'category_id',
    ];
    public $timestamps = false;

}
