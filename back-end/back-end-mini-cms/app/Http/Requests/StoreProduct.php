<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProduct extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'price' => 'required|number|min:0',
            'stock' => 'required|number|min:0',

        ];
    }

    public function messages()
    {
        return [
            //messages of name
            'name.required' => 'O nome é obrigatório',
            //messages of price
            'price.required' => 'O preço é obrigatório',
            'price.number' => 'O preço deve ser numérico',
            'price.min' => 'O preço deve ser no mínimo 0',
            //messages of stock
            'stock.required' => 'O estoque é obrigatório',
            'stock.min' => 'O estoque deve ser no mínimo 0',
        ];
    }
}
