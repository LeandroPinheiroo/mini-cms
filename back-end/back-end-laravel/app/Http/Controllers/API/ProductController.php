<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\ProductRepository;
use App\Http\Requests\StoreProduct;
class ProductController extends Controller
{

    protected $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = $this->productRepository->getAll();
        return response()->json([
            'error' => false,
            'products'  => $products,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProduct $request)
    {
        $request->validated();

        $product = $this->productRepository->create(
            $request->except(['_token'])
        );
        return response()->json([
            'error' => false,
            'product'  => $product,
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if($id != null && $id > 0){
            $product = $this->productRepository->get($id);
            return response()->json([
                'error' => false,
                'product'  => $product,
            ], 200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreProduct $request, $id)
    {
        $request->validated();
        if($id != null && $id > 0){

            $product = $this->productRepository->update(
                $request->except(['_token']),
                $id
            );
            return response()->json([
                'error' => false,
                'product'  => $product,
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if($id != null && $id > 0){
            $product = $this->productRepository->delete($id);
            return response()->json([
                'error' => false,
                'product'  => $product,
            ], 200);
        }
    }
}
