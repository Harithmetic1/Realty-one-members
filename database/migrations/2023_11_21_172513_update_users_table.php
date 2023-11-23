<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::table(
            'users',
            function (Blueprint $table) {
                $table->foreignId('division_id')->nullable()->constrained();
                $table->string('phone');
                $table->string('bio')->nullable();
                $table->string('profile_picture')->nullable();
                $table->string('Department');
                $table->string('Role');
            }
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('users');
    }
};
