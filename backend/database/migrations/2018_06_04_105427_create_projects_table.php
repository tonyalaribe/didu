<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('project_id');
            $table->string('project_name');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->string('scope');
            $table->text('description');
            $table->string('constraints');
            $table->string('deliverables');
            $table->string('risks');
            $table->string('contract_number');
            $table->float('work_budget');
            $table->float('project_management_budget');
            $table->float('total_budget');
            $table->string('progress');
            $table->boolean('active');

            $table->unsignedInteger('type_id');
            $table->unsignedInteger('organization_id');
            $table->unsignedInteger('city_id');
            $table->unsignedInteger('currency_id');
            $table->unsignedInteger('project_manager');
            $table->unsignedInteger('project_leader');
            $table->unsignedInteger('project_sponsor');


            $table->foreign('type_id')->references('type_id')->on('project_types')->onDelete('cascade');
            $table->foreign('organization_id')->references('organization_id')->on('organizations')->onDelete('cascade');
            $table->foreign('city_id')->references('city_id')->on('cities')->onDelete('cascade');
            $table->foreign('currency_id')->references('currency_id')->on('currencies')->onDelete('cascade');
            $table->foreign('project_manager')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('project_leader')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('project_sponsor')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
