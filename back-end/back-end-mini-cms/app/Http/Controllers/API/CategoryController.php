<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\CategoryRepository;
use App\Http\Requests\StoreCategory;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
    */
    protected $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function index()
    {

        $categories = $this->categoryRepository->getAll();

        return response()->json([
            'error' => false,
            'categories'  => $categories,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategory $request)
    {
        $request->validated();

        $category = $this->categoryRepository->create(
            $request->except(['_token'])
        );

        return response()->json([
            'error' => false,
            'category'  => $category,
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
            $category = $this->categoryRepository->get($id);
            return response()->json([
                'error' => false,
                'category'  => $category,
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
    public function update(StoreCategory $request, $id)
    {
        $request->validated();

        $category = $this->categoryRepository->update(
            $request->except(['_token']),
            $id
        );

        return response()->json([
            'error' => false,
            'category'  => $category,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = $this->categoryRepository->delete($id);
        return $category;
    }
}
