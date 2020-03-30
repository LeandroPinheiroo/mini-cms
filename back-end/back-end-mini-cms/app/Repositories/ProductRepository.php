<?php

namespace App\Repositories;

use App\Product;

class ProductRepository extends AbstractRepository
{
	protected $model;

	public function __construct(Product $model)
	{
		$this->model = $model;
	}
 
}