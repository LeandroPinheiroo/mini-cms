<?php

namespace App\Repositories;

abstract class AbstractRepository
{
    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $model;

    public function get($id)
    {
        return $this->model->find($id);
    }

    public function getAll()
    {
        return $this->model->all();
    }

    public function create(array $data)
    {
        return $this->model->fill($data)->save();
    }

    public function update(array $data, $id)
    {
        return $this->get($id)->fill($data)->update();
    }

    public function delete($id)
    {
        return $this->get($id)->delete();
    }
}