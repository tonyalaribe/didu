<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('task_id');
            $table->unsignedInteger('parent_id');
            $table->unsignedInteger('project_id');
            $table->unsignedInteger('template_id');
            $table->text('description');
            $table->string('parent');
            $table->string('level');
            $table->string('display_order');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->double('target_value');
            $table->float('target_weight');
            $table->string('progress');

            $table->foreign('project_id')->references('project_id')->on('projects')->onDelete('cascade');
            $table->foreign('template_id')->references('template_id')->on('templates')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
