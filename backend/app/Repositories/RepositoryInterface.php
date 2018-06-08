<?php
/**
 * Created by PhpStorm.
 * User: ofonime
 * Date: 6/8/18
 * Time: 9:30 AM
 */

interface RepositoryInterface {
    public function all();
    public function create(array $data);
    public function update(array $data, $id);
    public function delete($id);
    public function show($id);
}