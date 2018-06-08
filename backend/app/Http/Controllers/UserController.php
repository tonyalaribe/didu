<?php
/**
 * Created by PhpStorm.
 * User: ofonime
 * Date: 6/8/18
 * Time: 10:34 AM
 */

namespace App\Http\Controllers;


use App\Repositories\Repository;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $model;

    public function __construct(User $user)
    {
        $this->model = new Repository($user);
    }

    public function index()
    {
        return $this->model->all();
    }


    public function store(Request $request)
    {
        $this->validate($request, []);
        //Only fillable fields are passed down
        return $this->model->create($request->only($this->model->getModel()->fillable));
    }

    public function show($id)
    {
        return $this->model->show($id);
    }

    public function update(Request $request, $id)
    {
        $this->model->update($request->only($this->model->getModel()->fillable), $id);
        return $this->model->find($id);
    }

    public function delete($id)
    {
        return $this->model->delete($id);
    }

}