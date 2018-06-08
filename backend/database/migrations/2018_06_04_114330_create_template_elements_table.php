<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemplateElementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('template_elements', function (Blueprint $table) {
            $table->increments('element_id');
            $table->text('description');
            $table->string('parent');
            $table->string('level');
            $table->string('display_order');
            $table->unsignedInteger('parent_id');
            $table->unsignedInteger('template_id');
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
        Schema::dropIfExists('template_elements');
    }
}
